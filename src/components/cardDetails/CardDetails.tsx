import { useFetch } from "../../hooks/useForm";
interface Props {
  name: string[];
}

export const CardDetails = ({ name }: Props) => {
  const { pokeName, weight, types, sprites, moves } = useFetch(name);
  console.log({ pokeName, weight, types, sprites, moves });
  return (
    <div className="col-5 bg-secondary pt-3 px-4">
      <div className="row">
        <img
          className="w-75 mx-auto"
          src="https://reactjs.org/logo-og.png"
          alt=""
        />
      </div>
      <div className="row mt-2">
        <h5 className="text-center">Number#</h5>
        <h5 className="text-center">{pokeName}</h5>
      </div>
      <div className="">
        <h5 className="">Types</h5>
        <p className="">Grass</p>
      </div>
      <div className="">
        <h5 className="">Peso</h5>
        <p className="">11 Kg</p>
      </div>
      <div className="">
        <h5 className="">Sprites</h5>
        <h5 className="">Grass</h5>
      </div>
      <div className="">
        <h5 className="">Moves</h5>
        <p className="">Fire Punch Protect Hail Razor Leaf</p>
      </div>
    </div>
  );
};
