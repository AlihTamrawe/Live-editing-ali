const x = document.querySelector("#in")
const p = document.querySelector("#p")
x.addEventListener("change", (event) =>{
    p.innerHTML =event.target.value;
})