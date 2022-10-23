// DOM selectors
const startGame = $("#newGame");
const boardContainer = $("#boardContainer");
const button = $("button");

// const tiles = 25;
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
let gamePhrases = [];
let alreadyUsed = [];

// function toggleTile(event) {
//   console.log("clicked")
//   event.target.addClass("bg-green-400");
//   event.target.removeClass("bg-[#3E7091]")
// }

// INDEX 12 for FREE SQUARE
function gameTileGen(phrases) {
  $.each(phrases, function (i, phrase) {
    $(
      boardContainer
    ).append(`<button id=${i} class="bg-[#3E7091] rounded-md text-white p-2 text-center items-center">
    ${phrase}
  </button>`); 
  });
  $(boardContainer).addClass("bg-gray-200");
}

function randomPhraseGen() {
  for (let i = 0; i < allPhrases.length; i++) {
    let randomPhrase =
      allPhrases[Math.floor(Math.random() * allPhrases.length)];
    
    if (gamePhrases.includes(randomPhrase) === false) {
      gamePhrases.push(randomPhrase);
      if (gamePhrases.length !== 25) {
        randomPhraseGen();
      } else {
        gameTileGen(gamePhrases);
      }
    }
  }
}

function newGame() {
  $(boardContainer).html("");
  gamePhrases = [];
  randomPhraseGen();
}

startGame.click(newGame);
// button.click(toggleTile(click));

