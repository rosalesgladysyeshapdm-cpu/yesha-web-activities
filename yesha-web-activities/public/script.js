const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuButton.textContent = isOpen ? "✕" : "☰";
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
    menuButton.textContent = "☰";
  });
});

document.querySelectorAll(".filter-bar").forEach((filterBar) => {
  const section = filterBar.closest(".activities-section");
  const cards = section.querySelectorAll(".activity-card");
  const buttons = filterBar.querySelectorAll(".filter");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      const selected = button.dataset.filter;

      cards.forEach((card) => {
        card.hidden = !(selected === "all" || card.dataset.category === selected);
      });
    });
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
