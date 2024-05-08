$serviceName = "ExataServiceAppPedidoON"
$logonAccount = ".\Victor" 
$logonPassword = "S@ngali9962"

$service = Get-Service -Name $serviceName


Stop-Service -InputObject $service

$serviceProcess = Get-WmiObject -Class Win32_Service -Filter "Name='$serviceName'"
$serviceProcess.Change($null, $null, $null, $null, $null, $null, "$logonAccount", "$logonPassword")

Start-Service -InputObject $service
