import http from './http-config';

const getAll = ()=> {
  return http.get("/product/all");
}

const get = (reference)=> {
  return http.get(`/product/${reference}`);
}

const create = (data)=> {
  return http.post(`/product/new`, data);
}

const update = (data) =>{
  return http.put(`/product/update`, data);
}

const remove = (reference)=> {
  return http.delete(`/product/${reference}`);
}

const findByPrice = (price) => {
  return http.get(`/product/price/${price}`);
}

const findByCategory = (category) => {
    return http.get(`/product/category/${category}`);
}

const findByName = (name) => {
    return http.get(`/product/nombre/${name}`);
}
const getAllCategories = ()=>{
  return http.get(`/product/categorias`);
}

const getByLessOrEqualPrice=(price)=>{
  return http.get(`/product/price/${price}`);
}

const getByWord=(word)=>{
  return http.get(`product/description/${word}`);
}
const exportedObject = {
  getAll,
  get,
  create,
  update,
  remove,
  findByPrice,
  findByCategory,
  findByName,
  getAllCategories,
  getByLessOrEqualPrice,
  getByWord
}
export default exportedObject;

  
