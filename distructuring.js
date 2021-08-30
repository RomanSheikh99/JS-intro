
// Distructuring object 

const company = {
    id: 45,
    Name: 'd-furty',
    ceo: {
        id: 345,
        name: 'shafiq',
        address: 'baridara',
        salary: 140000
    },
    employi: {
        webDevoloper: {
            headOfDepertment: {
                id: 456,
                name: 'biplop',
                address: 'gaziput',
                salary: 80000
            },
            siniourDevoloper: {
                id: 246,
                name: 'mamun',
                address: 'tongi',
                salary: 60000
            }
        },
        designer: {
            name: 'nila choudowry',
            age: 24,
            address: 'kisorgonj'
        }
    }
}


// const {id, Name} = company;

// const  {name , address} = company.employi.webDevoloper.headOfDepertment;

// console.log(id,name,address)

// Array distructuring

const myArray = [45,23,65,76,8,3,2,3,2]

const [a,b,c,d] = myArray;

// console.log(a,b,d);


// chaining

let chain = company?.employi?.webDevoloper?.headOfDepertment?.address;
console.log(chain);