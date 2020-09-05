var userChoice = document.querySelectorAll('input');
var text = document.querySelector('.text');
var recipe = document.querySelector('.recipe');
var pot = document.querySelector('#pot');
var cookButton = document.querySelector('.cook');
var clearButton = document.querySelector('.clear-button');
var leftSideHtml = document.querySelector('.list');

leftSideHtml.addEventListener('click', enableCookButton)
cookButton.addEventListener('click', showRandomDish);
clearButton.addEventListener('click', eraseRecipe);

function disableCookButton() {
    cookButton.disabled = true;
}
function enableCookButton() {
    cookButton.disabled = false;
}
function createRandomNum(arr) {
    return Math.floor(Math.random()*arr.length);
}
function createRandomDish() {
    for (var i=0; i<userChoice.length;i++) {
        if (userChoice[i].checked && i===0) {
        recipe.innerText = `${sides[createRandomNum(sides)]}!`
        } else if (userChoice[i].checked && i===1) {
        recipe.innerText = `${mainDishes[createRandomNum(mainDishes)]}!`
        } else if (userChoice[i].checked && i===2) {
        recipe.innerText = `${desserts[createRandomNum(desserts)]}!`
        } else if (userChoice[i].checked && i===3){
        recipe.innerText = 
        `${sides[createRandomNum(sides)]} with a side of ${mainDishes[createRandomNum(mainDishes)]} and ${desserts[createRandomNum(desserts)]} for dessert!`
        }
    }
}
function showRandomDish() {
    var meal = new Meal(createRandomDish())
    pot.classList.toggle('hidden');
    text.classList.toggle('hidden');
} 
function eraseRecipe() {
    text.classList.add('hidden');
    pot.classList.remove('hidden');
}

disableCookButton()