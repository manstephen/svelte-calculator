import { writable } from "svelte/store";

export const operators = {
	'+': { isBinary: true, operation: (a,b)=>(a+b) },
	'-': { isBinary: true, operation: (a,b)=>(a-b) },
	'X': { isBinary: true, operation: (a,b)=>(a*b) },
	'/': { isBinary: true, operation: (a,b)=>(a/b) },
	'=': { isBinary: false, operation: (a) => (a)	},
	'%': { isBinary: false, operation: ()=>(null) },
	'1/x': { isBinary: false, operation: (a)=>(1/a) },
	'x2': { isBinary: false, operation: (a)=>(a*a) },
	'sqr': { isBinary: false, operation: ()=>(null) },
	'.': { isBinary: false, operation: ()=>(decimal = true) },
	'sign': { isBinary: false, operation: (a)=>(a*-1) },
	'Del': { isBinary: false, operation: ()=>(null) },
	'CE': { isBinary: false, operation: ()=>(null) },
	'C': { isBinary: false, operation: ()=> {
		null
	}},
	'MS': { isBinary: false, operation: ()=>(null) },
	'M-': { isBinary: false, operation: ()=>(null) },
	'M+': { isBinary: false, operation: ()=>(null) },
};

let operandBuffer = [];
let operatorBuffer = [];
let currentOperand = 0;
let result = 0;

let decimal = false;

export const calculate = function (userInput) {
	console.log(`User input: ${userInput}`)
	
	if(userInput in operators) {
		result = Number(handleOperator(userInput))
	} else {
		result = Number(handleOperand(userInput))
	}
	console.log(`Current Operands: ${operandBuffer}`)
	console.log(`Operator stored? ${operatorBuffer[0] ? "Yes" : "No"}`)
	console.log()

	return result 
}

export const handleOperand = (digit) => {
	if(decimal) {
		currentOperand = digit + currentOperand
	}
	
	currentOperand = currentOperand === 0 ? '' : currentOperand
	currentOperand += digit;
	return currentOperand
}

export const handleOperator = (op) => {
	let operand = Number(currentOperand);
	currentOperand = 0;
	decimal = false;

	const operator = operators[op];
	if(operator.isBinary && operatorBuffer.length === 0) {
		operatorBuffer.push(operator)
		operandBuffer.push(operand)
		return currentOperand;
	}	

	const previousOp = operatorBuffer.pop();	
	if( previousOp !== undefined ) {
		const firstOperand = operandBuffer.pop();
		operand = previousOp.operation(firstOperand, operand);

		if( operator.isBinary ) {
			operatorBuffer.push(operator);
			operandBuffer.push(operand);
			return currentOperand;
		}
	}

	const res = operator.operation(operand)


	return res 
}

// function main() {
// 	let testInput = ["1","2","3", "+", "3","2","1", '-', 'x2']
// 	for(let input of testInput) {
// 		handleInput(input)
// 		console.log(`Buffer state: ${buffer}`)
// 		console.log(`Display state: ${currentNumber}`)
// 		console.log(`Result: ${result}`)
// 		console.log()
// 	}
// }
//
// main()
