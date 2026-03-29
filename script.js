const message = `HI Q!!! Habadu, medj late sorry na nilamon ako ng org ko hwhaha Di ako ma-words of affirmation na tao kaya dito ko na sabihin sayo na I appreciate you so much :] It’s refreshing and comforting to have a friend na nanampal ng katotohanan but at the same time, gives the best advice and comfort. I want to remind you that your friends and family (esp your siblings) are lucky to have you. You never fail to listen and show up when you can. Sana basbasan ka pa ni Lord ng maraming blessings at parang awa umuwi ka na sa Pinas pls hehe labyu Q! Last minute ko to ginagawa rn 10:24 kasi may inuman kami ng 10:30 oki bye disc soon mwa Bye!\n\nLove, Denden`;

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