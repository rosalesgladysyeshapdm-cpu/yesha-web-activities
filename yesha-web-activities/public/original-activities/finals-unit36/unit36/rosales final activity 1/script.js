console.log(document)


const var1 = document.getElementById("h1")
console.log(var1)

const var2 = document.getElementById("footer1")
console.log(var2)

const Button = document.getElementById("btn1")
console.log(Button)


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
    "change", function () {
        var1.innerHTML = "hello" + this.inputMode.value + "!"
    }
)

Input.addEventListener (
    "input", function () {
        var1.innerHTML = input.value 
    
    }
)

Input.addEventListener (
    "focus", function () {
        input.style.backgroundColor = "cyan"
    }
)

Input.addEventListener (
    "blur", function () {
        input.style.backgroundColor = "white"
    }
)




Button.addEventListener (
    "click", function () {
        var1.innerHTML = "ONE CLICK"
        var1.style.color = "black"
    }
)

const dbclick = document.getElementById("btn2")
console.log(dbclick)

dbclick.addEventListener (
    "dblclick", function () {
        var1.innerHTML = "DOUBLE CLICK"
        var1.style.color = "red"
    }

)

const dbpress = document.getElementById("btn3")
console.log(dbpress)

dbclick.addEventListener (
    "dblpress", function () {
        var2.innerHTML = "Mouse button was pressed"

    }

)












