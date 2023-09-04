"use client";
import { useRef } from "react";

export default function Comments() {
  const inputRef = useRef();

  return (
    <section>
      <input
        ref={inputRef}
        type="text"
        className="border"
        placeholder="Comentario"
      />
      <button onClick={() => alert(inputRef.current.value)}>Enviar</button>
    </section>
  );
}
