
window.addEventListener("scroll", ()=>{
    const tour = document.querySelector(".tour");
    tour.classList.toggle("active", scrollY >= 40);
})



const div = document.querySelector(".div");
const inp = document.querySelector(".inside");
const exa = document.querySelector(".exa");

function myKey(){
if(inp.value !== " "){
    alert("Form Submitted");

} else {
    alert("Input cannot be empty");

}
  
}
