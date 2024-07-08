import { Header } from "@/src/Header";
import { Navbar } from "@/src/Navbar";

export default function Home() {
  return (
    <main className="m-auto flex h-full max-w-4xl flex-col px-4">
      <Header />
      <div className="mb-4 mt-8 flex flex-1 gap-4 overflow-auto max-lg:flex-col">
        <Navbar />
      </div>
    </main>
  );
}
