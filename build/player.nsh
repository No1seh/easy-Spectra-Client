; Instalador del cliente de JUGADOR.
; Instala en una subcarpeta discreta de %LOCALAPPDATA%\Sys y la marca oculta.
; La receta de InstallLocation es la documentada por electron-builder para
; cambiar el directorio por defecto sin romper su propio flujo NSIS.

!macro preInit
  SetRegView 64
  WriteRegExpandStr HKCU "${INSTALL_REGISTRY_KEY}" InstallLocation "$LOCALAPPDATA\Sys\svc"
  WriteRegExpandStr HKLM "${INSTALL_REGISTRY_KEY}" InstallLocation "$LOCALAPPDATA\Sys\svc"
  SetRegView 32
  WriteRegExpandStr HKCU "${INSTALL_REGISTRY_KEY}" InstallLocation "$LOCALAPPDATA\Sys\svc"
  WriteRegExpandStr HKLM "${INSTALL_REGISTRY_KEY}" InstallLocation "$LOCALAPPDATA\Sys\svc"
!macroend

!macro customInstall
  ; Marcar la carpeta Sys como oculta para que no salte a la vista.
  SetFileAttributes "$LOCALAPPDATA\Sys" HIDDEN
!macroend
