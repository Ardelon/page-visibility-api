import { Gallery, GallerySkeleton } from "@/components/pokemonComponents";
import { getPokemonList } from "@/service";
import { Pagination } from "@/components/pokemonComponents/gallery";

type Props = {
  params: Promise<{ page: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

async function fetchPokemons(page: number) {
  const limit: number = parseInt(process.env.POKEMON_DISPLAY_COUNT ?? "20", 10);
  const offset = (page - 1) * limit;
  const pokemonList = await getPokemonList(offset);

  return {
    pokemonList,
    totalPages: Math.ceil(
      parseInt(process.env.POKEMON_COUNT ?? "1025", 10) / limit
    ),
    currentPage: page,
  };
}

const PokemonGalleryPage = async ({ searchParams }: Props) => {
  const { page: pagination } = await searchParams;
  const page = parseInt((pagination as string) ?? "1", 10);

  const {
    pokemonList,
    totalPages,
    currentPage = 20,
  } = await fetchPokemons(page);
  // const pokemonList: IPokemonList = await getPokemonList(0);
  if ("message" in pokemonList) return;
  <div>
    <GallerySkeleton></GallerySkeleton>;
    <Pagination currentPage={currentPage} totalPages={totalPages}></Pagination>
  </div>;
  return (
    <div>
      <Gallery pokemonList={pokemonList}></Gallery>;
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
      ></Pagination>
    </div>
  );
};

export default PokemonGalleryPage;
