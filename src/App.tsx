import { useContext } from "react";
import { PokemonContext } from "./context/PokemonContext";
import {
  SearchInput,
  PokemonList,
  Pagination,
  CardDetails,
} from "./components";
import "./App.css";

export const App = () => {
  const { pokemonsFiltered } = useContext(PokemonContext);

  return (
    <div className="container-fluid px-5 py-1 ">
      <h2 className="text-center">Pokemon List</h2>
      <SearchInput />

      {/* Grid */}
      <div className="row justify-content-between">
        <PokemonList url={pokemonsFiltered} />
        <CardDetails />
      </div>

      <Pagination />
    </div>
  );
};
