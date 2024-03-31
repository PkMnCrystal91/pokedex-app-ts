import {
  SearchInput,
  PokemonList,
  Pagination,
  CardDetails,
} from "./components";
import "./App.css";

export const App = () => {
  return (
    <div className="container-fluid px-5 py-1 ">
      <h2 className="text-center">Pokemon List</h2>
      <SearchInput />

      {/* Grid */}
      <div className="row justify-content-between">
        <PokemonList />
        <CardDetails />
      </div>

      <Pagination />
    </div>
  );
};
