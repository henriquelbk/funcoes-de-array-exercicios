const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

// 1

const deixarMaiuscula = (obj) => {
    const novoObj = {}
    
    for(let prop in obj){
        novoObj[prop] = objeto[prop].toUpperCase()
    }
    console.log(novoObj)
}

deixarMaiuscula(objeto)

// 2 

const retornaTexto = (obj) => {

    return `O nome é ${obj.nome}, a profissão é ${obj.profissao}, o username é ${obj.username} e a senha é ${obj.senha}.`

}

console.log(retornaTexto(objeto))

// 3

const usaCallback = (obj, callback) => {
    const valor = callback(obj)
    console.log(valor)
}

usaCallback(objeto, deixarMaiuscula)
usaCallback(objeto, retornaTexto)