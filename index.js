class hero{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let ataque = ''
            
        // define o ataque pelo tipo de herói
        switch(this.tipo){
            case "mago":
                ataque = "usou magia"
                break
            case "guerreiro":
                ataque = "usou espada"
                break
            case "monge":
                ataque = "usou artes marciais"
                break
            case "ninja":
                ataque = "usou shuriken"
                break
            default:
                ataque = "Tipo desconhecido"
                break
            }
        
        // mensagem do ataque
        console.log(`o ${this.tipo} atacou usando ${ataque}`)
    }

}

let yoda = new hero("yoda", 100, "ninja")

yoda.atacar() // mago ataca usando magia