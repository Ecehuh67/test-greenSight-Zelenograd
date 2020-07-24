export const points = [
  {
    title: 'Peschanay st, 13',
    prefix: 'PickUp point on',
    coords: {
      x: 53.75,
      y: 38.57,
    },
  },
  {
    title: 'Lermontova st, 5',
    prefix: 'PickUp point',
    coords: {
      x: 52.75,
      y: 38.57,
    },
  },
];

export const mapMarkers = [
  'islands#nightCircleIcon',
  'islands#pinkCircleIcon',
  'islands#greenCircleIcon',
  'islands#violetCircleIcon',
  'islands#blueCircleIcon',
  'islands#darkBlueCircleIcon',
];

export const validateName = (name) => {
  const lowerCaseLetters = /[a-z]/g;
  const upperCaseLetters = /[A-Z]/g;
  const numbers = /[0-9]/g;
  const symbols = /[^a-zA-Z0-9]/g;

  const isLowerLetters = name.match(lowerCaseLetters);
  const isUpperLetters = name.match(upperCaseLetters);
  const isNumbers = name.match(numbers);
  const isSymbols = name.match(symbols);

  if (isNumbers || isSymbols) {
    return false;
  }

  return true;
};
