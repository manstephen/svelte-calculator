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
	'.': { isBinary: false, operation: ()=>(null) },
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

let result = '';
let storedOperator = undefined;
let decimal = false;

let binaryMode = false;
let secondOperand = '';

export function calculate(input) {
	if(input in operators) {
		processOperator(input)
	}
	else {
		processOperand(input)
	}
	return binaryMode ? secondOperand : result
}

function processOperator(op) {
	if(operators[op].isBinary) {
		binaryMode = true
		binaryOperatorFlow(operators[op])
		return
	}

	if(op === "." && decimal !== true) {
		decimal = true;
		processOperand(".")
		return
	}

	binaryMode = false
	if(op === 'C') {
		clear()
		return
	}

	if(op === '=') {
		equals(result, storedOperator, secondOperand)
		return
	} 

	result = operators[op].operation(Number(result))
	return
}

function binaryOperatorFlow(op) {
	if(storedOperator === undefined) {
		storedOperator = operators[op]
		return
	}

	result = storedOperator.operation(Number(result), Number(secondOperand))
	secondOperand = ''
	storedOperator = op
}

function processOperand(value) {
	if(binaryMode) {
		secondOperand += value
		return
	}

	result += value
	return
}

function clear() {
	result = '';
	storedOperator = undefined;
	secondOperand = '';
}

function del() {
	if (result === '')
		return;

	result = result.slice(0, result.length - 1)
}

function equals(firstOperand, operator=undefined, secondOperand=undefined) {
	if(operator === undefined)
		return firstOperand;

	if(operator.isBinary) {
		return operator.operation(firstOperand, secondOperand)
	}

	return operator.operation(firstOperand)
}
