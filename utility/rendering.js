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
  const rgb = [0, 0, 0];
  let sanitizedHexCode = "";
  const hashSplit = hexCode.split("#");
  if (hashSplit.length > 1) sanitizedHexCode = hashSplit[1];
  else sanitizedHexCode = hashSplit[0];

  if (sanitizedHexCode.length === 3) {
    rgb[0] =
      colorString.indexOf(sanitizedHexCode[0].toUpperCase()) * 16 +
      colorString.indexOf(sanitizedHexCode[0].toUpperCase());
    rgb[1] =
      colorString.indexOf(sanitizedHexCode[1].toUpperCase()) * 16 +
      colorString.indexOf(sanitizedHexCode[1].toUpperCase());
    rgb[2] =
      colorString.indexOf(sanitizedHexCode[2].toUpperCase()) * 16 +
      colorString.indexOf(sanitizedHexCode[2].toUpperCase());
  } else if (sanitizedHexCode.length === 6) {
    rgb[0] =
      colorString.indexOf(sanitizedHexCode[0].toUpperCase()) * 16 +
      colorString.indexOf(sanitizedHexCode[1].toUpperCase());
    rgb[1] =
      colorString.indexOf(sanitizedHexCode[2].toUpperCase()) * 16 +
      colorString.indexOf(sanitizedHexCode[3].toUpperCase());
    rgb[2] =
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
  } else if (Array.isArray(RGBCode)) {
    const hex = [
      "#",
      colorString[Math.floor(RGBCode[0] / 16)],
      colorString[RGBCode[0] % 16],
      colorString[Math.floor(RGBCode[1] / 16)],
      colorString[RGBCode[1] % 16],
      colorString[Math.floor(RGBCode[2] / 16)],
      colorString[RGBCode[2] % 16],
    ].join("");
    return { hex, error: "RGBToHex Error" };
  }
}

export function parseRGB(RGBCode) {
  const isRGB = checkIfRGB(RGBCode);
  if (!isRGB) {
    alert(
      "This is not correct RGB code format, please provide correct RGB format"
    );
    return { error: "RGBToHex Error" };
  }

  var rgb = RGBCode.match(/\d+/g);
  return {
    rgb: rgb.map((value) => {
      return Math.max(0, Math.min(255, Number(value)));
    }),
  };
}
