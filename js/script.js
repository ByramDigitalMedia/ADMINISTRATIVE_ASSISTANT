function runTypingEffect() {
  const text = "I am Chris Jones."
  const typingElement = document.getElementById("typing-text")
  const typingDelay = 100

  typeText(text, typingElement, typingDelay)
}

function typeText(text, typingElement, delay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingElement.textContent += text.charAt(i)
    }, delay * i)
  }
}

document.addEventListener("DOMContentLoaded", runTypingEffect)

// *****************************************************************

/* =======================================================
 
  * Template URL: https://byramdigitalmedia.com
  * Updated: Sept 18 2025 with Bootstrap v5.3.3
  * Author: BDM
  * License: MIT
  ======================================================== */

let date = new Date().getFullYear()
document.getElementById("year").innerHTML = date
