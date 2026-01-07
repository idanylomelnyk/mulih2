document.addEventListener("DOMContentLoaded", () => {
  const tabContainers = document.querySelectorAll(".tab");

  tabContainers.forEach((tabContainer) => {
    const radios = tabContainer.querySelectorAll(".tab__radio");
    const contents = tabContainer.querySelectorAll(".tab__content");

    radios.forEach((radio, index) => {
      radio.addEventListener("click", function () {
        const content = contents[index];

        if (content.classList.contains("active")) {
          content.classList.remove("active");
          radio.checked = false;
        } else {
          contents.forEach((c) => c.classList.remove("active"));
          radios.forEach((r) => (r.dataset.waschecked = "false"));
          content.classList.add("active");
          radio.dataset.waschecked = "true";
          radio.checked = true;
        }
      });
    });
  });
});
