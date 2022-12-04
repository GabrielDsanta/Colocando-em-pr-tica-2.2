
function Clear(){
    this.valorAtual = ""
    this.valorAnterior = ""
    return this.operation = undefined
}

function Update(){
    if(this.previusTextValue !== undefined || this.currentTextValue !== undefined){
        return undefined
    }
    this.previusTextValue = `${this.valorAnterior} ${this.operation || ""}`
    this.currentTextValue = this.valorAtual
}
  
function AddNumber(number){
        if(this.valorAtual.includes(".") && number === ".") return 

        this.valorAtual = `${this.valorAtual}${number.toString()}`
        return true
}

function Operator(operation){
        if(this.valorAnterior !== ''){
            this.Calculate()
        }
        this.operation = operation

        this.valorAnterior = this.valorAtual
        this.valorAtual = ""
        return true
}

function Calculate(){
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

function Delete(){
    this.valorAtual = ""
}


module.exports = {Clear, Update, AddNumber, Operator, Calculate, Delete}