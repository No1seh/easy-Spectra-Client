; Instalador del cliente OBSERVADOR (tu PC).
; Misma carpeta oculta Sys, subcarpeta distinta para no colisionar con el
; cliente de jugador si ambos coincidieran en una maquina.

!macro preInit
  SetRegView 64
  WriteRegExpandStr HKCU "${INSTALL_REGISTRY_KEY}" InstallLocation "$LOCALAPPDATA\Sys\obs"
  WriteRegExpandStr HKLM "${INSTALL_REGISTRY_KEY}" InstallLocation "$LOCALAPPDATA\Sys\obs"
  SetRegView 32
  WriteRegExpandStr HKCU "${INSTALL_REGISTRY_KEY}" InstallLocation "$LOCALAPPDATA\Sys\obs"
  WriteRegExpandStr HKLM "${INSTALL_REGISTRY_KEY}" InstallLocation "$LOCALAPPDATA\Sys\obs"
  SetRegView 32
!macroend

!macro customInstall
  SetFileAttributes "$LOCALAPPDATA\Sys" HIDDEN
!macroend
