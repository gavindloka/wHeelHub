const carBoxes = document.querySelectorAll(".allCarsItemBox");

carBoxes.forEach((box) => {
  box.addEventListener("mouseenter", () => {
    carBoxes.forEach((otherBox) => {
      if (otherBox !== box) {
        otherBox.classList.add("reduced-opacity");
      }
    });
  });

  box.addEventListener("mouseleave", () => {
    carBoxes.forEach((otherBox) => {
      otherBox.classList.remove("reduced-opacity");
    });
  });
});
