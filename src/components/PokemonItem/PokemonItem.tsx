import { useFetchPokemon } from "../../hooks/useFetchPokemon";
import "./PokemonItem.css";

interface Props {
  url: string;
}

export const PokemonItem = ({ url }: Props) => {
  const { pokemon } = useFetchPokemon(url);
  return (
    <div className="pokemon-box bg-secondary d-flex flex-column p-2">
      <img
        className="w-75 h-75 mx-auto"
        src={
          pokemon?.sprites?.other?.dream_world.front_default ||
          pokemon?.sprites.front_default
        }
        alt=""
      />

      <h6 className="text-center"># {pokemon?.id}</h6>
      <h6 className="text-center">{pokemon?.name}</h6>
    </div>
  );
};
