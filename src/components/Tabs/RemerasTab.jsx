import RemeraCard from "./RemeraCard";

export default function RemerasTab() {
  const remeras = [
    { nombre: "Remera 1", precio: "24" },
    { nombre: "Remera 2", precio: "34" },
    { nombre: "Remera 3", precio: "52" },
  ];

  return (
    <section>
      <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">Remeras</h2>

          <p class="max-w-md mt-4 text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            praesentium cumque iure dicta incidunt est ipsam, officia dolor
            fugit natus?
          </p>
        </header>

        <ul class="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
          {remeras.map((remera, indice) => (
            <RemeraCard
              key={indice}
              nombre={remera.nombre}
              precio={remera.precio}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
