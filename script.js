let app = document.getElementById('app');
let lampGrid = [];
let selectedLampIndex;
let previousLampIndex;
let isLit;

let startTime = new Date().getTime();
let finishTime = new Date().getTime();
let milliseconds = Math.floor(finishTime - startTime);
let seconds = milliseconds / 1000;


createLampGrid();
lightUp();
updateView();

function updateView() {
    app.innerHTML = /*HTML*/ `
    <div class="timer">Reaction timer</div>
        <div class="container">
            ${lampGrid.join('')}
        </div>
        <div class="timer">${seconds}</div>
    `;
}

function createLampGrid() {
    for(let i = 0; i < 25; i++){
        lampGrid.push(`<div class="circle"></div>`);
    }
}

function lightUp() {

    selectedLampIndex = Math.floor(Math.random() * lampGrid.length);

    if(selectedLampIndex != previousLampIndex){
        finishTime = new Date().getTime();
        milliseconds = Math.floor(finishTime - startTime);
        seconds = milliseconds / 1000;
        lampGrid[previousLampIndex] = `<div class="circle"></div>`;
        lampGrid[selectedLampIndex] = `<div onclick="lightUp()" class="circle lightOn"></div>`;
        previousLampIndex = selectedLampIndex;
    }
    else{
        lightUp();
    }
    startTime = new Date().getTime();
    updateView();
}
