const word_traversing = () => {
  setTimeout(() => {
    const sentence = "Level-Up Your Grades".split("");
    const title = document.getElementById("title");

    let i = 0;

    title.style.background =
      "linear-gradient(to right, rgba(88, 171, 255, 0.902), rgba(0, 255, 191, 0.94))";
    title.style.backgroundClip = "text";
    title.style.webkitTextFillColor = "transparent";

    const timer = setInterval(() => {
      if (i < sentence.length) {
        title.textContent += sentence[i];
        i++;
      } else {
        clearInterval(timer);
      }
    }, 105);
  }, 1450);
};

word_traversing();
