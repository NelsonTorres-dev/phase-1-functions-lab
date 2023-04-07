
//Scuber headquarters on 42nd Street. 
//traveled to 43rd st.
/*
inputs: pointA, pointB
Action:
Output:distance
*/

// const pointB = 45;
// if(pointB < 42){
//     return 42 - pointB;
// } else {
//     return pointB - 42;
// }

  // if(a > b){
    //     return (a - b) * 264
    // } else {
    //     return (b - a) * 264
    // }



function distanceFromHqInBlocks(pointB){
 
    return Math.abs(pointB - 42)
}
distanceFromHqInBlocks();


function distanceFromHqInFeet(someValue){
    return distanceFromHqInBlocks(someValue)*264;
}
distanceFromHqInFeet();


function distanceTravelledInFeet(a, b){

    return Math.abs(a-b)*264
  
}
distanceTravelledInFeet();


function calculatesFarePrice(start, destination) {
   const distance = distanceTravelledInFeet(start, destination) 

   if(distance <= 400){
    return 0;
   } if (distance >= 401 && distance <= 2000 ){
    return (distance - 400) * 0.02
   } else if (distance > 2000 && distance <= 2500){
    return 25
   } else if (distance > 2500 ){
    return 'cannot travel that far';
   }
  
}

calculatesFarePrice();