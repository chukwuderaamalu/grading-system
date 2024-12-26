


function gradeSystem () {

    let input = document.querySelector(`.grade`)
let grade = input.value

    if (grade > 59 && grade < 70){
let result = `Your grade is B.`
 let remark = `Excellent!!`
document.querySelector(`.myDiv`).innerHTML =`${result} ${remark}` 
    }
    if (grade >= 70 && grade < 101){
let result = `Your grade is A.`
 let remark = `Very good!!`
document.querySelector(`.myDiv`).innerHTML = `${result} ${remark}` 
    }
    if (grade > 49  && grade < 60){
let result = `Your grade is C.`
 let remark = `Good job!!`
document.querySelector(`.myDiv`).innerHTML = `${result} ${remark}` 
    }
    if (grade > 39  && grade < 45){
let result = `Your grade is E.`
 let remark = `Pass`
document.querySelector(`.myDiv`).innerHTML =`${result} ${remark}` 
    }
    if ( grade >= 45 && grade < 50){
let result = `Your grade is D.`
 let remark = `Fair`
document.querySelector(`.myDiv`).innerHTML = `${result} ${remark}` 
    }
    if ( grade === 39 ||  grade < 40){
let result = `Your grade is FF.`
 let remark = `Fail!`
document.querySelector(`.myDiv`).innerHTML = `${result} ${remark}` 
    }

    input.value = ``
}

 function clearButton() {
    document.querySelector(`.myDiv`).innerHTML = ``
}
    