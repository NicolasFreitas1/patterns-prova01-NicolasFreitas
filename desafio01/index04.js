// Aplicando o padrão Singleton na classe Config
class Config {
  constructor() {
    // Verifica se já existe uma instância
    if (Config.instance) {
      return Config.instance;
    }
    
    // Inicializa as configurações apenas na primeira criação
    this.settings = {};
    
    // Armazena a referência da instância
    Config.instance = this;
  }

  setConfig(key, value) {
    this.settings[key] = value;
  }

  getConfig(key) {
    return this.settings[key];
  }

  // Método para obter todas as configurações
  getAllConfigs() {
    return { ...this.settings };
  }

  // Método para limpar configurações (útil para testes)
  clearConfigs() {
    this.settings = {};
  }
}

// Teste do padrão Singleton
console.log("=== Teste do Padrão Singleton ===");

// Criando duas instâncias
const c1 = new Config();
c1.setConfig("lang", "pt-BR");
c1.setConfig("theme", "dark");
c1.setConfig("timezone", "America/Sao_Paulo");

console.log("Configurações definidas em c1:");
console.log(c1.getAllConfigs());

const c2 = new Config();
console.log("\nTentando acessar configurações em c2:");
console.log("Idioma:", c2.getConfig("lang"));
console.log("Tema:", c2.getConfig("theme"));
console.log("Timezone:", c2.getConfig("timezone"));

// Verificando se são a mesma instância
console.log("\nVerificando se c1 e c2 são a mesma instância:");
console.log("c1 === c2:", c1 === c2);

// Adicionando nova configuração em c2
c2.setConfig("debug", true);
console.log("\nAdicionando configuração 'debug' em c2:");
console.log("Configurações em c1:", c1.getAllConfigs());
console.log("Configurações em c2:", c2.getAllConfigs());

// Teste adicional: criando uma terceira instância
const c3 = new Config();
console.log("\nCriando terceira instância c3:");
console.log("c3 === c1:", c3 === c1);
console.log("c3 === c2:", c3 === c2);
console.log("Configurações em c3:", c3.getAllConfigs());
