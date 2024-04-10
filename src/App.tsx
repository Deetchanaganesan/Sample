import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Login from "./Login";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Login />
      </div>
    </ChakraProvider>
  );
}

export default App;
