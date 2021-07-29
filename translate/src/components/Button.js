import React from "react";

import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  renderSubmit({ language }) {
    return language === "english" ? "Submit" : "Voorleggen";
  }

  renderButton = (color) => {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>{this.renderSubmit}</LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return <ColorContext.Consumer>{this.renderButton}</ColorContext.Consumer>;
  }
}

export default Button;
