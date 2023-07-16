/* eslint-disable no-underscore-dangle */
import { Box } from '@mui/material';
import React, { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import {
  AddButton, AddForm, DashTable, SearchInpDash,
} from '../../../dashboardComponents';

const productInfo = ['title', 'description', 'image', 'price'];
const productDataTable = ['title', 'description', 'image', 'price', 'category'];
const initialState = {
  title: '',
  description: '',
  image: '',
  price: '',
};

const reducer = (state, action) => ({
  ...state,
  [action.filedName]: action.value,
});

const ProductDash = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [productsData, setProductsData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  const [categoryId, setCategoryId] = useState('');

  const values = [
    state.title,
    state.description,
    state.image,
    state.price,
  ];

  const [showForm, setShowForm] = useState(false);

  const handleChange = (e, filedName) => {
    const { value } = e.target;
    dispatch({
      filedName,
      value,
    });
  };

  const getProducts = async () => {
    try {
      const { data: { products } } = await axios.get('/api/products');
      const productArray = [];
      products.map((product) => productArray.push({
        ...product,
        category: product.categoryId?.categoryName,
      }));
      setProductsData(productArray);
    } catch (error) {
      console.log(error);
    }
  };

  const getCategories = async () => {
    try {
      const { data: { categories } } = await axios.get('/api/categories');
      setCategoriesData(categories);
    } catch (error) {
      console.log(error);
    }
  };

  const addProduct = async () => {
    try {
      await axios.post(`/api/products/${categoryId}`, state);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCategories();
    getProducts();
  }, []);
  return (
    <Box mt={10}>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
        }}
      >
        <SearchInpDash />
        <AddButton text="Add Products" setShowForm={setShowForm} showForm={showForm} />
      </Box>

      <Box mt={5}>
        <DashTable array={productsData} userInfo={productDataTable} />
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          height: '100%',
          width: '40%',
          backgroundColor: '#111010',
          p: '20px 20px',
          transform: `translateX(${showForm ? 0 : '100%'})`,
          transition: '0.5s ease-in-out',
        }}
      >
        <AddForm
          setShowForm={setShowForm}
          showForm={showForm}
          productInfo={productInfo}
          axiosData={addProduct}
          setState={handleChange}
          values={values}
          filedName={productInfo}
          head={productInfo}
          selectData={categoriesData}
          setSelectDataId={setCategoryId}
          selectDataId={categoryId}
        />
      </Box>
    </Box>
  );
};

export default ProductDash;
