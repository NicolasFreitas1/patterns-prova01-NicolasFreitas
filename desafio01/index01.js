// Classes concretas para componentes de UI
class LightButton {
  render() {
    return "Botão branco criado";
  }
}

class DarkButton {
  render() {
    return "Botão preto criado";
  }
}

class LightWindow {
  render() {
    return "Janela clara aberta";
  }
}

class DarkWindow {
  render() {
    return "Janela escura aberta";
  }
}

// Abstract Factory
class UIThemeFactory {
  createButton() {
    throw new Error("Método abstrato deve ser implementado");
  }
  
  createWindow() {
    throw new Error("Método abstrato deve ser implementado");
  }
}

// Concrete Factories
class LightThemeFactory extends UIThemeFactory {
  createButton() {
    return new LightButton();
  }
  
  createWindow() {
    return new LightWindow();
  }
}

class DarkThemeFactory extends UIThemeFactory {
  createButton() {
    return new DarkButton();
  }
  
  createWindow() {
    return new DarkWindow();
  }
}

// Cliente que usa a Abstract Factory
class UIApplication {
  constructor(themeFactory) {
    this.button = themeFactory.createButton();
    this.window = themeFactory.createWindow();
  }
  
  renderUI() {
    console.log(this.button.render());
    console.log(this.window.render());
  }
}

// Factory registry
const themeFactories = {
  light: new LightThemeFactory(),
  dark: new DarkThemeFactory()
};

// Função principal
function main(theme) {
  console.log(`\n>> Aplicando tema: ${theme} <<`);
  
  const factory = themeFactories[theme];
  if (!factory) {
    throw new Error("Tema não suportado");
  }
  
  const app = new UIApplication(factory);
  app.renderUI();
}

// Testando com diferentes temas
main("light");
main("dark");