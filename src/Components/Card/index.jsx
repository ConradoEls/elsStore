import { useContext } from "react";
import { CartContext } from "../../Context"

const Card = ({ data }) => {
  const context = useContext(CartContext);
  const HandleClick = () => {
    context.setCount(context.count + 1);
  };
  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.category.name}
        </span>
        <img
          src={data.images[1]}
          alt="headphones"
          className="rounded-lg w-full h-full object-cover"
        />
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={HandleClick}
        >+
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light truncate mr-2">{data.title}</span>
        <span className="text-lg font-medium">${data.price}</span>
      </p>
    </div>
  );
};

export default Card;
