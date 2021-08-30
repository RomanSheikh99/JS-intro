// Template String

const myName = 'Roman';
const favActor = "Taposi Pano";
const age = 26;


function getFullName(fname,Lname=''){
    const fullName = fname + " " + Lname;
    return fullName;
}

let disc = `
    Hi!!!
    My Name is ${myName}
    My Favorite Cricket is ${getFullName('Shakib', 'Al Hasan')}
    ${getFullName("Shakib's")} Fav Actor is ${favActor}
    His Age is ${age}
    His Monthly Income is ${age * 30} Dolar. 
`

console.log(disc);