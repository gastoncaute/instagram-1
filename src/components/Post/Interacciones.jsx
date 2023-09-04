import BotonDeLike from "./Buttons/LikeButton";

export default function Interacciones({ cantidadDeLikes }) {
  return (
    <>
      {cantidadDeLikes}
      <BotonDeLike />
    </>
  );
}
