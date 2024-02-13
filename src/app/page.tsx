import Image from "next/image";
import Counter from "./components/Counter";

export default function Home() {
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <Counter />
      </div>
    </>
  );
}
