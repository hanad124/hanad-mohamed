import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provide";
import { Helmet } from "react-helmet";

import thumb from "../public/portfolio-thumb.svg";

<Helmet>
  <meta property="og:title" content={"Hanad Mohamed - MERN stack Developer"} />
  <meta
    property="og:description"
    content={
      "I am a MERN stack developer with a passion for building web applications. I have experience in building full-stack web applications using React, Node.js, Express, and MongoDB. I am currently looking for new opportunities to work on exciting projects"
    }
  />
  <meta property="og:image" content={thumb} />
  <meta property="og:url" content={"https://hanad-mohamed.vercel.app/"} />
  <meta property="og:type" content="website" />
</Helmet>;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
