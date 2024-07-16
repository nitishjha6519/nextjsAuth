export const formatDate = (date) => {
  if (!date) {
    return "";
  }
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  return `${day}/${month}/${year}`;
};

export const formattedMongoDateTime = (str) => {
  return new Date(str).toLocaleString(undefined, {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
};

export const formattedDateAt = (str) => {
  return new Date(str).toLocaleString(undefined, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export function formatDateToDdMmYy(timestamp) {
  const date = new Date(timestamp);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear() % 100;

  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  const formattedDate = `${formattedDay}-${formattedMonth}-${year}`;

  return formattedDate;
}
