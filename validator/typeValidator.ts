const validateTypeIdentifier = (identifier: string) => {
  if (identifier) return [true, identifier];
  else {
    return [false, identifier];
  }
};

const validateTypeList = (data: object) => {
  if (data) return [true, data];
  else {
    return [false, data];
  }
};

const validateType = (data: object) => {
  if (data) return [true, data];
  else {
    return [false, data];
  }
};

export { validateType, validateTypeIdentifier, validateTypeList };
