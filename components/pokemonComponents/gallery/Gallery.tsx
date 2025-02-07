import { IPokemonList } from "@/interface";
import GalleryCard from "./GalleryCard";

interface propsInterface {
  pokemonList: IPokemonList;
}

export const Gallery = (props: propsInterface) => {
  const galleryCards = props.pokemonList.results.map((pokemon) => {
    return <GalleryCard key={pokemon.name} pokemon={pokemon} />;
  });

  return (
    <section className="flex flex-wrap m-auto gap-4 justify-center">
      {galleryCards}
    </section>
  );
};

export default Gallery;
