import './App.css';
import { useState } from 'react';
import {useDispatch} from 'react-redux';

import {addProduct} from './store/productSlice';
import ProductList from './components/ProductList';
import InputField from './components/InputField';

function App() {
  
  const [namePr, setNamePr] = useState('');
  const [price, setPrice] = useState('');

  const dispatch = useDispatch();


  const addNewProduct = () => {
    const products = dispatch(addProduct({namePr, price}));
    setNamePr('');
    setPrice('');
  }

  
  const delProduct = (idProduct) =>{
   // setProducts(products.filter(product => product.id !== idProduct));
  }

  const editProduct = (idProduct) => {

  }


  return (
    <div>
      <InputField namePr={namePr} price={price} addProduct={addNewProduct} setNamePr={setNamePr} setPrice={setPrice}/>
     <ProductList  editProduct={editProduct} delProduct={delProduct}/>
	</div>
  );
}

export default App;
