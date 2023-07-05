function calculaterent(){
    const cartype = document.getElementById("select").value;
    const userinput = parseInt(document.getElementById("rentduration").value)
    const output = document.getElementById("output")
    
    let rentalcost;
    if(cartype==="Economy"){
        rentalcost = 4000
    }
    if(cartype === "mid-size"){
        rentalcost = 10000;
    }
    if(cartype === "Luxury"){
        rentalcost = 20000;
    }

    const totalrent = rentalcost*userinput;

    output.innerHTML = `The rent of your selected car (${cartype})  for  ${userinput} days is  ${totalrent} RS`
}