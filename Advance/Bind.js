var functionThatAddsTwoIntegers = function (firstInteger, secondInteger) {
    return firstInteger + secondInteger;
};

var functionThatAddsFiveToAnInteger = functionThatAddsTwoIntegers.bind(null, 5);

console.log(functionThatAddsFiveToAnInteger(10));
// * Expected output (console): 15