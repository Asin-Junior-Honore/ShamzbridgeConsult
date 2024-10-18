import About from "@/components/About";
import Herosection from "@/components/Herosection";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="herosection">
      <Herosection />
      <About />
      <Services />
    </main>
  );
}
