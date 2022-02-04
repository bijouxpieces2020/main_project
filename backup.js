let wrong;
let correct ;

class apicaller {
  //method aka functions

async getApi(url){
  const response = await fetch(url)
  const data = await response.json()
  //console.log(data['results'])
  return data['results']
  
}
}
class starover{
  resetgame() {
   localStorage.setItem("point","0")
 
 
   alert("game restart")
 }
 }
 let game_reset = new starover;

 function gamereset_me() {
   game_reset.resetgame()
 }

let point_1 = localStorage.getItem("point")
let point = parseInt(point_1);
let names = localStorage.getItem("user")
let get_data = new apicaller

document.getElementById("names").innerHTML  = `${point_1}`
document.getElementById("score").innerHTML  = `${point}`

// use another classes
// use flex box
// post it to github
// use read me


// Initialize and add the map


function we(arg,arg2){
  let click_Answer = arg.value
  //compare this -> correct 
  console.log(click_Answer)
 console.log(arg2)
  }

// fetching and saving data
async function trivia(){
  
const url = "https://opentdb.com/api.php?amount=1&category=22&type=multiple"
  
 const data = await get_data.getApi(url);
 console.log(data)
 
 for(let i = 0; i < data.length ; i++){
  console.log(data[i])
  console.log(i)

  
  let title = data[i]['question']// this will attach to the html for the question
  let wrong = data[i]['incorrect_answers']
  let correct = data[i]['correct_answer']
  
 console.log(correct)
  const randomQuestion =wrong.splice(Math.floor(Math.random() * wrong.length),0,correct)
  //console.log(wrong)
  document.getElementById("title").innerHTML = `<h1> ${title} </h1>`

  

   let answer = document.getElementById("answer")
    console.log(wrong) // create an event listener, on the for loop, have the value to what the user  pressed and compare it too correct answer and alert
  


  for (let x = 0; x<wrong.length; x++){
      let button = document.createElement("button")
      button.value = wrong[x] 
      button.id = "answerResults"
      button.textContent = wrong[x]
      button.onclick = function(){
      let chosen = wrong[x]
      console.log ( chosen)
      console.log(correct)
      if (chosen === correct){
          alert("Correct answer")
           pointadder()
          
           
          //window.location.href="map.html"

        }else{
          console.log("Incorrect Answer!!")
          remove()
          
        }

      }
      console.log(wrong[x])
      answer.append(button)
   }

   let answer_Results = document.getElementById("answerResults")
  console.log(answer_Results);
    
   
  //  console.log(output)

  //  document.getElementById("answer").innerHTML = output
  


function gamemaster() {
  let la ={lng:118.243683,lat:34.052235}
  

  if (point > 10)  {
   alert("game over congratz"); 
  }
  else if (point< 0) {
    alert("you lost the game already")
  }
  else {
   // null;
  }

    // game point
}

  // what the user clicked

  // if === answer  then  points =+1 - points = -1

  

   function pointadder(){
  let updated_point = point + 1
  localStorage.setItem("point",`${updated_point}`)
  gamemaster()
//window.location.href="map.html"
    
  }

  function remove () {
  
    let updated_point = point - 1
    localStorage.setItem("point",`${updated_point}`)
    gamemaster()
   // window.location.href="map.html"
  }

  // continue the loop


  //console.log(Math.floor(Math.random() *3))

  console.log(title)
  return correct



 }
  
}


function initMap() {
    // The location of newYork
    const newYork = { lat:40.712776 , lng: -74.005974 };


  
    // The map, centered at New York
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 2,
      center: {lat:14.5994, lng:28.6731}
    });
    // The marker, positioned at newYork
    const marker = new google.maps.Marker({
      position: newYork,
      map: map,
    });

    
 
    const newMarker  = generateMarker(26.2540493,29.2675469,map)

    newMarker.addListener("click",()=>{
      trivia()
    })

    
  }

 
  function generateMarker(lat, lng,map){
    const countryMarker = {lat:lat, lng:lng}
    const marker = new google.maps.Marker({
      position: countryMarker,
      map: map,
    });
    return marker;
  
  }
  const latLng = {
    newYork: {
      lat:40.712776,
      lng:-74.005974
    },
     australia: {
       lat:-25.274399,
       lng:133.775131
     }
  }
  
  for (let city in latLng){
   const newMarker = generateMarker(latLng[city].lat, latLng[city].lng, map)
  }
  generateMarker()