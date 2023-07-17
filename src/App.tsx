import { useState } from "react";
// import './App.css'
import styled from "@emotion/styled";

const MainContainer = styled.div`
  display: grid;
  place-content: center;
  align-content: center;
  background-color: red;
  width: 100vw;
  height: 100vh;
`;

function App() {
  const [count, setCount] = useState(0);

  return <MainContainer>HELLO</MainContainer>;
}

export default App;
