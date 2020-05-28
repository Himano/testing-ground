const aboutText = document.querySelectorAll("p");

function theBananaSwap() {
  for (let i = 0; i < aboutText.length; i++) {
    const textReplace = aboutText[i].innerText
      .replace(/the /g, "banana ")
      .replace(/The /g, "Banana ");

    aboutText[i].innerText = textReplace;
  }
}
setTimeout(theBananaSwap, 3000);
