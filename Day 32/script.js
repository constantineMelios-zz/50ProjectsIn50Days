const toggles = document.querySelectorAll('.toggle-input')
const good = document.getElementById('good')
const cheap = document.getElementById('cheap')
const fast = document.getElementById('fast')

toggles.forEach(toggle => toggle.addEventListener('change', (event) => handleChange(event.target)))

function handleChange(lastChecked) {
  if(good.checked && cheap.checked && fast.checked) {
    if(good === lastChecked) {
      fast.checked = false
    } else if (cheap === lastChecked) {
      good.checked = false
    } else {
      cheap.checked = false
    }
  }
}