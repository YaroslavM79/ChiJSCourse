type StringOrNumber = string | number;

function combine(input1: StringOrNumber, input2: StringOrNumber): StringOrNumber {
    if (typeof input1 === 'string' && typeof input2 === 'string') {
        return input1 + input2;
    } else if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    } else {
        throw new Error('Input values must be both strings or both numbers');
    }
}


export function testCombine()
{
    try {
        console.log(combine("Hello, ", "world!")); 
        console.log(combine(10, 20));       
        console.log(combine("Hello, ", 20));
    } catch (error) {
        console.error(error);
    }  
}


