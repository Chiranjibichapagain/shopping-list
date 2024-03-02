import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { appStyles } from "./styles";
import { Container } from "./components/Container";

function App() {
  return <Container styles={appStyles.appRootStyles}>app</Container>;
}

export default App;
