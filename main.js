var userChoice = document.querySelectorAll('input');
var text = document.querySelector('.text');
var recipe = document.querySelector(".recipe")
var pot = document.querySelector('#pot')
var cookButton = document.querySelector('.cook');

cookButton.addEventListener('click', showRandomDish);

function createRandomNum(arr) {
    return Math.floor(Math.random()*arr.length);
}
function showRandomDish() {
    pot.classList.toggle('hidden');
    text.classList.toggle('hidden');

    for (var i=0; i<userChoice.length;i++) {
        if (userChoice[i].checked && i===0) {
        recipe.innerText = `${sides[createRandomNum(sides)]}!`
        } else if (userChoice[i].checked && i===1) {
        recipe.innerText = `${mainDishes[createRandomNum(mainDishes)]}!`
        } else if (userChoice[i].checked && i===2) {
        recipe.innerText = `${desserts[createRandomNum(desserts)]}!`
        }; 
    }
} 