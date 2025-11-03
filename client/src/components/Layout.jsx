// src/components/Layout.jsx
import React from "react";
import Nav from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Nav />
      <main className="flex-grow container mx-auto px-4 py-6">
        {children}
      </main>
      <footer className="py-4 text-center text-sm text-gray-500 border-t">
        © {new Date().getFullYear()} Nuru Blog. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
