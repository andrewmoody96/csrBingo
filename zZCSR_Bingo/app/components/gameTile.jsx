import { useState, useEffect } from "react";
// import WinCheck from "../helpers/winCheck";

let indexes = [];

let winConditions = [
  // horizontal
  { combo: [0, 1, 2, 3, 4] },
  { combo: [5, 6, 7, 8, 9] },
  { combo: [10, 11, 12, 13, 14] },
  { combo: [15, 16, 17, 18, 19] },
  { combo: [20, 21, 22, 23, 24] },
  // vertical
  { combo: [0, 5, 10, 15, 20] },
  { combo: [1, 6, 11, 16, 21] },
  { combo: [2, 7, 12, 17, 22] },
  { combo: [3, 8, 13, 18, 23] },
  { combo: [4, 9, 14, 19, 24] },
  // diagonal
  { combo: [0, 6, 12, 18, 24] },
  { combo: [4, 8, 12, 16, 20] },
];

// console.log(winConditions);

export default function GameTile({ text }) {
  const [checked, setChecked] = useState("unchecked");
  const [win, setWin] = useState(false);

  const toggleChecked = (i) => {
    // ISSUES:
    // Win Condition is Met when arr and winString match EXACTLY. 
      // it's to the point that you have to click the tiles in the exact order that the string is setup.

    // NEXT STEPS:
    // sort the array 
    //
    // let newArray = []
      //
      // for every number, run that number against multipliers, then newArray.push(product)
      // 
      // // winConditions.forEach((condition) => {
      //   let winString = condition.combo.toString();
      //   console.log(winString);
      //   let newArrayString = newArray.toString(); 
      //   console.log(newArrayString);
      //   if (newArrayString === winString) {
      //     setWin(true);
      //     console.log("BINGO! You win!");
      //   } else {
      //     setWin(false);
      //   }
      // });

    const checkWin = (arr) => {
      if (arr.length < 5) {
        setWin(false);
      } else {
        arr = arr.toString();
        winConditions.forEach((condition) => {
          let winString = condition.combo.toString();
          // console.log(winString);
          if (arr === winString) {
            setWin(true);
            console.log("BINGO! You win!");
          } else {
            setWin(false);
          }
        });
        setWin(true);
      }
    };

    if (checked === "unchecked") {
      indexes.push(i);
      setChecked("checked");
      checkWin(indexes);
    } else {
      indexes = indexes.filter((val) => {
        return val !== i;
      });

      setChecked("unchecked");
      checkWin(indexes);
    }
  };

  return (
    <>
      <button
        onClick={() => toggleChecked(text.index)}
        className={
          checked == "checked"
            ? "checked bg-red-300 text-black w-[18vw] h-[12vw] text-center text-sm p-2 m-2 hover:text-white"
            : "unchecked bg-green-300 text-black w-[18vw] h-[12vw] text-center text-sm p-2 m-2 hover:text-white hover:bg-gray-800"
        }
      >
        <p>{text.tile}</p>
        {/* <p>{text.index}</p> */}
      </button>
    </>
  );
}

// write win conditions and logic to trigger them:
// 1. Win conditions based on certain combination of indexes.
// 2. Need to create a key for each index and make sure that the indexes can be referenced in the game win logic.
