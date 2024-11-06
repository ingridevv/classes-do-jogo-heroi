class Hero {
  static ataques = {
    mago: "Magia",
    guerreiro: "Espada",
    monge: "Artes marciais",
    ninja: "Shuriken",
    bruxo: "Expelliarmus",
  };

  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;

    // Para verificar se o tipo é um texto
    if (typeof tipo != "string") {
      throw new Error("O tipo deve ser um texto");
    }

    // Conversão de maíusculas para minúsculas
    this.tipo = tipo;
  }

  atacar() {
    let ataque = Hero.ataques[this.tipo.toLowerCase()];

    if (!ataque) {
      ataque = "Ataque falhou";
    }

    // mensagem do ataque
    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

let hero = new Hero("yoda", 100, "guerreiro");
hero.atacar(); // mago ataca usando magia
