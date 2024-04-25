import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearCart } from "../features/cart/cartSlice";
import { logOutUser } from "../features/user/userSlice";
import { useQueryClient } from "@tanstack/react-query";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const user = useSelector((state) => state.userState.user);

  const handleLogout = () => {
    navigate("/");
    dispatch(clearCart());
    dispatch(logOutUser());
    queryClient.removeQueries();
  };

  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="flex justify-center capitalize sm:justify-end">
        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center ">
            <p className="text-xs sm:text-xm ">Hello, {user.username}</p>
            <button
              className="btn btn-xs btn-outline btn-primary capitalize"
              onClick={handleLogout}
            >
              logout
            </button>
          </div>
        ) : (
          <div className="flex gap-x-6 justify-center items-center sm:justify-end ">
            <Link to="/login" className="link link-hover text-xs sm:text-sm">
              Sign in / Guest
            </Link>
            <Link
              to="/register"
              className="link link-hover text-xs sm:text-sm sm:mr-20"
            >
              Create Account
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
