//Executing functions on the html page


//=== Activating the form ===
let form = document.querySelector("form");
    let remove = document.querySelector(".remove");    
    function displayForm() {
      form.style.display = "flex";
      remove.style.display = "block";
    }
    
//=== deactivating the form ===
    
    function removeForm() {
      form.style.display = "none";
      remove.style.display = "none";
}

// === Closing the form ===

let submit = document.getElementById("submit");

let username = document.getElementById("username");
let password = document.getElementById("password");

let msg = document.getElementById("msg");


let nameValue;
let pswValue;

submit.addEventListener("click", ()=>{
  nameValue = username.value;
  pswValue = password.value;
  
  console.log(`username: ${nameValue} 
password: ${pswValue}`);
})