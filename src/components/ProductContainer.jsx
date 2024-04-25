import React, { useState } from "react";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";

const ProductContainer = () => {
  const { meta } = useLoaderData();
  const totalProducts = meta.pagination.total;

  const [layout, setLayout] = useState("grid");

  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${
      pattern === layout ? "btn-secondary " : "btn-ghost "
    }`;
  };

  return (
    <>
      {/*header*/}
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5 ">
        <h4 className="font-medium text-md">
          {totalProducts} product{totalProducts > 1 && "s"}
        </h4>
        <div className="flex gap-x-2">
          <button
            type="button"
            onClick={() => setLayout("grid")}
            className={setActiveStyles("grid")}
          >
            <BsFillGridFill />
          </button>
          <button
            type="button"
            onClick={() => setLayout("list")}
            className={setActiveStyles("list")}
          >
            <BsList />
          </button>
        </div>
      </div>
      {/*Products*/}
      <div>
        {totalProducts === 0 ? (
          <h5 className="text-2xl mt-16">sorry, no products matched</h5>
        ) : layout === "grid" ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </>
  );
};

export default ProductContainer;
