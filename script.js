
const message = `Hi… :/ Sobrang busy ng Feb ko dahil sa org and acads kaya I was barely able to open IG if it wasn’t for school purposes. I hope you’re doing well, better than before. Just know I pray for you always. Things have changed a lot in my end and I’m still finding my time and way around things so sorry kung pa wala-wala ako and I’m not there for you all the time. Sorry, tander problems ih. Anyway, dalawang taon na rin pala. I love you. Miss u. Keeping it short lang, baka umiyak ka na from the website alone. PS: Ito yung sinasabi kong gagawin ko para paiyakin ka. Gagandahan ko next time. Bye!\n\nLove, Den`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}

