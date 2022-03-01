
let tableau = [1,2,3,4,5,6,7,8,9,10];

function is_even(nombre){
//Condition de base d'un nombre pair
    if(nombre%2 == 0){
        return true;
    }return false;
}


function even_count(tableau){
    let accumulateur = 0;
    for(let i = 0 ; i<=tableau.length; i++){
        if(is_even(tableau[i])){
            accumulateur++;
        }
    }return accumulateur;
}
console.log("Qté de nombre pair : "+even_count(tableau))