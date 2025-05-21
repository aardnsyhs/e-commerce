import Container from "@/components/Container";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <Container className="bg-shop_light_pink">
      <h2 className="text-xl font-semibold">Home</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
        veniam beatae consectetur quod, inventore amet aliquid blanditiis et
        mollitia repellendus vel neque accusantium aspernatur eligendi veritatis
        rem laboriosam, enim explicabo asperiores alias omnis nulla officiis
        porro fugiat? Blanditiis eligendi, dignissimos sit doloribus facere
        numquam praesentium nisi doloremque porro, expedita repellat!
      </p>
      <Button size={"lg"}>Check out</Button>
    </Container>
  );
};

export default Home;
