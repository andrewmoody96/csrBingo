import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex flex-row justify-evenly bg-gray-200">
      <h1 className="text-4xl text-[#3E7091] my-3">zZSR Bingo</h1>
      <button
        onClick={() => window.location.reload(false)}
        className="bg-[#3E7091] rounded-full text-white p-2 my-3 hover:bg-gray-300 hover:text-[#3E7091]"
      >
        New Game
      </button>
      <Link to="https://www.zzounds.com/" target="_blank">
        <button className="bg-[#3E7091] rounded-full text-white p-2 my-3 hover:bg-gray-300 hover:text-[#3E7091]">
          Back to Work
        </button>
      </Link>
    </header>
  );
}
