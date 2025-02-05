/* eslint-disable prefer-spread */
import { colorString } from "./getNewColor";

export const isClient = () => typeof window !== "undefined";

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export function generateRandomKey() {
  return [
    ...Array.apply(null, Array(8)).map(() =>
      characters.charAt(Math.floor(Math.random() * characters.length))
    ),
  ].join("");
}

export function copyToClipboard(string: string) {
  navigator.clipboard.writeText(string);
}

export function hexToRGB(hexCode: string) {
  const rgb = { r: 0, g: 0, b: 0 };
  let sanitizedHexCode = "";
  const hashSplit = hexCode.split("#");
  if (hashSplit.length > 1) sanitizedHexCode = hashSplit[1];
  else sanitizedHexCode = hashSplit[0];

  if (sanitizedHexCode.length === 3) {
    rgb.r =
      colorString.indexOf(sanitizedHexCode[0].toUpperCase()) * 16 +
      colorString.indexOf(sanitizedHexCode[0].toUpperCase());
    rgb.g =
      colorString.indexOf(sanitizedHexCode[1].toUpperCase()) * 16 +
      colorString.indexOf(sanitizedHexCode[1].toUpperCase());
    rgb.b =
      colorString.indexOf(sanitizedHexCode[2].toUpperCase()) * 16 +
      colorString.indexOf(sanitizedHexCode[2].toUpperCase());
  } else if (sanitizedHexCode.length === 6) {
    rgb.r =
      colorString.indexOf(sanitizedHexCode[0].toUpperCase()) * 16 +
      colorString.indexOf(sanitizedHexCode[1].toUpperCase());
    rgb.g =
      colorString.indexOf(sanitizedHexCode[2].toUpperCase()) * 16 +
      colorString.indexOf(sanitizedHexCode[3].toUpperCase());
    rgb.b =
      colorString.indexOf(sanitizedHexCode[4].toUpperCase()) * 16 +
      colorString.indexOf(sanitizedHexCode[5].toUpperCase());
  } else {
    alert(
      "This is not correct hex code format, please provide correct hex format"
    );
    return { error: "hexToRGB Error" };
  }
  return { rgb };
}
export function RGBToHex(
  RGBCode: { r: number; g: number; b: number } | string
) {
  if (typeof RGBCode === "string") {
    const rgb = parseRGB(RGBCode);

    const hex = [
      "#",
      colorString[Math.floor(rgb.r / 16)],
      colorString[rgb.r % 16],
      colorString[Math.floor(rgb.g / 16)],
      colorString[rgb.g % 16],
      colorString[Math.floor(rgb.b / 16)],
      colorString[rgb.b % 16],
    ].join("");
    return { hex, error: "RGBToHex Error" };
  } else if (typeof RGBCode === "object") {
    const hex = [
      "#",
      colorString[Math.floor(RGBCode.r / 16)],
      colorString[RGBCode.r % 16],
      colorString[Math.floor(RGBCode.g / 16)],
      colorString[RGBCode.g % 16],
      colorString[Math.floor(RGBCode.b / 16)],
      colorString[RGBCode.b % 16],
    ].join("");
    return { hex, error: "RGBToHex Error" };
  }
}

export function parseRGB(RGBString: string) {
  const rgb = RGBString.match(/\d+/g) || [0, 0, 0];
  return {
    r: Math.max(0, Math.min(255, Number(rgb[0]))),
    g: Math.max(0, Math.min(255, Number(rgb[1]))),
    b: Math.max(0, Math.min(255, Number(rgb[2]))),
  };
}

export function rgbToHsl(rgbObject: { r: number; g: number; b: number }) {
  const r = rgbObject.r / 255;
  const g = rgbObject.g / 255;
  const b = rgbObject.b / 255;

  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h = 0,
    s = (max + min) / 2;
  const l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  return {
    h: Number(h.toFixed(3)),
    s: Number(s.toFixed(3)),
    l: Number(l.toFixed(3)),
  };
}

export function hslToRgb(props: { h: number; s: number; l: number }) {
  const { h, s, l } = props;
  let r, g, b;
  if (s == 0) {
    r = g = b = l; // achromatic
  } else {
    function hue2rgb(p: number, q: number, t: number) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    }

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return {
    r: Math.floor(Number(r) * 255),
    g: Math.floor(Number(g)) * 255,
    b: Math.floor(Number(b) * 255),
  };
}
