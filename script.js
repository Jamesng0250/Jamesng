// Task 1

function filterPlacesByType(typePreference) {
  
  let filterPlace = [];
  for(let key of PLACES){
    let placeType = key.type;
  if(placeType == typePreference){
      filterPlace.push(key);
  }
  }
  
  return filterPlace;
}

// Task 2
function createCard(place) {
  let cardDiv = document.createElement("div");
  cardDiv.classList.add("col");
  cardDiv.innerHTML =` 
      <div class="card h-100" onclick="centerPlaceOnMap('${place.name}')">
        <img src= ${place.img} class="card-img-top h-100" alt="${place.name}">
        <div class="card-body">
          <h5 class="card-title">${place.name}</h5>
          <p class="card-text">${place.location}</p>
        </div>
      </div> `;
  return cardDiv; 
}


// Task 3
function populateRecommendationCards(filteredPlaces) {
let recommendationDiv = document.getElementById("recommendations");
  recommendationDiv.innerHTML="";
  for(let i = 0; i<filteredPlaces.length;i++){
     let card = createCard(filteredPlaces[i]);
       recommendationDiv.appendChild(card);
  }
  
}
 
//TASK 4

function findPlaceByName(placeName) {
  console.log(placeName);
  for(let key of PLACES){
     if(key.name == placeName){
       return matchPlace(key),key;
     }
  } 
}

//searching by user input
function matchPlace(placeName){
 let recommendationDiv = document.getElementById("recommendations");
   recommendationDiv.innerHTML="";
  let cardShow = createCard(placeName);
    recommendationDiv.appendChild(cardShow);
  }

 function matchPlaceMap(placeName){
   console.log(placeName);
    findPlaceByName(placeName);
   centerPlaceOnMap(placeName);
 }


function findPlaceByUserInput(){
  let destinationName = document.getElementById("destination").value

   for(let i =0;i<PLACES.length;i++){
     if (destinationName == PLACES[i].name || destinationName == PLACES[i].location){
   for(let key of PLACES){
     if(key.name == destinationName || key.location == destinationName){
         return matchPlace(key),matchPlaceMap(key.name),addMarkerToMap(key) ;
  }
     else{
          let recommendationDiv = document.getElementById("recommendations");
           recommendationDiv.innerHTML="";
        let notFoundMessage = document.createElement("h3");
        notFoundMessage.innerText = "Place Not Found";
        recommendationDiv.appendChild(notFoundMessage);
          }
       }
    }  
  }
}
