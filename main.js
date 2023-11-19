let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #fb4993;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('Estudiante en Ingeniería de Administración en Sistemas')
  .pauseFor(200)
  .deleteChars(10)
  .start();
