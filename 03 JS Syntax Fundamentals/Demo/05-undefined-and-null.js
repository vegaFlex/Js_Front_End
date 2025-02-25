let car;

console.log( typeof car ); // undefind

let sportsCar = undefined;

console.log( sportsCar );

let person = {
    firstName: 'Koko',
    lastName: 'Dankov',
    age: 38
};

console.log( typeof person ); // object
console.log( Boolean(person) ); // true

person = null;

console.log( typeof person ); // object
console.log( Boolean(person) ); // false

/*
 * Null is an assigned value. It means nothing
 * - Undefined typically means a variable has been declared but not defined yet
 * - Null and Undefined are falsy values
 * - Undefined and Null are equal in value but different in type:
 * - - - - - - */

null !== undefined // true
null == undefined // true