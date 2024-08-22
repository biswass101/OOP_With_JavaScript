function creatUser(firstName, lastName, age) {
    const user = {
        firstName,
        lastName,
        age,
        getAgeYear () {
            return new Date().getFullYear() - user.age;
        },
    }

    return user;
}

const user1 = creatUser('Rakib', 'Hossain', 23);
const user2 = creatUser('Badrul', 'Bashar', 74);
console.log(user1);
console.log(user1.getAgeYear());
console.log(user2);
console.log(user2.getAgeYear());


//memory locatin is not same(this is the problem for factory functional method)
console.log(user1.getAgeYear === user2.getAgeYear); 

const arr1 = [1, 2, 3];
const arr2 = [5, 3, 2];
//array methods using constructior function and that is on same memory address
console.log(arr1.pop === arr2.pop); //true
console.log(this);
