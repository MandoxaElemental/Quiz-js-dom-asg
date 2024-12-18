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
let colorInput;
let colorInputLower;

changeColorBtn.addEventListener('click', function(e){
    userInput = boxNumber.value;
    colorInput = changeColor.value;
    colorInputLower = colorInput.toLowerCase();
    changeColor.value = '';
    boxNumber.value = '';
    if(colorInput == '' || userInput == ''){
        alert('Please input a valid number and color')
    }
    for(let i=0; i<numArray.length; i++){
        if(numArray[i] == userInput){
            for(let j=0; j<colorArray.length; j++)
            {
                if(colorArray[j] == colorInputLower){
                    boxArray[userInput-1].className = 'col-3 ' + 'text-center ' + 'boxSize ' + colorArray[j];
                }
                else if(colorInputLower != 'red' && colorInputLower != 'blue' && colorInputLower != 'purple' && colorInputLower != 'brown' && colorInputLower != 'yellow'){
                    return alert('Invalid Color: Options include: Red / Blue / Purple / Brown / Yellow')
                }
            }
        }
        else if(userInput > numArray.length){
            return alert('Invalid Number: Please enter a number betwen 1-8')
        }
    }

});

resetBtn.addEventListener('click', function(e){
    changeColor.value = '';
    boxNumber.value = '';
    box1.className = 'col-3 text-center boxSize reset'
    box2.className = 'col-3 text-center boxSize reset'
    box3.className = 'col-3 text-center boxSize reset'
    box4.className = 'col-3 text-center boxSize reset'
    box5.className = 'col-3 text-center boxSize reset'
    box6.className = 'col-3 text-center boxSize reset'
    box7.className = 'col-3 text-center boxSize reset'
    box8.className = 'col-3 text-center boxSize reset'
});