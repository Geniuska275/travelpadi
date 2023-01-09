import React from "react";
import Header from "./components/Header/Header";
import Maps from "./components/Maps/map";

import { useState } from "react";
export default function App() {
  const spinner = document.getElementById("spinner");
  const [loading, setisLoading] = useState(true);
  if (spinner) {
    setTimeout(() => {
      setisLoading(false);
    }, 5000);
  }
  return (
    !loading && (
      <div>
        <Header />
        <Maps />
      </div>
    )
  );
}
