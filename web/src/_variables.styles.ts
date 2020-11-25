export const FONT_PATH =
  'https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap';

export const screenSize = {
  desktop: 'and (min-width: 920px)',
  tablet: 'and (min-width: 768px) and (max-width: 919px)',
  mobile: 'and (max-width: 767px)',
  tiny: 'and (max-width: 575px)',
};

export const color = {
  lightGreen: '#f9fff6',
  darkGreen: '#3b7220',
  darkerGreen: '#182f0d',
  gold: '#e9bf37',
  white: '#ffffff',
  red: '#bf0000',
};

const fontFamily = "'Noto Sans', Helvetica, sans-serif";

export const font = {
  bodyNormal: {
    fontFamily,
    fontSize: '1.5rem',
    fontWeight: 'normal',
    color: color.darkerGreen,
  },
  bodySmall: {
    fontFamily,
    fontSize: '1rem',
    fontWeight: 'normal',
    color: color.darkerGreen,
  },
  bodyXSmall: {
    fontFamily,
    fontSize: '0.75rem',
    fontWeight: 'normal',
    color: color.darkerGreen,
  },
  headingLarge: {
    fontFamily,
    fontSize: '2.75rem',
    fontWeight: 'normal',
    color: color.darkerGreen,
  },
  headingNormal: {
    fontFamily,
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: color.darkerGreen,
  },
  button: {
    fontFamily,
    fontSize: '1rem',
    fontWeight: 'bold',
    color: color.darkerGreen,
    textDecoration: 'none',
    textTransform: 'uppercase',
  },
  labelLarge: {
    fontFamily,
    fontSize: '1rem',
    fontWeight: 'bold',
    color: color.darkerGreen,
    textTransform: 'uppercase',
  },
  label: {
    fontFamily,
    fontSize: '0.75rem',
    fontWeight: 'bold',
    color: color.darkerGreen,
    textTransform: 'uppercase',
  },
  title: {
    fontFamily,
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: color.darkerGreen,
    textTransform: 'uppercase',
  },
  navItem: {
    fontFamily,
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: color.darkGreen,
    textTransform: 'uppercase',
  },
};

// TODO: These should go into actual css vars later
export const sizes = {
  cardPadding: '1.5rem',
  eventPreviewMinWidth: '16rem',
  eventPreviewMaxWidth: '20rem',
};

export const helper = {
  rightAligned: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  absoluteCover: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
  },
};
