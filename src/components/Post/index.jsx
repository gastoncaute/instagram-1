import Foto from "./Foto";
import Info from "./Info";
import Comments from "./Inputs/Comments";
import Interacciones from "./Interacciones";

export default function Post({ datos }) {
  return (
    <section>
      <h1>Soy un posteo</h1>
      <Info userPic={datos.userPic} username={datos.username} />
      <Foto photo={datos.content} />
      <Interacciones cantidadDeLikes={datos.cantidadDeLikes} />
      <Comments />
    </section>
  );
}
