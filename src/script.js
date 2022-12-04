

const numberButtons = document.querySelectorAll('#buttonDefault')
const operatorButtons = document.querySelectorAll('#buttonOperator')
const equalsButton = document.querySelector('#buttonEquals')
const deleteButton = document.querySelector('#buttonDelete')
const previusTextValue = document.querySelector('#valorAnterior')
const currentTextValue = document.querySelector('#valorAtual')
const clearButton = document.querySelector('#botaoLimpar')

class Calculator{
    constructor(previusTextValue, currentTextValue){
        this.previusTextValue = previusTextValue
        this.currentTextValue = currentTextValue
        this.Clear()
    }

    Clear(){
        this.valorAtual = ""
        this.valorAnterior = ""
        return this.operation = undefined
    }

    Update(){
        this.previusTextValue.innerText = `${this.valorAnterior} ${this.operation || ""}`
        this.currentTextValue.innerText = this.valorAtual
    }
  
    AddNumber(number){
        if(this.valorAtual.includes(".") && number === ".") return 
        
        this.valorAtual = `${this.valorAtual}${number.toString()}`
    }

    Operator(operation){
    if(this.valorAnterior !== ''){
        this.Calculate()
    }
    this.operation = operation

    this.valorAnterior = this.valorAtual
    this.valorAtual = ""
    }

    Calculate(){
    let resultado 

    const valorAnteriorParse = parseFloat(this.valorAnterior)
    const valorAtualParse = parseFloat(this.valorAtual)

    if(isNaN(valorAnteriorParse) || isNaN(valorAtualParse)) return

    switch(this.operation){
        case "+":
        resultado = valorAnteriorParse + valorAtualParse
        break;

        case "-":
        resultado = valorAnteriorParse - valorAtualParse
        break;

        case "*":
        resultado = valorAnteriorParse * valorAtualParse
        break;

        case "÷":
        resultado = valorAnteriorParse / valorAtualParse
        break;

        default:
        return
        }
    this.valorAtual = resultado
    this.operation = undefined
    this.valorAnterior = ""
    }

    Delete(){
        this.valorAtual = ""
    }
}

const NewCalculator = new Calculator(previusTextValue, currentTextValue)

for(const numberButton of numberButtons){
        numberButton.addEventListener('click', () => {
        NewCalculator.AddNumber(numberButton.innerText)
        NewCalculator.Update()
    })
}

for(const operationChoose of operatorButtons){
        operationChoose.addEventListener('click', () => {
        NewCalculator.Operator(operationChoose.innerText)
        NewCalculator.Update()
    })
}

clearButton.addEventListener('click', () => {
    NewCalculator.Clear()
    NewCalculator.Update()
})

equalsButton.addEventListener('click', () => {
    NewCalculator.Calculate()
    NewCalculator.Update()
})

deleteButton.addEventListener('click', () => {
    NewCalculator.Delete()
    NewCalculator.Update()
})
