import { createContext, useState } from "react";
import AppRoutes from "./routes/app-routes";

export const ThemeContext = createContext();

function App() {
  const [data, setData] = useState(localStorage.getItem("userToken"));

  return (
    <ThemeContext.Provider value={{ data, setData }}>
      <AppRoutes />
    </ThemeContext.Provider>
  );
}

export default App;
