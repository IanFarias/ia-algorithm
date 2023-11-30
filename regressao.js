const entradas = [
  1.4111, 8.7926, 6.9472, -2.45, 7.5528, 2.2843, 0.4856, 2.2599, 0.1619, 0.3462,
  4.0278, 3.8438, 3.8624, 2.1613, -2.1251, 2.2656, 4.3484, 1.7447, 2.9898,
  2.2876, -0.0628, 1.2998, -1.1665, 2.6561, -1.9873, -1.8089, -1.2172, -6.0871,
  3.9107, 1.3713,
];

const saidas = [
  -0.4301, -1.288, -4.0688, 2.0906, -2.6175, 0.4346, 1.2444, -0.9449, 0.9887,
  0.7466, 0.0048, 0.6351, 0.6455, -0.8986, 2.1539, -1.3576, -2.1857, 0.2968,
  1.5391, -0.8457, 1.5622, 0.2421, 2.9398, -1.3882, 2.0387, 2.5683, 2.9431,
  5.6767, -0.5783, -1.2772,
];

function regressao(entradas, saidas, x) {
  const mediaEntradas =
    entradas.reduce((acc, value) => {
      return acc + value;
    }, 0) / entradas.length;

  const mediaSaidas =
    saidas.reduce((acc, value) => {
      return acc + value;
    }, 0) / saidas.length;

  const quadradoDaMediaX = mediaEntradas ** 2;

  const mediaDosQuadradosEntradas =
    entradas.reduce((acc, value) => {
      return acc + value ** 2;
    }, 0) / entradas.length;

  const mediaProduto =
    entradas.reduce((acc, value, index) => {
      return acc + value * saidas[index];
    }, 0) / entradas.length;

  const a =
    (mediaProduto - mediaEntradas * mediaSaidas) /
    (mediaDosQuadradosEntradas - quadradoDaMediaX);

  const b = mediaSaidas - a * mediaEntradas;

  const result = a * x + b;

  console.log(result);
}

regressao(
  [
    1.47, 1.5, 1.52, 1.55, 1.57, 1.6, 1.63, 1.65, 1.68, 1.7, 1.73, 1.75, 1.78,
    1.8, 1.83,
  ],
  [
    52.21, 53.12, 54.48, 55.84, 57.2, 58.57, 59.93, 61.29, 63.11, 64.47, 66.28,
    68.1, 69.92, 72.19, 74.46,
  ],
  1.61
);
