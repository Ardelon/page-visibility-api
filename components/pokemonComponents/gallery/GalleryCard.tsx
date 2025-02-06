import { getPokemon } from "@/service";
import { capitalizeFirstLetter, preparePokemonIdForDisplay } from "@/utility";
import Link from "next/link";
import { Badge } from "../uiKit";
import Image from "next/image";

interface propsInterface {
  pokemon: { name: string; url: string };
}

export const GalleryCard = async (props: propsInterface) => {
  const identifier =
    props.pokemon.url.split("/")[props.pokemon.url.split("/").length - 2];

  const pokemon = await getPokemon(identifier);

  if ("message" in pokemon) {
    console.error(pokemon.message);
    return;
  }

  return (
    <div className="  md:w-64 w-full  p-2 border-2 border-[#3865d2]   rounded-lg ">
      <Link href={`/pokemon-app/pokemon/${identifier}`}>
        <Image
          alt={`${pokemon.name} default front image`}
          className=" md:w-60 md:h-60 w-full "
          src={pokemon.sprites.front_default}
          width={0}
          height={0}
          sizes="100vw"
        />

        <div>
          <h2 className="font-bold md:text-2xl text-xl">
            {capitalizeFirstLetter(props.pokemon.name)}
          </h2>
          <h3 className="font-semibold md:text-xl text-lg  pt-1">
            {preparePokemonIdForDisplay(String(pokemon.id))}
          </h3>
        </div>
        <div className="flex flex-row gap-2 py-4">
          {pokemon.types.map((type, index) => {
            return <Badge key={index} type={type.type.name} />;
          })}
        </div>
      </Link>
    </div>
  );
};

export default GalleryCard;
