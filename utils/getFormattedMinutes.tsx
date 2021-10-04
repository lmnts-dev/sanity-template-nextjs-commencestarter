/**
 *
 * getFormattedMinutes.tsx
 * @author Alisha Garric
 * @description Take reading content and return how many minutes it'll take to read
 * @example getFormattedMinutes(string)
 *
 */

 const readingTime = require('reading-time');


export const getFormattedMinutes = (content: string | any[]) => {
  let minutesValue = Math.ceil(readingTime(content).minutes);
  let minutes = minutesValue < 2 ? minutesValue + " Minute" : minutesValue + " Minutes";

  return minutes;
};

