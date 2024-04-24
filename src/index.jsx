import React from "react";
import ReactDOMClient from "react-dom/client";
import { Fundingregist } from "./screens/Fundingregist";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Fundingregist />);
