"use client";
import { useState } from "react";
import LenceriaTab from "./LenceriaTab";
import PantalonesTab from "./PantalonesTab";
import RemerasTab from "./RemerasTab";

export default function Tabs() {
  const [componenteVisible, setComponenteVisible] = useState("remeras");

  return (
    <section>
      <div class="hidden sm:block">
        <nav class="flex gap-6" aria-label="Tabs">
          <button
            onClick={() => setComponenteVisible("remeras")}
            class="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700"
          >
            Remeras
          </button>

          <button
            onClick={() => setComponenteVisible("pantalones")}
            class="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700"
          >
            Pantalones
          </button>

          <button
            onClick={() => setComponenteVisible("lenceria")}
            class="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700"
          >
            Lenceria
          </button>
        </nav>
      </div>

      {componenteVisible === "remeras" && <RemerasTab />}
      {componenteVisible === "pantalones" && <PantalonesTab />}
      {componenteVisible === "lenceria" && <LenceriaTab />}
    </section>
  );
}
