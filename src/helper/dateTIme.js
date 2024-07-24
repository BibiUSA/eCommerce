export const dateTimeForemt = (date) => {
  let result;
  const olddate = new Date(date);

  const fd = new Intl.DateTimeFormat("en-us", {
    dateStyle: "medium",
  });

  result = fd.format(olddate);
  return result;
};

export const generateRandonId = () => {
  let r;
};
