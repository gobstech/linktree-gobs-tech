function toggleView() {
  let html = document.querySelector("html")
  let icon = document.querySelector("ion-icon")

  html.classList.toggle("dark")

  if (!html.classList.contains("dark")) {
    icon.setAttribute("name", "sunny-outline")
  } else {
    icon.setAttribute("name", "moon-outline")
  }
}
