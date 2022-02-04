console.log("loaded")
class login{
constructor(name){
    this.name = name;

}
login_attempt(){// checks to see if something is there, if the browser respond it return  a response.
    let username = localStorage.getItem("user")
    localStorage.setItem("point",0)
    updated_name = this.name
    if (username === null){
        alert(" This user doesn't exist creating user")
        localStorage.setItem("user", `${updated_name}`)
        console.log("working")
        
    }
    else{
        console.log("user has been found")
        console.log("working")
       
    }
}
}
//form vaildation
function start(){
let inputName = document.getElementById("id_1")
if (inputName === null) {
    console.log("Hey you need to use letters only")
}
else{
    const attempt = new login(inputName)
    attempt.login_attempt()
    window.location.href="map.html"

}
}


// async function getData() {

//     const data = await (await fetch('https://jservice.io/api/categories?count=6')).json()
    
//     const cluePromises = data.map(clue => fetch(`https://jservice.io/api/category?id=${clue.id}`).then(request => request.json()));
//     const clues = await Promise.all(cluePromises);
    
//     console.log(data);
//     console.log(clues);
//   }
//   getData();