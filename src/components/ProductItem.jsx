import {useDispatch} from 'react-redux';
import { delProduct, editProduct} from "../store/productSlice";

const ProductItem = ({id, namePr, price}) => {

    const dispatch = useDispatch();

    return (
        <tr key={id}>
        <td>{namePr}</td>
        <td>{price}</td>
        <td>
          <div>
            <button onClick={() => dispatch(delProduct({id}))}>Delete Product</button>
            <button onClick={() => dispatch(editProduct({id}))}>Edit Product</button>
          </div>
        </td>
        </tr>  
    );
}
export default ProductItem;