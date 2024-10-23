const content=document.querySelector('.pizza-cards')
// Fetch data from API
let pizaData;
async function fetchPizza(){
    const response= await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
     pizaData = await response.json();
    return pizaData
}
async function displayPizza(){
    
    const pizzas= await fetchPizza();
    
   const result= pizzas.recipes.map(function(pizza){
        return `
               <div class="card" onclick="displayImg(${pizza.recipe_id})">
                  <img src="${pizza.image_url}"alt="${pizza.title}">
                    <h2>${pizza.title}</h2>
                   
               </div>
        `}).join('')
    
   
content.innerHTML=result
}
displayPizza()

function displayImg(id){
 console.log(id)
 console.log(pizaData)
}
console.log('hi')

