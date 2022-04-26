import { useState } from "react";
import { useRoutes } from "react-router-dom";
import { routeConfig } from "./routes";
import { ResetCSS } from "./assets/reset-css";
import { IconStyle } from "./assets/iconfont/iconfont";

function App() {
  const [count, setCount] = useState(0);
  const routes = useRoutes(routeConfig);

  return (
    <div className="App">
      <ResetCSS />
      <IconStyle />
      {routes}
    </div>
  );
}

export default App;
