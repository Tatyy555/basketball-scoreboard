let homePointsEl = document.getElementById("homePoints")

let guestPointsEl = document.getElementById("guestPoints")

console.log(homePointsEl.innerText)
console.log(guestPointsEl.innerText)

let homePoint = 0
let guestPoint = 0

function add1PointHome(){
  homePoint += 1
  homePointsEl.innerText = homePoint
}
function add2PointHome(){
  homePoint += 2
  homePointsEl.innerText = homePoint
}
function add3PointHome(){
  homePoint += 3
  homePointsEl.innerText = homePoint
}

function add1PointGuest(){
  guestPoint += 1
  guestPointsEl.innerText = guestPoint
}
function add2PointGuest(){
  guestPoint += 2
  guestPointsEl.innerText = guestPoint
}
function add3PointGuest(){
  guestPoint += 3
  guestPointsEl.innerText = guestPoint
}
