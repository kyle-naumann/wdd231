const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");

  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu",
  );
  menuButton.querySelector("span").textContent = isOpen ? "\u00d7" : "\u2630";
});
