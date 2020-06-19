const seePlus = document.querySelector("#jsViewPlus");
const modal = document.querySelector("#jsViewPlusModal");

const handleSee = () => {
  if (modal.classList.contains("hide")) {
    modal.classList.remove("hide");
  } else {
    modal.classList.add("hide");
  }
};

seePlus.addEventListener("click", handleSee);
