export const DEFAULT_SKIN = 'matrix';

export const SKINS = [
  { id: 'matrix', label: 'Matrix',      desc: 'Green terminal, hacker rain',        active: true  },
  { id: 'retro',  label: 'Retro',       desc: 'CRT scanlines, 8-bit arcade energy', active: false },
  { id: 'bold',   label: 'Bold',        desc: 'Saturated gradients, Y2K energy',    active: false },
  { id: 'motion', label: '3D / Motion', desc: 'Scroll animations, immersive',       active: false },
  { id: 'aurora', label: 'Aurora',      desc: 'Mesh gradients, dark glow',          active: false },
  { id: 'dark',   label: 'Dark',        desc: 'Clean dark with emerald',            active: false },
  { id: 'light',  label: 'Light',       desc: 'Clean light with emerald',           active: false },
] as const;

export type SkinId = (typeof SKINS)[number]['id'];
