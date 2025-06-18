const sendMessage = (message) => {
  const number = "xxxxxxxxxx";
  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

export default sendMessage;
