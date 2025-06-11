
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./Loyout";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Layout/>
  </BrowserRouter>
);
