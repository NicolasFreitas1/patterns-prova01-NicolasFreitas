// Classes concretas
class Bicicleta {
  move() {
    return "Pedalando a bicicleta no pátio da UNISATC";
  }
}

class Patinete {
  move() {
    return "Andando de patinete pelo estacionamento da UNISATC";
  }
}

class Onibus {
  move() {
    return "Andando de ônibus e chegando na UNISATC";
  }
}

// Factory Method
class TransporteFactory {
  static types = {
    bicicleta: Bicicleta,
    patinete: Patinete,
    onibus: Onibus,
  };

  static createTransporte(type) {
    const TransporteClass = this.types[type];
    if (!TransporteClass) {
      throw new Error("Tipo de transporte ainda não suportado");
    }
    return new TransporteClass();
  }
}

// Código do cliente
function main() {
  const tipos = ["bicicleta", "patinete", "onibus"];
  
  try {
    tipos.forEach((tipo) => {
      const transporte = TransporteFactory.createTransporte(tipo);
      console.log(transporte.move());
    });
  } catch (err) {
    console.error("Erro ao criar transporte:", err.message);
  }
}

main();
