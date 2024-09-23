const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries()

const displayCountries = (countries)=> {
        
        

const ui = document.getElementById('countries')
countries.forEach(country => {
    //console.log(country);
    
    
    const div = document.createElement('div')
    div.classList.add('country')
    div.innerHTML= `
            <img class="w-full h-52 border border-2" src="${country.flags.png}" alt="">  
            <h3 class="m-2 text-3xl mt-3">Name:${country.name.common}</h3>
            <p class="mb-5 text-lg">Capital:${country.capital}</p>
            <button onclick="loadCountryByName('${country.name.common}')"  class="btn btn-primary btn-outline w-full"> See Details </button>

    `
        ui.appendChild(div)
   })
}

const loadCountryByName = (name)=>{
        const url =`https://restcountries.com/v3.1/name/${name}`
        console.log(url);
        fetch(url)
                .then(res => res.json())
                .then(data => displayCounryDetails(data[0]))  
        
}

const displayCounryDetails = (country) => {
        const detailsDiv = document.getElementById('country-details');
        detailsDiv.innerHTML=`
                 <img class="w-1/2 h-1/2 border border-2 align-center mx-auto" src="${country.flags.png}" alt="">  
            <h3 class="m-2 text-5xl mt-3">Name:${country.name.common}</h3>
            <p class="mb-5 text-lg">Capital:${country.capital}</p>
            <p class="mb-5 text-lg">Population:${country.population}</p>
           
        
        `
        window.scrollTo({
                top: 0,
                behavior: 'smooth',
        });
        
}