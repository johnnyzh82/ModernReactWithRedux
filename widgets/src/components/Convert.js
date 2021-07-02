import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debounceText, setDebouncedText] = useState(text);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debounceText,
            target: language.value,
            key: API_KEY,
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };

    doTranslation();
  }, [language, debounceText]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (text) {
        setDebouncedText(text);
      }
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text]);

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
