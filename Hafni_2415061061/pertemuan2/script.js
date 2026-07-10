const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");
const contactForm = document.getElementById("contactForm");
const messageInput = document.getElementById("messageInput");
const warningMessage = document.getElementById("warningMessage");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    projectCards.forEach((card) => {
      const projectCategory = card.dataset.category;
      const shouldShow =
        selectedCategory === "semua" || selectedCategory === projectCategory;

      card.classList.toggle("hide", !shouldShow);
    });
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (messageInput.value.trim() === "") {
    warningMessage.textContent = "Pesan tidak boleh kosong.";
    warningMessage.classList.remove("success");
    messageInput.focus();
    return;
  }

  warningMessage.textContent = "Pesan berhasil disiapkan. Terima kasih!";
  warningMessage.classList.add("success");
  contactForm.reset();
});
