export async function GET() {
  const remeras = [
    { nombre: "Remera 1", precio: "24" },
    { nombre: "Remera 2", precio: "34" },
    { nombre: "Remera 3", precio: "52" },
  ];
  return new Response(JSON.stringify(remeras))
}