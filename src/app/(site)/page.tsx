// components
import Banner from "@/components/home/banner";

export default function Home() {
  return (
    <div className="h-full flex flex-col gap-4">
      <div className="h-full px-[var(--px)] ">
        <Banner />
      </div>
    </div>
  );
}
