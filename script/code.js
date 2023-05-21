// const input =document.querySelector('input')
// const button =document.querySelectorAll('button')

function display (value){
  document.querySelector('input').value += value
}

function del(){
  let display = document.querySelector('input').value = display.slice(0,-1)
}

function clear(){
  document.querySelector('input').value = ''
}

function percentage(value){
  let display = document.querySelector('input').value
  document.querySelector('input').value = eval(display)/100
}

function ans(){
  let display = document.querySelector('input').value
  document.querySelector('input').value = eval(display)

}

function parentheses() {

  let parenthesesOpen = false;
  if (parenthesesOpen) {
    display(')');
    parenthesesOpen = false;
  } else {
    display('(');
    parenthesesOpen = true;
  }
}