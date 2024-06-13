import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/store"; // Adjust the path according to your project structure
import Setting from "./src/screens/Setting/Setting";

export default function App() {
  return (
    <Provider store={store}>
      <Setting />
    </Provider>
  );
}
