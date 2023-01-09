import './App.css';
import Page from './Components/Page';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Page />
    </ChakraProvider>
  );
}

export default App;
