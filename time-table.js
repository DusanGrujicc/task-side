document.addEventListener("DOMContentLoaded", () => {
  const cells = document.querySelectorAll("td");

  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      cell.classList.toggle("done");
    });
  });
});
