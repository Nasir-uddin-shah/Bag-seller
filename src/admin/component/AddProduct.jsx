import { useState } from 'react';


import './admin-addproduct.css'
export default function AddProduct(){
    const [product, setProduct] = useState({
        title:'',
        size: '',
        price: '',
        color:'',
        weight:'',
        images: []
    });

    const handleInputs = (e)=>{

        const {name,value} = e.target;
         setProduct((prev)=>({
            ...prev,
            [name]:[value]
         }));
        }

    const handleImages = (e)=>{
       setProduct((prev)=>({
        ...prev,
        images: Array.from(e.target.files),
       }));
    }

    const formHandle = ()=>{
        const formData = new FormData();

        formData.append('title', product.title);
        formData.append('size',product.size);
        formData.append('price', product.price);
        formData.append('color',product.color);
        formData.append('weight',product.weight);

        product.images.forEach((img)=>{
            formData.append("images", img)
        });
    }
    return(
        <main className="admin-add-product-main-container">
            <form className="admin-add-product-form">
                 <div className='admin-input-container'> 
                    <label htmlFor="admin-addproduct-input-title" >Title</label>
                    <input type="text"
                    className="admin-add-product-input"
                    name="title"
                    id="admin-addproduct-input-title"
                    onChange={handleInputs}
                    />
                 </div>
                <div className='admin-input-container'>
                    <label htmlFor="admin-addproduct-input-size">
                        Size
                    </label>
                   
                    <input 
                    className="admin-add-product-input"
                        type="text"
                        name='size'
                        id="admin-addproduct-input-size"
                        onChange={handleInputs}
                    />
                   
                 </div>

                 <div className='admin-input-container'>
                    <label htmlFor="admin-addproduct-input-price">
                        Price
                    </label>
                    
                    <input
                    type="text"
                    className="admin-add-product-input"
                    name="price"
                    id="admin-addproduct-input-price"
                    onChange={handleInputs}
                    />
                    
                  </div>
                  <div className='admin-input-container'>
                      <label htmlFor="admin-addproduct-input-color">Color</label>
                      <input
                        type="text"
                        className="admin-add-product-input"
                        name="color"
                        id="admin-addproduct-input-color"
                        onChange={handleInputs}
                        />
                    </div>

                     <div className='admin-input-container'>
                      <label htmlFor="admin-addproduct-input-weight">weight</label>
                      <input
                        type="number"
                        className="admin-add-product-input"
                        name="weight"
                        id="admin-addproduct-input-weight"
                        onChange={handleInputs}
                        />
                    </div>

                    <div className='admin-input-container'>

                        <label htmlFor="admin-addproduct-image-input">Add Images</label>
                        <input
                        type="file"
                        className="admin-add-product-image-input"
                        name="images"
                        id="admin-addproduct-image-input"
                        onChange={handleImages}
                        />
                  </div>
            </form>
            <button onClick={formHandle}>Add product</button>
        </main>
    )
}