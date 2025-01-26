const selected = document.getElementById('licence-yes');
const notselected = document.getElementById('licence-no');
const licence_number = document.getElementById('licence_number');

selected.addEventListener('change', handlechange);
notselected.addEventListener('change', handlechange);

function handlechange() {
  if (selected.checked) {
    licence_number.style.display = 'block';
  } else {
    licence_number.style.display = 'none';
  }
}
