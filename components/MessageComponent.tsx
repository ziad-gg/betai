import ChatGpt from "@/components/svgs/chatgpt";

interface ModelComponentProps {
  author: "user" | "bot";
  userImage: JSX.Element;
  content: string;
}

export default function Messagea({
  author,
  userImage,
  content,
}: ModelComponentProps): JSX.Element {
  return (
    <div className="w-full h-20 flex flex-col">
      <div className="w-full h-[40%] ">
        <div className="flex min-h-[10%]">{userImage}</div>
      </div>
      <div className="w-full h-[80%] "></div>
    </div>
  );
}
