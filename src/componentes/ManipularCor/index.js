import hexToRgba from 'hex-to-rgba';

export const ConverterHexParaRGBA = (hexColor) => hexToRgba(hexColor, '0.3');

export const GerarHex = () => `#${[...Array(6)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')}`;
