const getLocalTime = (date) =>
  new Date(date).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

const getTimeZone = (date) => new Date(date).toTimeString().slice(9, 17);

export { getLocalTime, getTimeZone };
