window.addEventListener("DOMContentLoaded", () => {
    const flameLines = document.querySelectorAll(".flame-text p");
    const alreadyAnimated = sessionStorage.getItem("flameShown");
  
    if (!alreadyAnimated) {
      flameLines.forEach((line, index) => {
        line.style.animation = `fireFade 2s ease-in-out forwards`;
        line.style.animationDelay = `${0.2 + index * 0.2}s`;
        line.style.opacity = 1;
      });
      sessionStorage.setItem("flameShown", "true");
    } else {
      flameLines.forEach((line) => {
        line.style.opacity = 1;
      });
    }
  });
  