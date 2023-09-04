import Post from "@/components/Post";
import publicaciones from "@/components/publicaciones.json"

export default function Home() {
  return (
    <main className="">
      {
        publicaciones.map((post, index) => (
          <Post datos={post} key={index} />
        ))
      }
      
    </main>
  )
}
