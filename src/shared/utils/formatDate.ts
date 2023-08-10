export const formatDate = (timestamp: number) => {
  const milliseconds = timestamp * 1000;
  const dateObject = new Date(milliseconds);

  return  addLeadingZero(dateObject.getDate()) +
  "." +   addLeadingZero(dateObject.getMonth() + 1) +
  "." +   dateObject.getFullYear() +
  " " +   addLeadingZero(dateObject.getHours()) +
  ":" +   addLeadingZero(dateObject.getMinutes());

}

function addLeadingZero(number: number) {
  return number < 10 ? "0" + number : number;
}