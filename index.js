const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Hero {
  static ataques = {
    mago: "Magia",
    guerreiro: "Espada",
    monge: "Artes marciais",
    ninja: "Shuriken",
    bruxo: "Expelliarmus",
  };

  constructor(nome, nivel, tipo) {
    this.nome = nome;
    this.nivel = nivel;
    this.tipo = tipo.toLowerCase(); // Garantir que o tipo esteja em minúsculas

    // Para verificar se o tipo é um texto
    if (typeof tipo !== "string") {
      throw new Error("O tipo deve ser um texto");
    }

    // Verificar se o tipo existe no objeto de ataques
    if (!Hero.ataques[this.tipo]) {
      throw new Error(`Tipo de herói inválido: ${this.tipo}`);
    }
  }

  atacar() {
    const ataque = Hero.ataques[this.tipo];
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

rl.question("Digite o nome do herói: ", (nomeInput) => {
  rl.question("Digite o nível do herói: ", (nivelInput) => {
    rl.question(
      "Digite o tipo de herói (Mago, Guerreiro, Monge, Ninja, Bruxo): ",
      (tipoInput) => {
        const nome = nomeInput;
        const nivel = parseInt(nivelInput); // Convertenivel para número
        const tipo = tipoInput.trim().toLowerCase(); // Converte tipo para minúsculas

        try {
          const heroi = new Hero(nome, nivel, tipo);
          heroi.atacar();
        } catch (error) {
          console.error(error.message);
        }

        rl.close();
      }
    );
  });
});
