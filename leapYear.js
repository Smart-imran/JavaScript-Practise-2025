//leapYear check
function leapYear(year){

    if((year%400===0) || ((year %4 ===0) && (year%100!==0))){

        console.log(`This year ${year} is leap Year`)

    }

    else{
        console.log(`This year ${year} is not leap Year`)
    }

}

leapYear(2027);

