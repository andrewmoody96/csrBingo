import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gray-200 mt-2 p-2 text-center">
      <Link to="https://andrewmoody96.github.io/portfolio-react/" target="_blank">
          <h2 className="text-md text-black hover:text-[#3E7091]">Created by Andrew Moody</h2>
      </Link>
    </footer>
  );
}
