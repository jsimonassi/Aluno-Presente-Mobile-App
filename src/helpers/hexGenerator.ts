const randomDarkColor = () => {
  const randomComponent = () => {
    const component = Math.floor(Math.random() * 256).toString(16);
    return component.length === 1 ? '0' + component : component;
  };

  const randomColor = () => {
    return '#' + randomComponent() + randomComponent() + randomComponent();
  };

  const darkenColor = (color: string, percentage: number) => {
    const factor = 1 - percentage / 100;
    return color.replace(/[0-9a-f]{2}/g, match => {
      const value = Math.floor(parseInt(match, 16) * factor);
      return value < 255 ? (value < 16 ? '0' : '') + value.toString(16) : 'ff';
    });
  };

  // Generate a random color and darken it
  const randomColorHex = randomColor();
  const darkColorHex = darkenColor(randomColorHex, 30); // 30% darker (adjust as needed)

  return darkColorHex;
};

export const HexGenerator = {
  randomDarkColor,
};
