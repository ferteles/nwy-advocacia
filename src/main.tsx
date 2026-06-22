import { createRoot } from "react-dom/client";
import { clarity } from "react-microsoft-clarity";
import App from "./app/App";
import "./styles/index.css";

clarity.init("xb2tldxn72");

createRoot(document.getElementById("root")!).render(<App />);