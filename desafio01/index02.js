// Implementação do Pattern Builder para Lanche
class Lanche {
  constructor() {
    this.pao = null;
    this.carne = null;
    this.queijo = null;
    this.salada = null;
    this.molho = null;
  }

  show() {
    console.log(`
    Lanche configurado:
    Pão: ${this.pao !== null ? this.pao : "Não selecionado"}
    Carne: ${this.carne !== null ? this.carne : "Não selecionado"}
    Queijo: ${this.queijo !== null ? this.queijo : "Não selecionado"}
    Salada: ${this.salada !== null ? this.salada : "Não selecionado"}
    Molho: ${this.molho !== null ? this.molho : "Não selecionado"}
    `);
  }
}

class LancheBuilder {
  constructor() {
    this.lanche = new Lanche();
  }

  setPao(pao) {
    this.lanche.pao = pao;
    return this;
  }

  setCarne(carne) {
    this.lanche.carne = carne;
    return this;
  }

  setQueijo(queijo) {
    this.lanche.queijo = queijo;
    return this;
  }

  setSalada(salada) {
    this.lanche.salada = salada;
    return this;
  }

  setMolho(molho) {
    this.lanche.molho = molho;
    return this;
  }

  build() {
    return this.lanche;
  }
}

// Director → monta configurações pré-definidas
class LancheDirector {
  static buildLancheSimples() {
    return new LancheBuilder()
      .setPao("Pão francês")
      .setCarne("Hambúrguer")
      .build();
  }

  static buildLancheCompleto() {
    return new LancheBuilder()
      .setPao("Pão australiano")
      .setCarne("Hambúrguer artesanal")
      .setQueijo("Cheddar")
      .setSalada("Alface e tomate")
      .setMolho("Barbecue")
      .build();
  }

  static buildLancheVegetariano() {
    return new LancheBuilder()
      .setPao("Pão integral")
      .setQueijo("Queijo vegano")
      .setSalada("Alface, tomate e cebola")
      .setMolho("Maionese vegana")
      .build();
  }

  static buildLancheGourmet() {
    return new LancheBuilder()
      .setPao("Brioche")
      .setCarne("Wagyu")
      .setQueijo("Gruyère")
      .setSalada("Rúcula e tomate cereja")
      .setMolho("Aioli de alho")
      .build();
  }
}

// Uso do Builder Pattern
console.log("=== Exemplos do Builder Pattern ===");

// Usando o Director para configurações pré-definidas
const lancheSimples = LancheDirector.buildLancheSimples();
const lancheCompleto = LancheDirector.buildLancheCompleto();
const lancheVegetariano = LancheDirector.buildLancheVegetariano();
const lancheGourmet = LancheDirector.buildLancheGourmet();

console.log("Lanche Simples:");
lancheSimples.show();

console.log("Lanche Completo:");
lancheCompleto.show();

console.log("Lanche Vegetariano:");
lancheVegetariano.show();

console.log("Lanche Gourmet:");
lancheGourmet.show();

// Exemplo de uso direto do Builder para configuração customizada
const lancheCustomizado = new LancheBuilder()
  .setPao("Pão de hambúrguer")
  .setCarne("Frango grelhado")
  .setQueijo("Mussarela")
  .setSalada("Alface")
  .setMolho("Ketchup")
  .build();

console.log("Lanche Customizado:");
lancheCustomizado.show();