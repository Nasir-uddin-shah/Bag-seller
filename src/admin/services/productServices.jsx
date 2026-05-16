import api from "./api";

export async function getProduct(){
    const response = await api.get('/product');
    return response.data;
}

export async function addProduct(productData){
     const response = await api.post('/addProduct',productData);
     return response.data;
}

export async function getAllProducts(){
    const response = await api.get('/getAllProducts');
    return response.data;
}

export async function getCollegeBags(){
    const response = await api.get('/getAllCollegeBags');
    return response.data;
}