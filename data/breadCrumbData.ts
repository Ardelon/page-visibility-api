import { IBreadCrumbItem } from "@/interface/components/BreadCrumbItem";

export const breadCrumbData: IBreadCrumbItem[] = [
  {
    displayText: "Application",
    url: "",
    isBlank: false,
    children: [
      {
        displayText: "Pokedex",
        url: "/pokemon-app",
        isBlank: false,
        children: [],
      },
      {
        displayText: "Map",
        url: "/map-app",
        isBlank: false,
        children: [],
      },
      {
        displayText: "QR",
        url: "/qr-app",
        isBlank: false,
        children: [],
      },
    ],
  },
  {
    displayText: "Web API",
    url: "",
    isBlank: false,
    children: [
      {
        displayText: "Battery Status API",
        url: "/web-api/battery",
        isBlank: false,
        children: [],
      },
      {
        displayText: "Device Memory API",
        url: "/web-api/device",
        isBlank: false,
        children: [],
      },
      {
        displayText: "Eye Dropper API",
        url: "/web-api/eye-dropper",
        isBlank: false,
        children: [],
      },
      {
        displayText: "Intersection Observer API",
        url: "/web-api/intersection-observer",
        isBlank: false,
        children: [],
      },
      {
        displayText: "Page Visibility API - Video",
        url: "/web-api/video",
        isBlank: false,
        children: [],
      },
      {
        displayText: "Page Visibility API - Music",
        url: "/web-api/music",
        isBlank: false,
        children: [],
      },
      {
        displayText: "Page Visibility API - Timer",
        url: "/web-api/timer",
        isBlank: false,
        children: [],
      },
    ],
  },
  {
    displayText: "Color Series",
    url: "",
    isBlank: false,
    children: [
      {
        displayText: "Color Picker",
        url: "/color-picker",
        isBlank: false,
        children: [],
      },
      {
        displayText: "Color Catalog",
        url: "/color-catalog",
        isBlank: false,
        children: [],
      },
      {
        displayText: "Color Generator",
        url: "/color-generator",
        isBlank: false,
        children: [],
      },
      {
        displayText: "Color Palette Builder",
        url: "/color-palette-builder",
        isBlank: false,
        children: [],
      },
    ],
  },
  {
    displayText: "Medium Posts",
    url: "https://medium.com/@akeskinw",
    isBlank: true,
    children: [],
  },
];
