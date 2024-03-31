import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { AllPokemonsResult, PokeType } from "../interfaces/typesInterfaces";

interface ContextProps {
  types: PokeType[];
  pokemonsFiltered: string[] | null;
}

export const PokemonContext = createContext<ContextProps>({} as ContextProps);

const PokemonProvider = ({ children }: any) => {
  const allPokemonsUrl = "https://pokeapi.co/api/v2/pokemon?limit=4&offset=0";

  const defaultState: PokeType = {
    name: "All",
    url: allPokemonsUrl,
  };

  const [allPokemons, setAllPokemons] = useState(null);
  const [pokemonsFiltered, setPokemonsFiltered] = useState(null);

  const [types, setTypes] = useState([defaultState]);

  const getAllPokemons = async () => {
    const { data } = await axios.get(allPokemonsUrl);

    console.log({ data });

    const pokemons = data?.results?.map(
      (pokemon: AllPokemonsResult) => pokemon?.url
    );

    setAllPokemons(pokemons);
    setPokemonsFiltered(pokemons);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <PokemonContext.Provider value={{ types, pokemonsFiltered }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
