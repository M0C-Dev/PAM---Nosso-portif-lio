const scrollBtn = document.getElementById("scroll-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

document.querySelectorAll("button[data-target]").forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.getAttribute("data-target");
    const section = document.getElementById(id);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

document.querySelectorAll("button[data-link]").forEach(btn => {
  btn.addEventListener("click", () => {
    const link = btn.getAttribute("data-link");
    const blank = btn.getAttribute("data-blank");

    if (blank) {
      window.open(link, "_blank");
    } else {
      window.location.href = link;
    }
  });
});