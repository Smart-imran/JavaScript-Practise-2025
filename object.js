const college = {
    name : "Rajshahi",
    class : ["10","12"],
    events : ["science","arts", "commerce"],
    unique:{
        color: "red",
        result:{
            gpa:5,
            merit:"top"
        }
    }    
}



const profileKeys =  Object.values(college);
const hasName = JSON.stringify(college).includes("red")
console.log(profileKeys,hasName);

/* console.log(college.unique.result.merit);
console.log(college.unique.color);
console.log(college.events[1]); */