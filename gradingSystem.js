//grading System

function division(mark) {

    if (mark >= 80) {
        return (`Result A+`)
    }

    else if (mark >= 70) {

        return (`Result A`)

    }

    else {
        return (`Result F`)
    }

}

const markSubject = division(50);

console.log(markSubject);