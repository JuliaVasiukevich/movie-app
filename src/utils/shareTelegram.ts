export const shareTelegram = () => {
  const pageUrl = window.location.href;
  const message = "This is awesome film, take 5 mitutes to read about it";
  const telegramAPI = `https://t.me/share/url?url=${pageUrl}&text=${message}`;
  window.open(telegramAPI, "blank");
};