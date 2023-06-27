import { Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage'
import ProductDetails from './Pages/ProductDetails'
import PageNotFound from "./Components/PageNotFound";
import Layout from "./Components/Layout";
function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={
        <>
        <Layout>
          
      <HomePage/>
      </Layout>
      </>
      }/>
      <Route path="/products/:id" element={<ProductDetails/>}/>
      <Route path="*" element={<PageNotFound/>}/>
     </Routes>
    </>
  );
}

export default App;
