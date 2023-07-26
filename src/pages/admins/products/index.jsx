/* eslint-disable no-underscore-dangle */
import { Box } from '@mui/material';
import React, { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import {
  AddButton, AddForm, DashTable, EditForm, SearchInpDash,
} from '../../../dashboardComponents';
import ToastAlert from '../../../components/toastAlert/ToastAlert';

const productInfo = ['title', 'description', 'image', 'price'];
const productDataTable = ['title', 'image', 'price', 'description', 'category'];
const EditProductInfo = ['title', 'image', 'price', 'description'];

const initialState = {
  title: '',
  image: '',
  price: '',
  description: '',
};

const reducer = (state, action) => ({
  ...state,
  [action.filedName]: action.value,
});

const ProductDash = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [productsData, setProductsData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  const [categoryId, setCategoryId] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setEditShowForm] = useState(false);
  const [oneProduct, setOneProduct] = useState({});
  const [updateProductData, setUpdateProductData] = useState({
    title: oneProduct.title,
    image: oneProduct.image,
    price: oneProduct.price,
    description: oneProduct.description,
  });
  const values = [
    state.title,
    state.image,
    state.price,
    state.description,
  ];

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
      toast.success('Add Product Successfully!', { theme: 'dark' });
    } catch (error) {
      toast.error('Really added!!', { theme: 'dark' });
    }
  };

  const deleteProduct = async (id) => {
    try {
      axios.delete(`/api/products/${id}`);
      getProducts();
      toast.success('Delete Successfully!', { theme: 'dark' });
    } catch (error) {
      toast.error('Delete Failed!', { theme: 'dark' });
    }
  };

  const getProductById = async (id) => {
    const { data: { product } } = await axios.get(`/api/products/${id}`);
    setOneProduct(product);
    setUpdateProductData({
      title: product.title,
      image: product.image,
      price: product.price,
      description: product.description,
    });
  };

  const updateProduct = async () => {
    try {
      axios.put(`/api/products/${oneProduct._id}`, updateProductData);
      setEditShowForm(false);
      getProducts();
      setUpdateProductData({
        title: '',
        image: '',
        price: '',
        description: '',
      });
      toast.success('Update successfully!!', { theme: 'dark' });
    } catch (error) {
      toast.error('Update Failed!', { theme: 'dark' });
    }
  };

  const filterFunc = ({ text }) => {
    if (text) {
      setFilteredProducts(() => productsData.filter((item) => item.title.includes(text)));
    } else {
      setFilteredProducts(productsData);
    }
  };

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const productsArray = filteredProducts.length > 0 ? filteredProducts : productsData;

  return (
    <Box mt={10}>
      <ToastAlert />
      <Box
        sx={{
          display: 'flex',
          gap: 2,
        }}
      >
        {productsData && productsData?.length > 0
          && <SearchInpDash data={productsData} handleClick={filterFunc} searchBy="title" />}

        <AddButton text="Add Product" setShowForm={setShowForm} showForm={showForm} />
      </Box>

      <Box mt={5}>
        <DashTable
          array={productsArray}
          userInfo={productDataTable}
          deleteFunction={deleteProduct}
          updateFunction={updateProduct}
          setEditShowForm={setEditShowForm}
          showEditForm={showEditForm}
          getData={getProductById}
        />
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
          title="Add Product"
          selectLabel="Category"
        />
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
          transform: `translateX(${showEditForm ? 0 : '100%'})`,
          transition: '0.5s ease-in-out',
        }}
      >
        <EditForm
          setShowForm={setEditShowForm}
          showForm={showEditForm}
          axiosData={updateProduct}
          setState={setUpdateProductData}
          values={oneProduct}
          state={updateProductData}
          filedName={EditProductInfo}
          head={EditProductInfo}
          title="Edit Product"
        />
      </Box>
    </Box>
  );
};

export default ProductDash;
