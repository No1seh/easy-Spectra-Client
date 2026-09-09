// Sobreescribe src/buildProfile.ts segun el modo, antes de empaquetar.
//
//   node scripts/set-profile.mjs player    http://2.24.200.205:5100
//   node scripts/set-profile.mjs observer  http://2.24.200.205:5100
//   node scripts/set-profile.mjs normal
//
// "normal" restaura el comportamiento original (para no dejar el fork tocado).

import { writeFileSync } from "fs";

const mode = process.argv[2] || "normal";
const ip = process.argv[3] || null;

const perfiles = {
  normal: {
    mode: "normal",
    ingestIp: null,
    lockConnection: false,
    forceAutostart: false,
    forceTray: false,
    startHidden: false,
  },
  // Jugador: IP quemada, autoarranca oculto en bandeja, sin ventana.
  player: {
    mode: "player",
    ingestIp: ip,
    lockConnection: true,
    forceAutostart: true,
    forceTray: true,
    startHidden: true,
  },
  // Observador: IP quemada, panel completo pero sin campos de servidor/clave.
  observer: {
    mode: "observer",
    ingestIp: ip,
    lockConnection: true,
    forceAutostart: false,
    forceTray: true,
    startHidden: false,
  },
};

const p = perfiles[mode];
if (!p) {
  console.error(`Modo desconocido: ${mode}. Usa normal | player | observer.`);
  process.exit(1);
}

const ts = `// GENERADO por scripts/set-profile.mjs — no editar a mano.
export interface BuildProfile {
  mode: "normal" | "player" | "observer";
  ingestIp: string | null;
  lockConnection: boolean;
  forceAutostart: boolean;
  forceTray: boolean;
  startHidden: boolean;
}

export const BUILD_PROFILE: BuildProfile = ${JSON.stringify(p, null, 2)};
`;

writeFileSync("src/buildProfile.ts", ts);
console.log(`buildProfile.ts -> modo "${mode}"${ip ? `, IP ${ip}` : ""}`);
