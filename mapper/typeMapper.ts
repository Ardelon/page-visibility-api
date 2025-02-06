const mapTypeList = (response: any) => {
  const data = JSON.stringify(response.data);
  return data;
};

const mapType = (response: any) => {
  const data = JSON.stringify(response.data);
  return data;
};

export { mapType, mapTypeList };
