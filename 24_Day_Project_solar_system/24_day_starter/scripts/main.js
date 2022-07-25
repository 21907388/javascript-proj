const e = document.getElementById("planets");
const planet = e.options[e.selectedIndex].text;
const mass = document.getElementById("mass");
const cal=document.querySelector("button");
const pic=document.getElementById("img");
let result;
const output=document.getElementById("print");
let arr=[1,2,5,6,7,8,7,9,7,3,7];
let planetNames=["mercury","mercury","venus","earth","mars","jupiter","saturn","uranus","neptune","pluto","moon"]
let selectedPlanet;

cal.addEventListener('click', ()=> {
    let massValue = parseInt(mass.value);
if (!massValue)
{
    output.style.color="red";
    output.innerHTML="invalid mass !";
    //window.location.reload();
 }
    else{

    if (e.selectedIndex==0){
        output.style.color="red";
    output.innerHTML="please select a valid planet!";
    //window.location.reload();
}
    else{

        output.style.color="white";

        selectedPlanet=planetNames[e.selectedIndex];
        result=arr[e.selectedIndex]*massValue*0;
        output.innerHTML=`${massValue} kgs object weights ${result} Newtons in ${selectedPlanet}`;
        console.log(selectedPlanet);
        console.log(e.selectedIndex);
        pic.src=`images/${selectedPlanet}.png`;
        console.log(result);
        console.log(massValue);
    }
}
})
