//Validar se o curso está entre os listados

const degrees = require('../mocks/degrees');

function isDegreeExistent(degreeName) {
  return degrees.some((degree) => degree === degreeName);
}

module.exports = isDegreeExistent;
