/*var handle = document.getElementById("handle");
handle.onclick = loadList;

function loadList() {
document.getElementById("showing").classList.toggle("hidden");
}
*/

function toggleDropdown(element) {
  var dropdown = document.getElementById("dropdown");

  if (dropdown.className.indexOf('hidden') === -1) {
    dropdown.className = 'hidden';
  }
  else if (dropdown.className.indexOf('hidden') !== -1 ) {
    dropdown.className = dropdown.className.replace('hidden', '');
  }
}
