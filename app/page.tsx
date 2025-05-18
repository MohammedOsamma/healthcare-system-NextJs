import Image from "next/image";
import Logo from "@/public/assets/icons/logo-full.svg";

export default function Home() {
  return (
    <div className="flex h-screen min-h-screen   ">
      <section className="container  remove-scrollbar my-auto">
        <div className="sub-container max-w-[496px]">
          <Image src={Logo} alt="pation" className="mb-12 h-10 w-fit" />
        </div>
        <h1 className="text-7xl">Mohamed </h1>
      </section>
    </div>
  );
}
