const form = document.querySelector("form") // selecionando formulário para monitorar evento
const amount = document.getElementById("amount") // recuperando o que o usuário digitou
const currency = document.getElementById("currency") // recuperando a moeda que o usuário digitou


//Sistema monitora toda a mudança do input com o addEventListener de input
//Tem uma expressão regular para buscar todos os caracteres digitados e substituir por nada. Assim ele aceitará apenas numeros
amount.addEventListener("input", () =>{
    const hasCharacterRegex = /\D+/g
    amount.value = amount.value.replace(hasCharacterRegex, "")
})

//Fica monitorando eventos de submit do formulário
form.onsubmit = (event) => {
    event.preventDefault()
    console.log(currency.value)
}