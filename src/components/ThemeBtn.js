import React from "react";
import { useThemeSwitcher } from "react-css-theme-switcher";


const ThemeBtn = () => {
  const { switcher, themes, currentTheme, status } = useThemeSwitcher();
    const [isModernMode, setIsModernMode] = React.useState(false);
  console.log(isModernMode);

  if (status === "loading") {
    return <div>Loading styles...</div>;
  }

  const toggleModernMode = () => {
    setIsModernMode((previous) => {
      switcher({ theme: previous ? themes.Retro : themes.Modern });
      return !previous;
    });
  };

  return (
    <div>
      <h2>Current theme: {currentTheme}</h2>
      <button onClick={toggleModernMode}>
        Set {currentTheme === "Retro" ? "Modern" : "Retro"}
      </button>
    </div>
  );
};

export default ThemeBtn;