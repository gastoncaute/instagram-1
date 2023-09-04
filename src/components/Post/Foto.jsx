import Image from "next/image";

export default function Foto({ photo }) {
  return (
    <h3>
      <Image
        alt="Foto de la publicacion"
        src={photo}
        height={1000}
        width={1000}
      />
    </h3>
  );
}
