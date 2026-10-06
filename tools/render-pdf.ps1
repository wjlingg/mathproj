# Renders PDF pages to PNG using the Windows built-in PDF renderer (no extra tools needed).
# Use it for scanned papers that have no text layer, then open the PNGs to read them.
#   powershell -File tools/render-pdf.ps1 -Pdf "C:\path\paper.pdf" -Out "C:\out" -Tag name -From 1 -To 20 -Width 1100
# Output files are named <Tag>_<page>.png. Text-layer PDFs can use `pdftotext -layout` instead.
param([string]$Pdf, [string]$Out, [string]$Tag, [int]$From = 1, [int]$To = 999, [int]$Width = 1100)
Add-Type -AssemblyName System.Runtime.WindowsRuntime
$null = [Windows.Data.Pdf.PdfDocument, Windows.Data.Pdf, ContentType = WindowsRuntime]
$null = [Windows.Storage.StorageFile, Windows.Storage, ContentType = WindowsRuntime]
$null = [Windows.Storage.Streams.InMemoryRandomAccessStream, Windows.Storage.Streams, ContentType = WindowsRuntime]
$asTask = ([System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object { $_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncOperation`1' })[0]
$asAction = ([System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object { $_.Name -eq "AsTask" -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq "IAsyncAction" })[0]
function Await($op, $type) { $t = $asTask.MakeGenericMethod($type).Invoke($null, @($op)); $t.Wait(-1) | Out-Null; $t.Result }
$file = Await ([Windows.Storage.StorageFile]::GetFileFromPathAsync($Pdf)) ([Windows.Storage.StorageFile])
$doc = Await ([Windows.Data.Pdf.PdfDocument]::LoadFromFileAsync($file)) ([Windows.Data.Pdf.PdfDocument])
$to = [Math]::Min($To, $doc.PageCount)
for ($i = $From; $i -le $to; $i++) {
  $page = $doc.GetPage($i - 1)
  $opt = New-Object Windows.Data.Pdf.PdfPageRenderOptions
  $opt.DestinationWidth = $Width
  $ms = New-Object Windows.Storage.Streams.InMemoryRandomAccessStream
  $asAction.Invoke($null, @($page.RenderToStreamAsync($ms, $opt))).Wait()
  $ms.Seek(0)
  $reader = New-Object Windows.Storage.Streams.DataReader($ms)
  $null = Await ($reader.LoadAsync([uint32]$ms.Size)) ([uint32])
  $bytes = New-Object byte[] $ms.Size
  $reader.ReadBytes($bytes)
  [IO.File]::WriteAllBytes((Join-Path $Out ("{0}_{1:00}.png" -f $Tag, $i)), $bytes)
  $page.Dispose()
}
"pages: $($doc.PageCount)"
