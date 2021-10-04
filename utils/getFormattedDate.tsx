/**
 *
 * getFormattedDate.tsx
 * @author Alisha Garric
 * @description Take ISO date string and format it into Month Day-th, Year
 * @example getFormattedDate(string)
 *
 */

export const Months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getFormattedDate = (date: string) => {
  let year = date.substr(0, 4);
  let month = Months[parseInt(date.substr(5, 2).replace("0", ""))];
  let numDay = parseInt(date.substr(8, 2).replace("0", ""));
  let day =
    numDay % 10 == 1
      ? numDay + "st"
      : numDay % 10 == 2
      ? numDay + "nd"
      : numDay % 10 == 3
      ? numDay + "rd"
      : numDay + "th";
  day = numDay == 11 || numDay == 12 || numDay == 13 ? numDay + "th" : day;

  return month + " " + day + ", " + year;
};
