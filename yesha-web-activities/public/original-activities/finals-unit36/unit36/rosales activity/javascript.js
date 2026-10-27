console.log(document)


const var1 = document.getElementById("h1")
console.log(var1)

const Button = document.getElementById("btn1")
console.log(Button)



Button.addEventListener (
    "click", function () {
        var1.innerHTML = "ONE CLICK"
        var1.style.backgroundColor = "Pink"
    }
)

const dbclick = document.getElementById("btnClick")
console.log(dbclick)

dbclick.addEventListener (
    "dblclick", function () {
        var1.innerHTML = "DOUBLE CLICK"
    }
)

const img = document.getElementById("Image")
console.log(img)


img.addEventListener (
    "mouseover", function (){
        var1.innerHTML ="You mouse reach the image!!"
    }
)

img.addEventListener (
    "mouseout", function (){
        var1.innerHTML ="You mouse leave the image!!"
    }
)

const Input = document.getElementById("input")


Input.addEventListener (
    "input", function () {
        var1.innerHTML = input.value 
    }
)

Input.addEventListener (
    "focus", function () {
        input.style.backgroundColor = "blue"
    }
)

Input.addEventListener (
    "blur", function () {
        input.style.backgroundColor = "white"
    }
)

