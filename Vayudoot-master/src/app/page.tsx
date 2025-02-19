
import Hero from "./components/hero/page";
import Navbar from "./components/navbar/page";

export default function Home() {
  return (
    <main>
      <div>
          <section>
            <section>
              <Navbar></Navbar>
            </section>
            <section>
              <Hero></Hero>
            </section>
          </section>

      </div>
    </main>
  );
}
