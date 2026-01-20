
function enviarInformacoes() {
    const inputNome = document.getElementById("inputNome")
    const inputGeneroBiologico = document.getElementById("inputSexoBiologico")
    let nome = inputNome.value.trim()
    let generoBiologico = inputGeneroBiologico.value.trim()
    if (nome !== "") {
        document.getElementById("saudacoes").textContent = "Olá, " + nome
        inputNome.value = ""
    }
    if (generoBiologico !== "") {
        document.getElementById("mensagemGenero").textContent = "Seu sexo biólogico é " + generoBiologico
        inputGeneroBiologico.value = ""
    }
}
