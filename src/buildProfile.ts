/**
 * PERFIL DE COMPILACION
 * ---------------------------------------------------------------------------
 * Este fichero lo SOBREESCRIBEN los scripts de build (build:player /
 * build:observer) antes de empaquetar. El valor por defecto es "normal", que
 * deja el cliente EXACTAMENTE como el original: asi el fork sigue sirviendo
 * para el uso corriente y solo cambia cuando se compila un instalador fijo.
 *
 *   mode "normal"    -> comportamiento original, el modo lo decide --auxiliary
 *   mode "player"    -> siempre auxiliar, IP fija, autoarranca oculto en bandeja
 *   mode "observer"  -> siempre observador, IP fija, sin campos de servidor/clave
 */
export interface BuildProfile {
  mode: "normal" | "player" | "observer";
  /** IP de ingesta fija. Ej: "http://2.24.200.205:5100". null = la escribe el usuario. */
  ingestIp: string | null;
  /** Oculta y rellena los campos de servidor y clave en la interfaz. */
  lockConnection: boolean;
  /** Fuerza "arrancar con Windows" al instalar. */
  forceAutostart: boolean;
  /** Fuerza el icono de bandeja (para poder cerrar/restaurar sin ventana). */
  forceTray: boolean;
  /** Arranca sin mostrar la ventana (solo bandeja). Para el cliente de jugador. */
  startHidden: boolean;
}

export const BUILD_PROFILE: BuildProfile = {
  mode: "normal",
  ingestIp: null,
  lockConnection: false,
  forceAutostart: false,
  forceTray: false,
  startHidden: false,
};
