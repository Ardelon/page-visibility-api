import { getPokemonList } from "@/service";

const baseUrl = "https://ardelon.com/";

export default async function sitemap() {
  const pokemonList = await getPokemonList(0, 1025);

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}web-api/intersection-observer/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}color-picker/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}color-catalog/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}color-generator/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}color-palette-builder/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}web-api/battery`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}web-api/device`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}web-api/eye-dropper`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}web-api/music`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.1,
    },
    {
      url: `${baseUrl}web-api/video`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.1,
    },
    {
      url: `${baseUrl}web-api/timer`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.1,
    },
    {
      url: `${baseUrl}qr-app`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}map-app`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}pokemon-app`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...pokemonList.results.map((pokemon) => ({
      url: `${baseUrl}pokemon-app/${pokemon.name}`,
      lastModified: new Date(),
      priority: 0.1,
    })),
  ];
}
