import Image from "next/image";
import Link from "next/link";
import background from "@/public/icon-transformed.jpeg";

export default function Home(): JSX.Element {
  return (
    <main className="min-h-screen bg-[#414ee2] flex select-none">
      <div className="min-h-full w-[40%] p-10 flex flex-col gap-10">
        <div className="h-[15%] w-full ps-1">
          <div className="bg-white rounded-[100%] w-[13%] h-[80%] flex justify-center items-center font-extrabold text-main-blue text-4xl mb-1">
            Ai
          </div>
          <h1 className="text-main-white h-[20%] text-3xl font-bold">AiBox</h1>
        </div>
        <div className="h-[25%] w-full text-main-white">
          <h1 className="text-5xl font-extrabold ">Ai Chat Bot</h1>
          <h2 className="text-5xl font-semibold text-[#d3fbffe3]">
            Free Chat Ai
          </h2>
        </div>
        <div className="h-[45%] w-full gap-4 flex flex-col">
          {Component("Free Image Generator")}
          {Component("Unlimited Text Chat")}
          {Component("Fully Cusomizable")}
          {Component("Unlimited Ai Models")}
        </div>
        <div className="h-[15%] w-full">
          <div className="bg-[#3b8aca] w-[60%] rounded-xl p-2 flex items-center gap-4">
            <button className="text-main-blue text-5xl shadow-2xl font-bold bg-main-blue rounded-full">
              +
            </button>
            <Link className="font-bold text-white text-2xl" href="/chat">
              Get Start Now
            </Link>
          </div>
        </div>
      </div>
      <div className="min-h-full w-[60%] flex items-center justify-center">
        <Image src={background} alt="Ai" priority />
      </div>
    </main>
  );
}

function Component(text: string): JSX.Element {
  return (
    <div className="h-[20%] min-w-full flex flex-row items-center gap-3">
      <div className="rounded-[100%] w-[10%] h-[2.9rem] bg-[#3b8aca] shadow-xl text-white font-extrabold text-3xl flex justify-center items-center w">
        +
      </div>
      <h1 className="text-white font-bold text-xl">{text}</h1>
    </div>
  );
}
