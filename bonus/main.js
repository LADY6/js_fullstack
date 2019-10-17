// const caculateBonus = () => {
    
// }
//const caculateBonus = 1;
let caculateBonus = null;   
let categories = {
    'S':(salary) => {
        return salary * 60
    },
    'A':(salary) => {
        return salary * 24
    },
    'B':(salary) => {
        return salary * 18
    },
    'C':(salary) => {
        return salary * 15
    },
    'D':(salary) => {
        return salary * 12
    },

} 
caculateBonus = (salary, type = 'C') => {
    let bonus = categories[type] (salary)
    return bonus;
}
//console.log(caculateBonus);
// caculateBonus = (salary, type = 'C') => {
//     let bonus;
//     switch(type){
//         case 'A':
//             bonus = salary * 24
//             break;
//         case 'B':
//             bonus = salary * 18
//             break;
//         case 'C':
//             bonus = salary * 15
//             break;
//         case 'D':
//             bonus = salary * 12
//             break;
//     }
//     return bonus
// }
console.log(caculateBonus(15000, 'A'));