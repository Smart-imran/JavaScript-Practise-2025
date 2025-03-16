const profile = {
    name: "Rahim",
    age:28,
    city:"Rajshahi"
};

const keys = Object.keys(profile);
for(const key of keys){
    console.log(key,profile[key]);
}