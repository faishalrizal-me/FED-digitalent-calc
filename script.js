// deklarasi awal
let prevNumber = ""
let calculationOperator = ""
let currentNumber = "0"

// event calculator-screen
const calculatorScreen = document.querySelector(".calculator-screen")
const updateScreen = (number) => {
	calculatorScreen.value = number
}

// event number
const numbers = document.querySelectorAll(".number")
numbers.forEach((number) => {
	number.addEventListener("click", (event) => {
		inputNumber(event.target.value)
		updateScreen(currentNumber)
	})
})

// event operator
const operators = document.querySelectorAll(".operator")
operators.forEach((operator) => {
	operator.addEventListener("click", (event) => {
		inputOperator(event.target.value)
	})
})

// event percent
const percent = document.querySelector(".percent")
percent.addEventListener("click", () => {
	inputPercent()
	updateScreen(currentNumber)
})

// event equalSign
const equalSign = document.querySelector(".equal-sign")
equalSign.addEventListener("click", () => {
	calculate()
	updateScreen(currentNumber)
})

// event allClear
const allClearBtn = document.querySelector(".all-clear")
allClearBtn.addEventListener("click", () => {
	clearAll()
	updateScreen(currentNumber)
})

// event clear
const clearBtn = document.querySelector(".clear")
clearBtn.addEventListener("click", () => {
	clear()
	updateScreen(currentNumber)
})  

// event decimal
const decimal = document.querySelector(".decimal")
decimal.addEventListener("click", (event) => {
	inputDecimal(event.target.value)
	updateScreen(currentNumber)
})

// fungsi inputNumber
const inputNumber = (number) => {
	if (currentNumber === "0") {
		currentNumber = number
	}
	else {
		currentNumber += number
	}
}

// fungsi inputOperator
const inputOperator = (operator) => {
	if (calculationOperator === "") {
		prevNumber = currentNumber
	}
	calculationOperator = operator
	currentNumber = "0"
}

// fungsi percent
const inputPercent = () => {
	result = currentNumber/100
	currentNumber = result.toString()
}

// fungsi allClear
const clearAll = () => {
	prevNumber = ""
	calculationOperator = ""
	currentNumber = "0"
}

// fungsi clear
const clear = () => {
	if (currentNumber.length > 1){
		currentNumber = currentNumber.slice(0, currentNumber.length - 1)
	}
	else{
		currentNumber = "0"
	}
}

// fungsi decimal
const inputDecimal = (dot) => {
	if(currentNumber.includes(".")) {
		return
	}
	currentNumber += dot
}

// fungsi calculate
const calculate = () => {
	let result = ""
	switch(calculationOperator) {
		case "+":
			// parse string ke float karena operator + dianggap menambah deret string
			result = parseFloat(prevNumber) + parseFloat(currentNumber)
			break
		case "-":
			result = prevNumber - currentNumber
			break
		case "*":
			result = prevNumber * currentNumber
			break
		case "/":
			result = prevNumber / currentNumber
			break
		default:
		return
	}
	currentNumber = result.toString()
	calculationOperator = ""
}