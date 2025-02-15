function exponentialPopulationGrowth(){
	
	let initialPopulation = parseFloat( prompt("Enter value for the initial population: "));
	let rateOfGrowth = parseFloat( prompt("Enter value for the rate of growth: "));
	let timeInHours = parseFloat( prompt("Enter the time in hours: "));
	
	let finalPopulation = Math.round(initialPopulation*Math.exp(rateOfGrowth*timeInHours));
	
	let region = prompt("Enter the location of the monster: ");
	let monster = prompt("Enter the name of the monster: ");
	
    let regionAndName = region.concat(" ", monster).toUpperCase();
	
    document.getElementById("result").innerHTML = "After " + timeInHours + " hours, the population of " + regionAndName + " has risen to " + finalPopulation;
}