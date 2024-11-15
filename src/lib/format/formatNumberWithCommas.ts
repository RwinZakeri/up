const formatNumberWithCommas = (number: string | number): string => {
  // Ensure the input is a string and remove any non-digit characters
  const numericString = number.toString().replace(/\D/g, "");

  // Use regex to add commas every three digits
  return numericString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default formatNumberWithCommas;
