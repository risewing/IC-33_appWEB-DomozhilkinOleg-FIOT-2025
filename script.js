(() => {
  const modal = document.getElementById("budgetInfoModal");
  const openBtn = document.getElementById("openBudgetInfo");
  const closeBtn = document.getElementById("closeBudgetInfo");
  const closeBtn2 = document.getElementById("closeBudgetInfo2");

  if (!modal || !openBtn) return;

  const openModal = () => {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  openBtn.addEventListener("click", openModal);

  closeBtn?.addEventListener("click", closeModal);
  closeBtn2?.addEventListener("click", closeModal);

  // Закриття по кліку на фон
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // Закриття по ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
})();
