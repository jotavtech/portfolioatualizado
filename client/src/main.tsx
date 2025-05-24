import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { TooltipProvider } from "./components/ui/tooltip";
import { Toaster } from "./components/ui/toaster";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TooltipProvider>
      <Toaster />
      <App />
    </TooltipProvider>
  </React.StrictMode>
);
