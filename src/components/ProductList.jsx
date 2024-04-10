import ProductItem from "./ProductItem";
import {useSelector} from 'react-redux';


const ProductList = () => {

    const products = useSelector(state => state.products.products);

    return (
        <table>
        <thead>
          <tr>
            <td>Product</td>
            <td>Price</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
        {
          products.map(product => <ProductItem 
            id={product.id} 
            {...product} />
              )
        }
        </tbody>
      </table>  
    );
}
export default ProductList;