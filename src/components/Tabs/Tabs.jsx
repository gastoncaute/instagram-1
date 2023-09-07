"use client";
import { useState } from "react";
import LenceriaTab from "./LenceriaTab";
import PantalonesTab from "./PantalonesTab";
import RemerasTab from "./RemerasTab";

export default function Tabs() {
  const [componenteVisible, setComponenteVisible] = useState("remeras");

  return (
    <section>
      <ul>
        <button onClick={() => setComponenteVisible("remeras")}>Remeras</button>
        <button onClick={() => setComponenteVisible("pantalones")}>
          Pantalones
        </button>
        <button onClick={() => setComponenteVisible("lenceria")}>
          Lenceria
        </button>
      </ul>

      {componenteVisible === "remeras" && <RemerasTab />}
      {componenteVisible === "pantalones" && <PantalonesTab />}
      {componenteVisible === "lenceria" && <LenceriaTab />}
    </section>
  );
}
