// Nome do jogador

var nome = prompt("Digite seu nome:");

var elemento = document.getElementById("username");
elemento.innerHTML = nome;

// Nivel do jogador

let nivel = 1;

let nivels = nivel.toString().padStart(2, '0');

var elemento = document.getElementById("nivel");
elemento.innerHTML = String(nivels);

// Personagens

const radios = document.querySelectorAll("input");

radios.forEach(radio => {
  radio.addEventListener('change', function() {
    if (this.value === 'witch') {
      document.getElementById("userChoose").style.backgroundImage = "url('https://cdn-icons-png.flaticon.com/512/1078/1078195.png')";
    } else if (this.value === 'jason') {
      document.getElementById("userChoose").style.backgroundImage = "url('https://cdn-icons-png.flaticon.com/512/1078/1078201.png')";
    } else if (this.value === 'faixa') {
      document.getElementById("userChoose").style.backgroundImage = "url('https://cdn-icons-png.flaticon.com/512/1078/1078173.png')";
    } else if (this.value === 'bozo') {
      document.getElementById("userChoose").style.backgroundImage = "url('https://cdn-icons-png.flaticon.com/512/1078/1078174.png')";
    } else {
      document.getElementById("userChoose").style.backgroundImage = url();
    }
  });
});
