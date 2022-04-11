/**
 *
 * @author Alisha Garric
 */

export const prevAndactiveSliderClasses = (
  max: number,
  currentSlide: number,
  idx: number
) => {
  return (
    (currentSlide == idx ? "__active" : "") +
    ((currentSlide - 1 < 0 ? max - 1 : currentSlide - 1) == idx ? "__prev" : "")
  );
};
