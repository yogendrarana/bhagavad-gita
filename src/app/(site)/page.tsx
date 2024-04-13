// components
import Banner from "@/components/home/banner";
import About from "@/components/home/about";
import Footer from "@/components/home/footer";


export default function Home() {
  return (
    <div className="h-full flex flex-col gap-4">
      <div className="px-[var(--px)] ">
        <Banner />
      </div>
      <div className="px-[var(--px)] ">
        <About />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
