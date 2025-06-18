const sendMessage = (message) => {
  const number = "573001214162";
  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

export default sendMessage;
