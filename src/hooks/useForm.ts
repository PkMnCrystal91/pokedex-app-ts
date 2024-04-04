import axios from "axios";
import { useEffect, useState } from "react";

interface Profile {
  name: string;
  moves: string[];
  types: string[];
  sprites: string[];
  weight: number;
}

export const useFetch = (pokemon: string[]) => {
  const [profile, setProfile] = useState<Profile>({
    name: "",
    moves: [],
    types: [],
    sprites: [],
    weight: 0,
  });

  const fetchProfiles = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const { data }: any = await axios.get(url);

    const { name, moves, types, sprites, weight } = data;
    setProfile({
      name,
      moves,
      types,
      sprites,
      weight,
    });
  };

  useEffect(() => {
    fetchProfiles();
  }, [pokemon]);

  return {
    pokeName: profile.name,
    moves: profile.moves,
    types: profile.types,
    sprites: profile.sprites,
    weight: profile.weight,
  };
};
