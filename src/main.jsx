import "./index.css";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { UserProvider } from "./context/userContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <App />
  </UserProvider>
);
