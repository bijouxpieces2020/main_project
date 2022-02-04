let wrong;
let correct ;
let point = 0
class apicaller {
  //method aka functions-
// 1 DO 2 DONE 3 DONE 6 DONE 
// FACEBOOK 5 datasources -> wslow -> mutliple
// async , awawit, promise
//async is  javascript solution used to call api, javascript is a single threaded languague and without async it would be extremly slow.
//this happens wjen your using multiple apis
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

// let point_1 = localStorage.getItem("point")
// let point = parseInt(point_1);
// let names = localStorage.getItem("user")
// console.log(point)
  
let get_data = new apicaller

// document.getElementById("names").innerHTML  = `${point_1}`
// document.getElementById("score").innerHTML  = `${point}`

// use another classes
// use flex box
// post it to github
// use read me


// Initialize and add the map

// checks if the chosen  answer is correct verses incorrect
function we(arg,arg2){
  let click_Answer = arg.value
  //compare this -> correct 
  console.log(click_Answer)
 console.log(arg2)
  }

// fetching and saving data- comsume the api(called the api ,(await=traffic light) this almost like a traffic light between the 2 api)
async function trivia(){
 
  let answer = document.getElementById("answer")

  answer.innerHTML = ""
const url = "https://opentdb.com/api.php?amount=1&category=22&type=multiple"
  
 const data = await get_data.getApi(url);
 console.log(data)
 
 for(let i = 0; i < data.length ; i++){
  console.log(data[i])
  console.log(i)

  //savind data fromapit retrival
  let title = data[i]['question']// this will attach to the html for the question
  let wrong = data[i]['incorrect_answers']
  let correct = data[i]['correct_answer']
  
 console.log(correct)
// I wanted to make sure that the correct answer is always randomized and not placed in the same position.
  const randomQuestion =wrong.splice(Math.floor(Math.random() * wrong.length),0,correct)

  //styling the question
  //console.log(wrong)
  document.getElementById("title").innerHTML = `<h1> ${title} </h1>`
  document.getElementById("title").style.color = "dark blue";
  document.getElementById("title").style.fontFamily = "sans-serif";
  
  

   
    console.log(wrong) 
    // create an event listener, on the for loop, have the value to what the user  pressed and compare it too correct answer and alert
  

///looping through and creating questions from the api call
  for (let x = 0; x<wrong.length; x++){
      let button = document.createElement("button")
      button.value = wrong[x] 
      button.id = "answerResults"
      button.textContent = wrong[x]
    
      button.addEventListener("click",(evt)=> {
      let chosen = evt.target
      console.log ( chosen)
      console.log(correct)
      if (chosen.textContent === correct){
          alert("Correct answer Your points are:  "+(point+1))
           pointadder()
          
           
          // window.location.href="map.html"

        }else{
          alert("Incorrect answer Your points are:  "+(point-1))
          console.log("Incorrect Answer!!" )         
          remove()
          
        }

      })
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
  // let updated_point = point + 1
  // localStorage.setItem("point",`${updated_point}`)
  point+=1
  console.log(point)
  gamemaster()
  trivia()

// window.location.href="map.html"
    
  }

  function remove () {
  
    let updated_point = point - 1
    localStorage.setItem("point",`${updated_point}`)
    point-=1
    console.log(point)
    gamemaster()

    // window.location.href="map.html"
  }

  // continue the loop


  //console.log(Math.floor(Math.random() *3))

  console.log(title)
  return correct



 }
  
}

// this sis what creates the map
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

    
 
    const newMarker  = generateMarker(26.2540493,29.2675469,map)//egypt
    // newMarker = generateMarker(51.5073219,-0.1276474,map)//uk
    

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
  
  
  for (let city in latLng){
   const newMarker = generateMarker(latLng[city].lat, latLng[city].lng, map)
  }
  generateMarker()