const loading = setTimeout(() => {
  const word = "Learn GCSE content";
  const wordArray = word.split("");
  let i = 0;

  const timer = setInterval(() => {
    const titleElement = document.getElementById("title");

    titleElement.textContent += wordArray[i];

    titleElement.style.background =
      "linear-gradient(to right, rgba(88, 171, 255, 0.902), rgba(0, 255, 191, 0.94))";
    titleElement.style.webkitBackgroundClip = "text";
    titleElement.style.webkitTextFillColor = "transparent";

    i++;

    if (i === wordArray.length) {
      clearInterval(timer);
    }
  }, 120);
}, 1800);

loading();
