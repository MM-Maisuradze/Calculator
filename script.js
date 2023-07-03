let calculation = "";
let text = document.querySelector(".calc");
let bt = document.querySelector(".clear");
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let multiplication = document.querySelector(".multiplication");
let divide = document.querySelector(".divide");
let equel = document.querySelector(".equal");
let point = document.querySelector(".point");
let zero = document.querySelector(".zero");

let buttons = [
    document.querySelector(".one"),
    document.querySelector(".two"),
    document.querySelector(".three"),
    document.querySelector(".four"),
    document.querySelector(".five"),
    document.querySelector(".six"),
    document.querySelector(".seven"),
    document.querySelector(".eight"),
    document.querySelector(".nine"),

]
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        let num = i+1;
        calculation += num;
        text.innerHTML = calculation;
        console.log(calculation);
    })
}
point.addEventListener("click", ()=>{
    calculate(".");
});
plus.addEventListener("click", ()=>{
    calculate("+");
  })
minus.addEventListener("click", ()=>{
    calculate("-");
})
multiplication.addEventListener("click", ()=>{
    calculate("*");
})
divide.addEventListener("click", ()=>{
    calculate("/");
})
equel.addEventListener("click", ()=>{
    calculation = eval(calculation);
    text.innerHTML = calculation;
    calculation = calculation.toString();
})
bt.addEventListener("click", ()=>{
    calculation = "";
    text.innerHTML = calculation;
})
zero.addEventListener("click", ()=>{
  calculate("0");
})
function calculate(number){
  calculation += number;
  text.innerHTML = calculation;
}