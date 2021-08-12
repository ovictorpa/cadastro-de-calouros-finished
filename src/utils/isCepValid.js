//Essa função limita a quantidade de números do cep pra no mínimo 8

function isCepValid(cep) {
  return String(cep).length === 8;
}

module.exports = isCepValid;
