import { IEvolutionChain } from "@/interface/evolutionChainInterface";
import { IPokemon } from "@/interface/pokemonInterface";
import { capitalizeFirstLetter, preparePokemonIdForDisplay } from "@/utility";
import React from "react";
import PokemonCard from "./PokemonCard";
import { IErrorResponse } from "@/interface";

interface PokemonDetailRightSideInterface {
  evolutionChain: IEvolutionChain | IErrorResponse;
  pokemon: IPokemon;
}

const PokemonDetailRightSide: React.FC<PokemonDetailRightSideInterface> = (
  props
) => {
  let evolutionChainCards = new Array();

  if ("species" in props.evolutionChain) {
    evolutionChainCards = props.evolutionChain?.species.map((chain, index) => {
      return <PokemonCard key={index} chain={chain} />;
    });
  }

  if (evolutionChainCards.length < 3) {
    evolutionChainCards.push(<div></div>);
  }
  return (
    <div className="max-w-2xl">
      <h1 className="text-6xl font-bold text-[#3865d2] ">
        {capitalizeFirstLetter(props.pokemon.name)}
      </h1>
      <h2 className="text-2xl font-bold py-4">
        {preparePokemonIdForDisplay(String(props.pokemon.id))}
      </h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam velit
        officia facilis, asperiores maxime minus rerum? Accusamus illo obcaecati
        odio dignissimos eveniet voluptas nobis eaque mollitia. Commodi
        similique praesentium eum? Lorem ipsum dolor sit amet consectetur
        adipisicing elit.
      </p>
      <br />
      <p>
        Rem, cumque neque sit veritatis earum, necessitatibus repellat
        exercitationem laudantium quisquam dicta optio iusto ut amet nemo
        temporibus. Reprehenderit delectus id voluptatum! Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Eaque atque delectus molestiae
        quibusdam vero id temporibus voluptates error, doloremque dolores
        pariatur fuga dolorum iusto expedita quod, reiciendis nostrum, ipsam
        sapiente.
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, qui
        cumque? Dolor ullam, ad officia maxime voluptas possimus dicta earum,
        architecto distinctio similique fuga dolore nisi minima odit veniam
        impedit!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
        asperiores incidunt tenetur, voluptatibus facere iusto ut blanditiis
        eius ipsa quisquam dignissimos officia laboriosam aliquam ex sequi!
        Magnam nam praesentium quas. lorem
      </p>
      <div className="border-2 mt-8 border-[#3865d2] rounded-xl"></div>
      <h3 className="font-bold my-4 text-xl">Evolutionary Line</h3>
      <div className="flex flex-col xl:flex-row xl:justify-between items-center">
        {evolutionChainCards}
      </div>
      <div className="border-2 my-8 border-[#3865d2] rounded-xl"></div>
    </div>
  );
};

export default PokemonDetailRightSide;
