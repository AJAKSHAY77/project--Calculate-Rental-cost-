 function calculaterent(){

    const cartype = document.getElementById("select").value
    const userinput = document.getElementById("rentduration").value
    const output = document.getElementById("output")
let rentalcost;
    if(cartype==="Economy"){
         rentalcost = 2000;
    }
    if(cartype==="Luxury"){
         rentalcost = 6000;
    }
    if(cartype==="mid-size"){
         rentalcost = 4000;
    }

    const result = userinput * rentalcost;

    output.innerHTML = `the cost of ${cartype} for ${userinput} is ${result} RS`

 }