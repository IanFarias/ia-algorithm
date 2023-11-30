const xZero = [null, 0.2, 0.1, 0.4, 0.11, 0.84, 0.1, 0.6, 0.2, 0.7, 0.1];
const xUm = [null, 0.3, 0.4, 0.3, 0.9, 0.6, 0.2, 0.2, 0.2, 0.8, 0.945];

const saidaEsperada = [
  null,
  0.13,
  0.17,
  0.25,
  0.822,
  1.065,
  0.05,
  0.4,
  0.08,
  1.13,
  0.01,
];
const saidas = [null];
const erros = [];
const wZero = [2.351];
const wUm = [-0.488];
const deltaWZero = [];
const deltaWUm = [];

function adaline(lr) {
  for (let k = 1; k < xZero.length; k++) {
    const saida = xZero[k] * wZero[k - 1] + xUm[k] * wUm[k - 1];
    saidas[k] = saida;
    const erro = saidaEsperada[k] - saida;

    deltaWZero[k] = erro * xZero[k] * lr;
    deltaWUm[k] = erro * xUm[k] * lr;

    wZero[k] = deltaWZero[k] + wZero[k - 1];
    wUm[k] = deltaWUm[k] + wUm[k - 1];
  }
}

adaline(1);

console.log(saidas);
