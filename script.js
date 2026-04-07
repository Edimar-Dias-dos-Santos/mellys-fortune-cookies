const verses = [
  "For I know the plans I have for you, declares the Lord. — Jeremiah 29:11",
  "I can do all things through Christ who strengthens me. — Philippians 4:13",
  "The Lord is my shepherd; I shall not want. — Psalm 23:1",
  "Be strong and courageous. Do not be afraid. — Joshua 1:9",
  "With God all things are possible. — Matthew 19:26",
  "The joy of the Lord is your strength. — Nehemiah 8:10",
  "Trust in the Lord with all your heart. — Proverbs 3:5",
  "God is our refuge and strength, a very present help in trouble. — Psalm 46:1",
  "Let all that you do be done in love. — 1 Corinthians 16:14",
  "My grace is sufficient for you, for my power is made perfect in weakness. — 2 Corinthians 12:9",
  "Peace I leave with you; my peace I give you. — John 14:27",
  "The Lord will fight for you; you need only to be still. — Exodus 14:14",
  "Cast all your anxiety on Him because He cares for you. — 1 Peter 5:7",
  "The steadfast love of the Lord never ceases. — Lamentations 3:22",
  "Delight yourself in the Lord, and He will give you the desires of your heart. — Psalm 37:4"
];

const cookie = document.getElementById("cookie");
const verseText = document.getElementById("verseText");
const paper = document.getElementById("paper");
const newVerseBtn = document.getElementById("newVerseBtn");

let lastVerseIndex = -1;

function getRandomVerse() {
  if (verses.length === 1) {
    return verses[0];
  }

  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * verses.length);
  } while (randomIndex === lastVerseIndex);

  lastVerseIndex = randomIndex;
  return verses[randomIndex];
}

function openCookie() {
  const verse = getRandomVerse();
  cookie.classList.add("open");
  verseText.textContent = verse;
  paper.textContent = "God has a message for you";
}

function revealAnotherVerse() {
  cookie.classList.remove("open");
  verseText.textContent = "Opening a new cookie...";
  paper.textContent = "A blessing is waiting for you...";

  window.setTimeout(openCookie, 260);
}

cookie.addEventListener("click", openCookie);
newVerseBtn.addEventListener("click", revealAnotherVerse);
