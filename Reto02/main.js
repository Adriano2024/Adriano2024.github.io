const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const popup = document.getElementById('popup');
const buscador = document.getElementById('busca');
const closebusca = document.getElementById('closebusca');
openBtn.addEventListener('click', () => {
  popup.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});
closebusca.addEventListener('click', () => {
  buscador.style.display = 'none';
});


// Evitar el cierre del popup al hacer clic fuera de él
popup.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});
