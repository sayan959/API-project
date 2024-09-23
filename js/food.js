document.getElementById('search-button').addEventListener('click', function(){
   const searchInput = document.getElementById('search-input');
   const searchText = searchInput.value;
   //console.log(searchText);
   if(searchText == ''){
    alert("Search Your Foods")
    return;
   }

    //API Fetch
    
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
    .then(res => res.json())
    .then(data => displayFoodData(data?.meals)) //for display pass

   //clear the input
   searchInput.value ="";
})
//in foods recive the array data + loop in array get single single array
const displayFoodData = (foods)=>{
    if(foods == null){
        alert("Right now this food not available")
        return
    }

    const ui = document.getElementById('foods-div') //id div
    ui.innerHTML =''
    foods?.map( (food,)=> {
        
        const div = document.createElement('div');
        div.classList.add("card")
        div.classList.add("border-2")
        div.innerHTML=`
        <figure>
          <img
            src="${food.strMealThumb}"
            alt="Food" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">${food.strMeal}</h2>
          <p>${food.strInstructions.slice(0,180)}</p>
          <div class="card-actions justify-end">
            <button onclick="loadFoodName('${food.strMeal}')" class="btn btn-primary w-full">See Details</button>
          </div>
        </div>

        `
        ui.appendChild(div)
    })
    
}
//Show detelis

const loadFoodName = (name)=>{
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${$food.strMeal}`
    console.log(url);
    fetch(url)
            .then(res => res.json())
            .then(data => displayFoodDetails(data))  
    
}

const displayFoodDetails = (food) => {
    const detailsDiv = document.getElementById('food-details');
    detailsDiv.innerHTML=`
             <img class="w-1/2 h-1/2 border border-2 align-center mx-auto" src="${food.strMealThumb}" alt="">  
        <h3 class="m-2 text-5xl mt-3">Name:${food.strMeal}</h3>
        <p class="mb-5 text-lg">Instructions:${food.strInstructions.slice(0,180)}</p>
        
       
    
    `
    window.scrollTo({
            top: 0,
            behavior: 'smooth',
    });
    
}
    

