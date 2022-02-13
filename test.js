console.log("Hello World");

let testObject = {}
console.log(testObject)
testObject = {
    firstName: "Nil",
    lastName: "Muk",
    address: {
        "street": "Mystic",
        "city": "Ofallon",
        "postal-code": "63368"
    }
}
console.log(testObject);
let testObject1 = new Object();
console.log(testObject1);
let testObject2 = new Date();
console.log(testObject2);
let testObject3 = new Array();
console.log(testObject3);
let testObject4 = new Map();
console.log(testObject4);
let testObject5 = Object.create({x: 1, y: 2});
console.log(testObject5, testObject5.x, testObject5.y);
testObject5 = {
    name: "Sagina"
}
console.log(testObject5, testObject5.x);