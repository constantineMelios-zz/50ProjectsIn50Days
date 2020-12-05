const panels = document.querySelectorAll(".panel")

function closeActivePanels() {
  panels.forEach(panel => panel.classList.remove('active'))
}

function openPanel(event) {
  closeActivePanels()
  console.log(event.target, event.currentTarget)
  event.currentTarget.classList.add('active')
}

panels.forEach(panel => panel.addEventListener("click", openPanel))

panels.forEach(panel => panel.addEventListener('keydown', (event) => {
  if(event.code === "Enter") {
    openPanel(event)
  }
}))