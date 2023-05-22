//code inspired by https://www.makeuseof.com/build-a-simple-calculator-using-html-css-javascript/

let sum = "";

function display(value) {
  document.querySelector('input').value += value
}

function del(){
   document.getElementById('inputtext').value = 
  document.getElementById('inputtext').value.slice(0, -1);
}

function clearSum(){
  document.getElementById('inputtext').value = sum;

}

// function percentage(value){
//   let display = document.querySelector('input').value
//   document.querySelector('inputText').value = eval(display)/100
// }

function evaluateSum(){
  let display = document.querySelector('input').value
  document.querySelector('input').value = eval(display).toFixed(2)

}
