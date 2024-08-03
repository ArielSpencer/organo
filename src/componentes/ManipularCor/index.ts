import hexToRgba from 'hex-to-rgba';

type HexColor = string;

export const ConverterHexParaRGBA = (hexColor: HexColor): string => hexToRgba(hexColor, '0.3');

export const GerarHex = (): string => `#${[...Array(6)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')}`;