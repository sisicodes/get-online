console.log('testing!')
const noButton = document.getElementById('unclickable'); 
const yesButton = document.getElementById('clickable');
const image = document.querySelector('img');
const header = document.querySelector('h1');
const header2 = document.querySelector('h2');
let x_pos;
let y_pos;
const screenWidth = screen.width;
const screenHeight = screen.height;

noButton.addEventListener('mouseover', function(e) {
    noButton.style.position = 'fixed';
    x_pos = getRandomX();
    y_pos = getRandomY();
    noButton.style.left = x_pos+'%';
    noButton.style.top = y_pos+'%';
})


yesButton.addEventListener('click', function() {
    image.src = 'assets/images/thankyou.gif';
    noButton.style.display = 'none';
    yesButton.style.display = 'none';
    header.textContent = 'Thank youuuu!!!'
    header2.textContent = 'plz get online'
})


function getRandomX() {
    return Math.floor(Math.random()*100);
    

}

function getRandomY() {
    return Math.floor(Math.random()*100);
    
}