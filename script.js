document.getElementById('report').addEventListener('click', formula)

let a=0
let b=0
let h=0

function formula () {
  a = document.getElementById('math').value
  b = document.getElementById('math').value
  h = document.getElementById('math').value

  a = parseInt(a)
  b = parseInt(b)
  h = parseInt(h)

  number = (a+b)/2*h
  alert(number)
}

function calculator () {
  number = document.getElementById('trapezoid').value

unit = document.getElementById('text').value
measure = document.getElementById('input').value
work = document.getElementById('input').value

  alert(number)
}
