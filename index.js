var rect = require('./rectangle');

function solveRect(l,b) {
    rect(l,b,(err, rectangle)=> {
        if (err) { //handling my error
            console.log("ERROR:"+ err.message)
        }else{
            console.log('The area of the rectangle is '+ rectangle.area())
            console.log('The perimeter of the rectangle is '+ rectangle.perimeter())
        }
    })
}

solveRect(-2,3)
console.log('this will be executed first')