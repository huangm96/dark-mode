import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (key, initialValue) => {
  const [modeValue, setModeValue] = useLocalStorage(key, initialValue);

  useEffect(() => {
    if (modeValue) {
      window.document.body.classList.add("dark-mode");
    } else {
      window.document.body.classList.remove("dark-mode");
    }
  }, [modeValue]);

  return [modeValue, setModeValue];
};
