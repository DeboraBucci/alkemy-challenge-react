const recolacteUserAuth = ({ check, component, to }) => {
  return check ? component : to;
};

export { recolacteUserAuth };
