const font_color = {
  white: "#FFFFFF",
  gray1: "#F1F3F5",
  gray2: "#D9D9D9",
  gray3: "#868E96",
  gray4: "#495057",
  black: "#000000",
  primary_green: "#B7E4C7",
  primary_blue: "#0077E4",
  primary_red: "#E95353",
};

const font_style = {
  light_small: `
      font-weight: 300;
      font-size: 13px;
    `,
  light_medium: `
      font-weight: 300;
      font-size: 16px;
    `,
  light_large: `
      font-weight: 300;
      font-size: 20px;
    `,
  regular_small: `
      font-weight: 400;
      font-size: 13px;
    `,
  regular_medium: `
      font-weight: 400;
      font-size: 16px;
    `,
  regular_large: `
      font-weight: 400;
      font-size: 20px;
    `,
  bold_small: `
      font-weight: 700;
      font-size: 13px;
    `,
  bold_medium: `
      font-weight: 700;
      font-size: 16px;
    `,
  bold_large: `
      font-weight: 700;
      font-size: 20px;
    `,
};

const border_radius = `border-radius: 5px;`;

export type FontColorProps = typeof font_color;
export type FontStyleProps = typeof font_style;

export const theme = {
  font_color,
  font_style,
  border_radius,
};
