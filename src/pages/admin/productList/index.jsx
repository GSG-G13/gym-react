import { useState, useEffect } from 'react';
import axios from 'axios';
import { columns } from '../../../dummyData/productData';
import DashBoardLayOut from '../LayOut';

const ProductListDashboard = () => {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(0);
  const [price, setPrice] = useState(0);
  const states = [title, description, image, rating, price];
  const productInfo = ['title', 'image', 'rating', 'price', 'description'];
  const setStates = [setTitle, setRating, setDescription, setPrice, setImage];

  const addProduct = async () => {
    await axios.post('/api/products/64896aea9b5231cfd1f0d57a', { states });
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
      setStates={setStates}
      axiosData={addProduct}
    />
  );
};

export default ProductListDashboard;
