
import Hero from "./components/hero/page";
import Navbar from "./components/navbar/page";
import GradientText from "./components/heading/heading";
export default function Home() {
  return (
    <main>
      <div>
          <section>
            <section>
              <Navbar></Navbar>
            </section>
            <section>
              <GradientText></GradientText>
            </section>
            <section>
              <Hero></Hero>
            </section>
          </section>

      </div>
    </main>
  );
}
