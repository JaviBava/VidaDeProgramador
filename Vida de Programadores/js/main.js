const lines = document.querySelectorAll('.code p'); // Obtenemos todas las líneas
let currentLineIndex = 1; // Comenzamos desde la segunda línea

setInterval(() => {
  // Quitamos la clase 'highlighted' de la línea actual
  lines[currentLineIndex].classList.remove('highlighted');
  
  // Pasamos a la siguiente línea, o volvemos a la primera si llegamos al final
  currentLineIndex = (currentLineIndex + 1) % (lines.length - 1);
  if (currentLineIndex === 0) { // Si estamos en la primera línea, pasamos a la siguiente
    currentLineIndex = 1;
  }
  
  // Añadimos la clase 'highlighted' a la nueva línea actual
  lines[currentLineIndex].classList.add('highlighted');
}, 1000); // Cambiamos de línea cada segundo (1000 milisegundos)