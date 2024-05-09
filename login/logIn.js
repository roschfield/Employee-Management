// for smooth loading
    document.addEventListener("DOMContentLoaded", function () {
        const content = document.querySelector("body");
        content.classList.add("active");
      });

      
const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const username = form.username.value

    const password = form.password.value

    const authenticated = authentication(username,password)

    if(authenticated){
        window.location.href = "../overview/overview.html"
    }else{
        alert("wrong")
    }
})

// function for checking username and password

function authentication(username,password){
    if(username === "admin" && password === "123"){
        return true
    }else{
        return false
    }
}


// function sum(a,b){
// return a+b;
// }

// sum(4,5);