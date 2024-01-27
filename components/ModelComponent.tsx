import ChatGpt from "@/components/svgs/chatgpt";

interface ModelComponentProps {
  name: string;
}

export default function ModelComponent({ name }: ModelComponentProps): JSX.Element {
  return (
    <div className="min-w-full h-[20%] shadow-xl flex justify-start items-start p-6 hover:bg-main-blue hover:rounded-xl transition-all duration-700">
      <div className="flex justify-center items-center min-h-full min-w-fit">
        <ChatGpt />
      </div>
      <div className="min-h-full flex justify-start items-center min-w-[60%] ps-4">
        <h2 className="text-white font-bold text-xl select-none cursor-pointer">
          {name}
        </h2>
      </div>
    </div>
  );
}
