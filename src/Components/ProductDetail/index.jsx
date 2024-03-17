import { useContext } from "react";
import { Context } from "../../Context";

const ProductDetail = () => {
  const context = useContext(Context);
  return (
    <aside className={`${context.isOpen ? "flex" : "hidden"} flex-col fixed right-0 top-[68px] border border-black rounded-l-lg bg-white w-[360px] h-[calc(100vh-80px)]`}>
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-xl">Detail</h2>
        <div className="rounded-full cursor-pointer bg-[#e2e1e1]" onClick={context.close}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </aside>
  );
};

export default ProductDetail;
