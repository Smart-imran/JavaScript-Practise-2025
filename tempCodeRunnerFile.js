const players =  ["Messi","Maradona", "play", "ronaldo", "Zidane"];

const filterring =  players.filter( player => (player.length > 5) && (player.toLowerCase().includes("on")) );

console.log(filterring);