const translate = (intl, key, values) => {
  return intl.formatMessage({ id: key }, values);
};

export default translate;
