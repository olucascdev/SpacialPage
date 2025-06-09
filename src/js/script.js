 // Fotos
 const images = [
    'img/1.jpeg',
    'img/2.jpeg',
    'img/3.jpeg',
    'img/4.jpeg',
    'img/5.jpeg',
    'img/6.jpeg',
    'img/7.jpeg',
    'img/8.jpeg',
    'img/9.jpeg',
    'img/10.jpeg',
    'img/11.jpeg',
    'img/12.jpeg',
    'img/13.jpeg',
    'img/14.jpeg',
    'img/15.jpeg',
    'img/16.jpeg',
    'img/17.jpeg',
    'img/18.jpeg',

  ];
  let index = 0;
  setInterval(() => {
    document.getElementById("gallery").src = images[index];
    index = (index + 1) % images.length;
  }, 3000);

  // Contador desde início do namoro
  const inicio = new Date("2024-01-20T20:30:33"); // <--- ajuste a data aqui
  setInterval(() => {
    const agora = new Date();
    const diff = agora - inicio;
    const anos = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    const meses = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    const dias = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    const horas = agora.getHours();
    const minutos = agora.getMinutes();
    const segundos = agora.getSeconds();
    document.getElementById("contador").innerText =
      `${anos} anos, ${meses} meses, ${dias} dias, ${horas}h ${minutos}m ${segundos}s`;
  }, 1000);


