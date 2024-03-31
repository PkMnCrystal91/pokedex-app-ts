import axios from "axios";
import { useEffect, useState } from "react";
import { IPokemon } from "../interfaces/pokeInterfaces";

export const useFetchPokemon = (url?: string, id?: string) => {
  const [pokemon, setPokemon] = useState<null | undefined | IPokemon>();

  const fetchPokemons = async () => {
    if (url) {
      const { data }: any = await axios.get(url);
      setPokemon(data);
    } else if (id) {
      const { data }: any = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      setPokemon(data);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return { pokemon };
};
