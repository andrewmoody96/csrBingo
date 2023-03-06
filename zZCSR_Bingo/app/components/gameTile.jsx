import { deserializeErrors } from "@remix-run/react/dist/errors";
import { useState, useEffect } from "react";

export default function GameTile({ description }) {
  // console.log(description);
  const [checked, setChecked] = useState("unchecked");

  const toggleChecked = () => {
    if (checked === "unchecked") {
      setChecked("checked");
    } else {
      setChecked("unchecked");
    }
  };

  return (
    <>
      <button
        onClick={toggleChecked}
        className={
          checked == "checked"
            ? "bg-red-300 text-black w-[18vw] h-[12vw] text-center text-sm p-2 m-2 hover:text-whit"
            : "bg-green-300 text-black w-[18vw] h-[12vw] text-center text-sm p-2 m-2 hover:text-white hover:bg-gray-800"
        }
      >
        <p>{description}</p>
      </button>
    </>
  );
}

// write win conditions and logic to trigger them:
// 1. Win conditions based on certain combination of indexes.
// 2. Need to create a key for each index and make sure that the indexes can be referenced in the game win logic.