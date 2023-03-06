import { useEffect, useState } from "react";
import Header from "../components/header";
import GameTile from "../components/gameTile";
import Footer from "../components/footer";

export default function Index() {
  const [tiles, setTiles] = useState();

  let allPhrases = [
    // 35 diff phrases right now
    "Didn't say it was on backorder when I ordered it.",
    "I thought you guys were supposed to be EXPERTS.",
    "I submitted my return request today & STILL haven't received my emails.",
    "*Customer calls you by a different name*",
    "I didn't authorize that charge. (Write Off)",
    "*Ordering food while placing the order.*",
    "*Wife placing order for husband muttering in the background.*",
    "Are you guys a real/legit company?",
    "Do you sell laptops?",
    "Can you send me a picture of the blemish?",
    "You cancelled my order and I want to know why. (Verification issues)",
    "Well, Guitar Center/Musician's Friend is doing 15% off.",
    "How do I get the included software?",
    "*Customer doesn't want anything. Just wants to talk.*",
    "Sorry, I'm driving right now.",
    "My wallet is in my car, can you hold on?",
    "Why do I have to pay return shipping?",
    "Well that's not what the site said.",
    "Steve here!",
    "You got any SG's or what?",
    "*Wants a supervisor w/ no explanation*",
    "I was promised it would be here by... (FedEx Delay)",
    "My bank is sending me a new card...",
    "I got charged twice.",
    "What are the best speakers for a DJ?",
    "Pioneer BO update",
    "Does this come with...?",
    "TALKER",
    "Abusive Customer",
    "I wanted to see about pushing back my payment a little bit.",
    "I've spent thousands of dollars with your company.",
    "I'll just go to Sweetwater from now on.",
    "Thank you, I'm sure you guys don't hear it enough.",
    "Let me speak to your supervisor.",
    "That was more than 30 seconds.",
  ];

  let promptArr = [];

  useEffect(() => {
    function randomPhraseGen() {
      for (let i = 0; i < allPhrases.length; i++) {
        let randomPhrase =
          allPhrases[Math.floor(Math.random() * allPhrases.length)];

        if (promptArr.includes(randomPhrase) === false) {
          promptArr.push(randomPhrase);
          if (promptArr.length !== 25) {
            randomPhraseGen();
          } else {
            promptArr.splice(12, 1, `\u2606 FREE SPACE \u2606`);
            // let phrases = {...promptArr};
            // console.log(phrases);
            // phrases.forEach((phrase) => {
            //   phrase.push()
            // })
            getTiles(promptArr);
          }
        }
      }
    }
    const getTiles = (arr) => {
      try {
        let currentGame = [];
        arr.forEach((prompt) => {
          currentGame.push(prompt);
          setTiles(currentGame);
        });
      } catch (error) {
        console.log(error);
        console.error("load failed: catch");
        setTiles(false);
      }
    };
    randomPhraseGen();
  }, []);

  return (
    <div
      className=""
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
    >
      <Header />

      <>
        {!tiles || tiles == false ? (
          <h3 className="flex w-auto font-arvo text-xl justify-center text-center visible p-2">
            ...loading
          </h3>
        ) : (
          <>
            <h3 className="flex w-auto font-arvo text-lg justify-center text-center visible p-2">
              Play fair, and<br></br>make sure to check off the FREE SPACE!
            </h3>
            {/* change sizing for mobile/smaller views */}
            <div className="border-2 border-black justify-center items-center grid grid-cols-5 m-2">
              {/* {console.log(tiles)} */}
              {tiles?.map((tile) => (
                <div key={tile}>
                  <div className="flex justify-center w-auto font-arvo">
                    <GameTile className="w-100" description={tile} />
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </>
      <Footer />
    </div>
  );
}
