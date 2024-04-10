const InputField = ({namePr, price, addProduct, setNamePr, setPrice}) => {

    return (
        <label>
            <input value={namePr} onChange={(e) => setNamePr(e.target.value)} />        
            <input value={price} onChange={(e) => setPrice(e.target.value)} />
            <button onClick={addProduct}>Add Product</button>
      </label>  
    );
}
export default InputField;