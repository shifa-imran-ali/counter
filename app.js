let result = document.getElementById("result");
let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");
let reset = document.getElementById("reset");
let count=0;

increment.onclick = () => {
    count++;
    result.textContent = count;
}
decrement.onclick = () =>{
    count--;
    result.textContent = count;
}
reset.onclick = () => {
    result.textContent = 0;
}