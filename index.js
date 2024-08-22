// console.log(new Date().getFullYear());

//understanding Procedure programming-->
// const user = {
//     fName : 'Naeem',
//     lName : 'Biswass',
//     age : 25
// }
// function getAgeYear(age) {
//     return new Date().getFullYear() - age;
// }
// console.log(getAgeYear(user.age));

//Making this object oriented-->
const user = {
    fName : 'Naeem',
    lName : 'Biswass',
    age : 25,
    getAgeYear : function() {
        return new Date().getFullYear() - user.age;
    }
}

//changable if data is not hidden(encapsulated)
// user.age = 15;
// console.log(user.getAgeYear());
