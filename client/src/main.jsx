import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { PostProvider } from "./context/PostContext";
import { CategoryProvider } from "./context/CategoryContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PostProvider>
      <CategoryProvider>
        <Router>
          <App />
        </Router>
      </CategoryProvider>
    </PostProvider>
  </React.StrictMode>
);
