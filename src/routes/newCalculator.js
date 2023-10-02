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

function equals(firstOperand, operator=undefined, secondOperand=undefined) {
	if(operator === undefined)
		return firstOperand;

	if(operator.isBinary) {
		return operator.operation(firstOperand, secondOperand)
	}

	return operator.operation(firstOperand)
}
