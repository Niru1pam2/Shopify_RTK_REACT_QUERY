import React, { useState } from "react";
import { customFetch, formatPrice, generateAmountOptions } from "../utils";
import { Link, useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

const singleProductQuery = (id) => {
  return {
    queryKey: ["singleProduct", id],
    queryFn: () => customFetch(`/products/${id}`),
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const response = await queryClient.ensureQueryData(
      singleProductQuery(params.id)
    );
    return { product: response.data.data };
  };

const SingleProduct = () => {
  const { product } = useLoaderData();
  const { image, title, price, description, colors, company } =
    product.attributes;
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };
  const dollarsAmount = formatPrice(price);

  const cartProduct = {
    cartID: product.id + productColor,
    productID: product.id,
    image,
    title,
    price,
    company,
    productColor,
    amount,
  };

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
  };

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      {/* Products*/}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/*IMAGE */}
        <img
          src={image}
          alt={title}
          className="object-cover w-96 h-96 rounded-lg lg:w-full "
        />
        {/* PRODuct*/}
        <div>
          <h1 className="capitalize text-3xl font-bold tracking-wide ">
            {title}
          </h1>
          <h4 className="mt-2 font-bold text-xl text-neutral-content">
            {company}
          </h4>
          <p className="mt-3 text-xl">{dollarsAmount}</p>
          <p className="mt-6 leading-8">{description}</p>
          {/*COLORS */}
          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider capitalize">
              Colors
            </h4>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type="button"
                    className={`badge w-6 h-6 mr-2 ${
                      color === productColor && "border-4 border-secondary"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                );
              })}
            </div>
            {/*AMOUNT */}
            <div className="form-control w-full max-w-xs">
              <label className="label" htmlFor="amount">
                <h4 className="text-md font-medium tracking-wider capitalize">
                  Amount
                </h4>
              </label>
              <select
                className="select select-secondary  select-bordered "
                id="amount"
                value={amount}
                onChange={handleAmount}
              >
                {generateAmountOptions(20)}
              </select>
            </div>
            {/*CArT btn */}
            <div className="mt-10">
              <button
                className="btn btn-secondary btn-md uppercase"
                onClick={addToCart}
              >
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
