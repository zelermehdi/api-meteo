//Clé d'authentification pour se connecter à l'API
const APIKEY = 'c41ae522935f1b30fafdb8674fc38277';
// variable pour appeller l'api ,j'ai choisi spécifiquement la ville de rouen 
let url = `https://api.openweathermap.org/data/2.5/weather?q=rouen&appid=${APIKEY}&units=metric`;
//  On envoie une requète à l'API avec la variable let url ,fetch() qui procure un moyen facile et logique de récupérer des ressources à travers le réseau de manière asynchrone.

fetch(url).then ((response) =>
// On obtient une réponse que l'on convertit au format .json 

response.json().then ((data) =>{
    // La méthode then() renvoie un objet Promise
    document.querySelector('#city').innerHTML=data.name + '<i class="fa-solid fa-city"></i>';
    document.querySelector('#temp').innerHTML=data.main.temp + '°' + '<i class="fa-solid fa-temperature-arrow-down"></i>';
    document.querySelector('#humidity').innerHTML=data.main.humidity + '%' + '<i class="fa-solid fa-droplet"></i>';
    document.querySelector('#wind').innerHTML=data.wind.speed + 'km/h' + '<i class="fa-solid fa-wind"></i>';

})
);

document.querySelector('form').addEventListener('submit',function(e){
    e.preventDefault();
    document.querySelector('#inputcity').value;
});
