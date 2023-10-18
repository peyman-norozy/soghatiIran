export const responsiveSize = ({
  upSize,
  downSize,
  styleType,
}: {
  upSize: number;
  downSize: number;
  styleType: string;
}): string => {
  let step = (upSize - downSize) / 5;
  return `
  2xl:${styleType}-[${upSize}px] 
  xl:${styleType}-[${upSize - step}px]
  lg:${styleType}-[${upSize - 2 * step}px]
  md:${styleType}-[${upSize - 3 * step}]
  sm:${styleType}-[${upSize - 4 * step}px]
  ${styleType}-[${downSize}px]
  `;
};
