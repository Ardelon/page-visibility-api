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

export function copyToClipboard(string) {
  navigator.clipboard.writeText(string);
}

export function checkIfHex(hexCode) {
  return true;
}
export function checkIfRGB(RGBCode) {
  return true;
}

export function hexToRGB(hexCode) {
  const isHex = checkIfHex(hexCode);
  if (!isHex) {
    alert(
      "This is not correct hex code format, please provide correct hex format"
    );
    return { error: "hexToRGB Error" };
  }
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
export function RGBToHex(RGBCode) {
  const isRGB = checkIfRGB(RGBCode);
  if (!isRGB) {
    alert(
      "This is not correct RGB code format, please provide correct RGB format"
    );
    return { error: "RGBToHex Error" };
  }

  if (typeof RGBCode === "string") {
    const { rgb, error } = parseRGB(RGBCode);
    if (error) {
      alert(
        "This is not correct RGB code format, please provide correct RGB format"
      );
      return { error: "RGBToHex Error" };
    }
    const hex = [
      "#",
      colorString[Math.floor(rgb[0] / 16)],
      colorString[rgb[0] % 16],
      colorString[Math.floor(rgb[1] / 16)],
      colorString[rgb[1] % 16],
      colorString[Math.floor(rgb[2] / 16)],
      colorString[rgb[2] % 16],
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

export function parseRGB(RGBString) {
  const isRGB = checkIfRGB(RGBString);
  if (!isRGB) {
    alert(
      "This is not correct RGB code format, please provide correct RGB format"
    );
    return { error: "RGBToHex Error" };
  }

  var rgb = RGBString.match(/\d+/g);
  return {
    rgb: {
      r: Math.max(0, Math.min(255, Number(rgb[0]))),
      g: Math.max(0, Math.min(255, Number(rgb[1]))),
      b: Math.max(0, Math.min(255, Number(rgb[2]))),
    },
  };
}

export function rgbToHsl(rgbObject) {
  let r = rgbObject.r / 255;
  let g = rgbObject.g / 255;
  let b = rgbObject.b / 255;

  let max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    let d = max - min;
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

  return { h: h.toFixed(3), s: s.toFixed(3), l: l.toFixed(3) };
}

export function hslToRgb(h, s, l) {
  let r, g, b;

  if (s == 0) {
    r = g = b = l; // achromatic
  } else {
    function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    }

    let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    let p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return { r: r * 255, g: g * 255, b: b * 255 };
}
