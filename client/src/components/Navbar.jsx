import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-gray-100 p-4 flex justify-between items-center">
      <h1 className="font-bold text-xl cursor-pointer" onClick={() => navigate("/")}>
        My Blog
      </h1>
      <div className="space-x-4">
        {token ? (
          <>
            <Link to="/create" className="text-blue-500 font-medium">
              Create Post
            </Link>
            <button
              onClick={handleLogout}
              className="text-red-500 font-medium hover:underline"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/register" className="text-green-500 font-medium hover:underline">
              Register
            </Link>
            <Link to="/login" className="text-blue-500 font-medium hover:underline">
              Login
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
