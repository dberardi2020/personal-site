export const DEFAULT_SKIN = 'matrix';

export const SKINS = [
  { id: 'matrix',    label: 'Matrix',       desc: 'Green terminal, hacker rain' },
  { id: 'retro',     label: 'Retro',        desc: 'CRT scanlines, 8-bit arcade energy' },
  { id: 'bold',      label: 'Bold',         desc: 'Saturated gradients, Y2K energy' },
  { id: 'brutalist', label: 'Neobrutalist', desc: 'Bold type, stark contrast' },
  { id: 'motion',    label: '3D / Motion',  desc: 'Scroll animations, immersive' },
  { id: 'aurora',    label: 'Aurora',       desc: 'Mesh gradients, dark glow' },
  { id: 'dark',      label: 'Dark',         desc: 'Clean dark with emerald' },
  { id: 'light',     label: 'Light',        desc: 'Clean light with emerald' },
] as const;

export type SkinId = (typeof SKINS)[number]['id'];
