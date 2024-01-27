import ModelComponent from "@/components/ModelComponent";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#414ee2] flex select-none">
      <div className="min-h-screen w-[20%] shadow-2xl bg-black rounded-e-2xl flex flex-col p-4">
        <div className="min-w-full h-[15%] text-center pt-5 pe-2">
          <h1 className="font-bold text-2xl text-white opacity-70 select-none">
            Choose Your Model
          </h1>
        </div>
        <div className="min-w-full h-[80%] flex flex-col gap-3 overflow-y-scroll no-scrollbar">
          <ModelComponent name="ChatGpt" />
          <ModelComponent name="Bard" />
          <ModelComponent name="openchat" />
          <ModelComponent name="gemini" />
          <ModelComponent name="llama" />
          <ModelComponent name="mixtral" />
        </div>
      </div>
      <div className="min-h-screen overflow-y-scroll w-[80%] flex justify-center items-center p-10">
        <div className="min-w-full h-[80%] bg-black rounded-2xl flex flex-col p-2">
          <div className="min-w-full flex-1">
            
          </div>
          <div className="min-w-full h-[20%] flex justify-center items-center">
            <textarea
              className="w-[70%] h-[3rem] p-4 bg-gray-800 text-white rounded-md outline-none resize-x-none no-scrollbar opacity-75 shadow-md shadow-gray-800 resize-y"
              placeholder="Type your message here..."
            />
          </div>
        </div>
      </div>
    </main>
  );
}
