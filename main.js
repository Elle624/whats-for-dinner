var userChoice = document.querySelectorAll('input');
var text = document.querySelector('.text');
var recipe = document.querySelector('.recipe');
var pot = document.querySelector('#pot');
var cookButton = document.querySelector('.cook');
var clearButton = document.querySelector('.clear-button');
var leftSideHtml = document.querySelector('.list');
var userRecipeType = document.querySelector('#recipe-type');
var userRecipeName = document.querySelector('#recipe-name');
var addRecipeButton = document.querySelector('.add-recipe-button');
var makeNewRecipeButton = document.querySelector('.add-user-recipe-button');
var userFormSection = document.querySelector('.add-new-recipe');

leftSideHtml.addEventListener('click', enableCookButton)
cookButton.addEventListener('click', showRandomDish);
clearButton.addEventListener('click', eraseRecipe);
addRecipeButton.addEventListener('click', showUserForm);
makeNewRecipeButton.addEventListener('click', addNewRecipe);

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
    createRandomDish();
    pot.classList.toggle('hidden');
    text.classList.toggle('hidden');
} 
function eraseRecipe() {
    text.classList.add('hidden');
    pot.classList.remove('hidden');
}
function showUserForm() {
    userFormSection.classList.remove('hidden');
}
function addNewRecipe() {
    event.preventDefault();
    var meal = new Meal(userRecipeType.value,userRecipeName.value);
    if (meal.dish.includes('side')) {
        sides.push(meal.name);
    } else if (meal.dish.includes('main')) {
        mainDishes.push(meal.name);
    } else if (meal.dish.includes('dessert')) {
        desserts.push(meal.name);
    }
    userRecipeType.value = '';
    userRecipeName.value = '';   
}
disableCookButton()