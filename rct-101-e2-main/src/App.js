import React from "react";
import Product from "./components/Product";
import AddProduct from "./components/AddProduct";

import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  return (
  <ChakraProvider>
    <div>{/* TODO: Code here */}
    <AddProduct/></div>
  </ChakraProvider>)
};

export default App;
