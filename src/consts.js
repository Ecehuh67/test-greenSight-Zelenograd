const MIN_LENGTHS = {
  phone: 16,
  adress: 15,
  comments: 10,
};

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
  const isRightSigns = /^[A-ZА-ЯЁ\s-]+$/i;

  if (name.match(isRightSigns)) {
    return true;
  }

  return false;
};

export const formFields = ['name', 'phone', 'adress', 'comments'];

export const changeState = (field, bool, value, cb) => {
  if (bool) {
    cb((prev) => {
      return {
        ...prev,
        [field]: {
          isValid: true,
          value,
        },
      };
    });
  } else {
    cb((prev) => {
      return {
        ...prev,
        [field]: {
          isValid: false,
          value,
        },
      };
    });
  }
};

export const validatePhone = (phoneNumber) => {
  const value = phoneNumber.replace(/\s/g, '');

  if (value.length < MIN_LENGTHS.phone) {
    return false;
  }

  return true;
};

export const validateAdress = (adress) => {
  if (adress.length < MIN_LENGTHS.adress) {
    return false;
  }
  return true;
};

export const validateComment = (comment) => {
  if (comment.length < MIN_LENGTHS.comments) {
    return false;
  }
  return true;
};
