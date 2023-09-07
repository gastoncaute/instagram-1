export default function Page({ params }) {
  const usuarios = [
    { nombre: "Roberto", edad: "33", altura: "160" },
    { nombre: "Parangaricuatirimicuaro", edad: "19", altura: "170" },
    { nombre: "Lucia", edad: "25", altura: "120" },
    { nombre: "Manu", edad: "27", altura: "180" },
  ];

  const usuarioDeseado = usuarios.find(
    (usuario) => usuario.nombre.toLowerCase() === params.user
  );

  return (
    <section>
      {usuarioDeseado ? (
        <>
          <p>{usuarioDeseado.nombre}</p>
          <p>{usuarioDeseado.edad}</p>
          <p>{usuarioDeseado.altura}</p>
        </>
      ) : (
        <>No se encontro el usuario deseado!</>
      )}
    </section>
  );
}
