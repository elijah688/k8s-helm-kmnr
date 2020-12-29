const { THEME: { THEME } = {} } = window;

export const setTheme = () => {
  const THEMEsList = ["gold", "ligth", "dark"];
  const isTHEMEAvailable = THEMEsList.includes(THEME);
  const currentStyle = isTHEMEAvailable ? THEME : "light";
  return currentStyle;
};
