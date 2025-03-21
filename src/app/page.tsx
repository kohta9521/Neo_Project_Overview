import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import Philosophy from "@/components/organisms/Philosophy";
import Service from "@/components/organisms/Service";
import Works from "@/components/organisms/Work";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Philosophy />
      <div className="w-full h-[200px] sm:h-[300px] bg-[var(--main-red)] flex items-center justify-center">
        <p className="text-white">Image Insert</p>
      </div>
      <Service />
      <Works />
      <div className="w-full h-[500px]"></div>
    </>
  );
}
