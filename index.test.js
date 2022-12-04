
const script = require('./index.js')

test('Limpar todos os calculos', () => {
    expect(script.Clear()).toBe(undefined)
}) 

test('Atualizar em tela os valores com números', () => {
    expect(script.Update()).toBe()
})

test('Adiciona um número a Calculadora', () => {
    expect(script.AddNumber(5)).toBe(true)
})

test('Determina a operação a ser feita', () => {
    expect(script.Operator("+")).toBe(true)
})

test('Reconhece a operação e realiza o calculo', () => {
    expect(script.Calculate()).toBe()
})

test('Deleta o número atual', () => {
    expect(script.Delete()).toBe()
})


