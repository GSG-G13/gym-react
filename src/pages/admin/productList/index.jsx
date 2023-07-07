import { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import { columns } from '../../../dummyData/productData';
import DashBoardLayOut from '../LayOut';

const initialState = {
  title: '',
  image: '',
  rating: '',
  price: '',
  description: '',
};

const reducer = (state, action) => ({
  ...state,
  [action.filedName]: action.value,
});
const ProductListDashboard = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e, filedName) => {
    const { value } = e.target;
    dispatch({
      filedName,
      value,
    });
  };
  const [products, setProducts] = useState([]);

  const productInfo = ['title', 'image', 'rating', 'price', 'description'];
  const values = [state.title, state.image, state.rating, state.price, state.description];

  const addProduct = async () => {
    try {
      await axios.post('/api/products/648f74c381e43118b327c13a', state);
    } catch (error) {
      console.log(error);
    }
  };
  const getProducts = async () => {
    const response = await axios.get('/api/products');
    setProducts(response.data.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <DashBoardLayOut
      userInfo={productInfo}
      columns={columns}
      rows={products}
      buttonName="Add product"
      setStates={handleChange}
      axiosData={addProduct}
      filedName={productInfo}
      value={values}

    />
  );
};

export default ProductListDashboard;
