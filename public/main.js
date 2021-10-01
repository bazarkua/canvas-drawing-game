/************** call variables ***************/
const clearButton = document.querySelector('.clear');
const stroke_weight = document.querySelector('.stroke-weight');
const color_picker = document.querySelector('.color-picker');
const color_picker_second = document.querySelector('.color-picker-second');
const color_picker_third = document.querySelector('.color-picker-third');
const color_picker_fourth = document.querySelector('.color-picker-fourth');
const color_picker_fifth = document.querySelector('.color-picker-fifth');
const generate = document.getElementById('new-word-container');
const btn = document.querySelector('.btn');

const canvas = document.querySelector('canvas');
const rendering = canvas.getContext('2d');
let isDraw = false; //set is the user is drawing to false

/************ set array for random generate words *************/
const words = ['cat', 'dog', 'bird', 'eagle', 'butterfly', 'alien', 'bee', 'tree', 'car', 'truck', 'train',
'fish', 'shark', 'whale', 'helicopter', 'airplane', 'mouse', 'dragon', 'fire', 'mountain', 'sea', 'waterfall',
'river', 'bat', 'cake', 'hamburger'];


canvas.addEventListener('mousedown', start); //as soon as click the mouse then draw
canvas.addEventListener('mousemove', draw); //when mouse move then create a line 
canvas.addEventListener('mouseup', stop); //as soon as stop clicking then stop drawing

btn.addEventListener('click', generate_random); //click button to generate random word
clearButton.addEventListener('click', clearCanvas); //click button to clear canvas

//change color if click on the button
color_picker.addEventListener('click', function(){
  rendering.strokeStyle = "black";
}
);
//for red color
color_picker_second.addEventListener('click', function(){
  rendering.strokeStyle = "red";
}
);
//for blue color
color_picker_third.addEventListener('click', function(){
  rendering.strokeStyle = "blue";
}
);
//for yellow color
color_picker_fourth.addEventListener('click', function(){
  rendering.strokeStyle = "yellow";
}
);
//for green color
color_picker_fifth.addEventListener('click', function(){
  rendering.strokeStyle = "green";
}
);

//function generate random word from array 
function generate_random(){
  var new_word = words[Math.floor(Math.random()*words.length)];
  console.log(new_word);
  generate.textContent = new_word;
  clearCanvas();
}

//start drawing
function start (e) {
  isDraw = true;
  draw(e); //let the user be able to draw dot pixel
}

//pulling out component from an object
function draw ({clientX: x, clientY: y}) {
  if (!isDraw) return;
  rendering.lineWidth = stroke_weight.value; //allow user to input thickness of line
  rendering.lineCap = "round"; //the end of the drawing line is round
  rendering.strokeStyle = color_picker.value;

  rendering.lineTo(x, y);
  rendering.stroke(); //start drawing
  rendering.beginPath(); //create new path after draw
  rendering.moveTo(x, y); //move to x and y position
}

//in order to draw free hand not create a path behind
function stop () {
  isDraw = false;
  rendering.beginPath();
}

//clear the drawing canvas
function clearCanvas () {
  rendering.clearRect(0, 0, canvas.width, canvas.height);
}

//resize the canvas page when we start the app
window.addEventListener('resize', resizeCanvas);
function resizeCanvas () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();