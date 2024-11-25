let boxNumber = document.getElementById('boxNumber');
let changeColor = document.getElementById('changeColor');
let changeColorBtn = document.getElementById('changeColorBtn');
let resetBtn = document.getElementById('resetBtn');
let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');
let box4 = document.getElementById('box4');
let box5 = document.getElementById('box5');
let box6 = document.getElementById('box6');
let box7 = document.getElementById('box7');
let box8 = document.getElementById('box8');
let colorArray = [
    'red',
    'blue',
    'purple',
    'brown',
    'yellow'
];
let numArray = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
];
let boxArray = [
    box1,
    box2,
    box3,
    box4,
    box5,
    box6,
    box7,
    box8
];

let userInput;

changeColorBtn.addEventListener('click', function(e){
    
});

resetBtn.addEventListener('click', function(e){
    box1.className = 'col-3 ' + 'text-center ' + 'boxSize ' + 'reset'
    box2.className = 'col-3 ' + 'text-center ' + 'boxSize ' + 'reset'
    box3.className = 'col-3 ' + 'text-center ' + 'boxSize ' + 'reset'
    box4.className = 'col-3 ' + 'text-center ' + 'boxSize ' + 'reset'
    box5.className = 'col-3 ' + 'text-center ' + 'boxSize ' + 'reset'
    box6.className = 'col-3 ' + 'text-center ' + 'boxSize ' + 'reset'
    box7.className = 'col-3 ' + 'text-center ' + 'boxSize ' + 'reset'
    box8.className = 'col-3 ' + 'text-center ' + 'boxSize ' + 'reset'
});