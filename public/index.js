window.addEventListener('load', function(){

  var canvas = document.querySelector('#main-canvas');

  var context = canvas.getContext('2d');


  var clearDoodle = function(){

    context.clearRect(0, 0, 600, 500);
    context.beginPath();
    // context.fillRect(0,0,600,500);
    // context.fillStyle = 'white';
    console.log('button pressed');


  }

  var clearButton = document.querySelector('#clear-button');
  clearButton.addEventListener('click', clearDoodle);


  var currentX = 200;
  var currentY = 200;


  context.fillRect(currentX, currentY, 2, 2);
  context.beginPath();
  context.moveTo(currentX, currentY);



  window.addEventListener('keydown', function(event){

    switch (event.key) {
      case "ArrowDown":
      if(currentY <= 493){
      currentY += 5;
      context.lineTo(currentX, currentY);
      context.stroke();}
      break;
      case "ArrowUp":
      if(currentY >= 7){
      currentY -= 5;
      context.lineTo(currentX, currentY);
      context.stroke();}
      break;
      case "ArrowLeft":
      if (currentX >=7){
      currentX -= 5;
      context.lineTo(currentX, currentY);
      context.stroke();}
      break;
      case "ArrowRight":
      if(currentX <= 593){
      currentX += 5;
      context.lineTo(currentX, currentY);
      context.stroke();}
      // Do something for "right arrow" key press.
      break;

      default:
      return;
    }

  })












})
