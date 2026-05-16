import { useState } from "react";
import { useForm } from "react-hook-form";
import { addProduct } from "../services/productServices";
import './admin-add-product.css';
export default function AddProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm();

  const [uploadedImages, setUploadedImages] = useState([]);
  const [category, setCategory] = useState('');

  const images = watch("images");

  const onSubmit = async (data) => {
          setCategory(data.category);
    try {
      const formData = new FormData();

      formData.append("title", data.title);
      formData.append("brand", data.brand);
      formData.append("category", data.category);
      formData.append("price", data.price);
      formData.append("stock", data.stock);
      formData.append("color", data.color);
      formData.append("size", data.size);
      formData.append("weight", data.weight);
      formData.append("description", data.description);

      Array.from(data.images).forEach((img) => {
        formData.append(`${category}BagImages`, img);
      });

      

      Array.from(formData).map((obje)=>{
            console.log("what is inside formData: ", obje);
           })
     

      const result = await addProduct(formData);


      console.log(result);
      reset();
      setUploadedImages([]);
    } catch (error) {
      console.log("error adding product: ",error);
    }
  };

  
  const handlePreview = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map((file) => URL.createObjectURL(file));
    setUploadedImages(previews);
  };

  return (
    <main className="w-[50%] p-5 border add-product-form-main-con ">
      <form onSubmit={handleSubmit(onSubmit)}  className="flex flex-col">

        <div className="border w-[50%]">
          <input
          className='w-[100%]'
            placeholder="Title"
            {...register("title", { required: "Title is required" })}
          />
          <p>{errors.title?.message}</p>
         </div>

         
        <div>
            <input
              placeholder="Brand"
              {...register("brand", { required: "Brand is required" })}
            />
            <p>{errors.brand?.message}</p>
         </div>

          <div>
       
            <input
              placeholder="Category"
              {...register("category", { required: "Category is required" })}
            />
            <p>{errors.category?.message}</p>

          </div>

          <div>
            <input
              type="number"
              placeholder="Price"
              {...register("price", {
                required: "Price required",
                min: { value: 1, message: "Price must be > 0" }
              })}
            />
            <p>{errors.price?.message}</p>
          </div>

          <div>
        
              <input
                
                placeholder="Stock"
                {...register("stock",{ required: 'stock is required'})}
                
              />

              
           </div>

           <div>
              <input
                   type="text"
                   placeholder="Color" 
                   {...register("color")}                   
                   />
           </div>
        
        
           <div>
                <input
                  type="number"
                  placeholder="Size"
                  {...register("size")} />
           </div>
        
       
          <div>
              <input
              type="number"
              placeholder="Weight"
              {...register("weight")}
             />
          </div>
        
        
         <div>
        
           <textarea {...register("description")} />
         </div>
       
        <input
          type="file"
          multiple
          {...register("images", {
            required: "Images required"
          })}
          onChange={handlePreview}
        />
        <p>{errors.images?.message}</p>

        
        <div style={{ display: "flex", gap: "10px" }}>
          {uploadedImages.map((img, i) => (
            <img
              key={i}
              src={img}
              width="80"
              height="80"
              alt="preview"
            />
          ))}
        </div>

        <button type="submit">Add Product</button>
      </form>
    </main>
  );
}































// import { useState } from 'react';
// import axios from 'axios';


// import './admin-add-product.css'
// export default function AddProduct(){
//     const [product, setProduct] = useState({
//         title:'',
//         brand: '',
//         category: '',
//         price:'',
//         stock:'',
//         color:'',
//         size:'',
//         weight: '',
//         description:'',
//         images: []
//     });

//     const [uploadedImages, setUploadedImages] = useState([]);
//     const [category, setCategory] = useState('');

//     const handleInputs = (e)=>{
         
//         const {name,value} = e.target;
//          setProduct((prev)=>({
//             ...prev,
//             [name]:[value]
//          }));

         
//         }

//     const handleImages = (e)=>{
//          const files = Array.from(e.target.files);       
      
//        setProduct((prev)=>({
//                 ...prev,
//                 images: Array.from(e.target.files),
//             }));

//         const previews = files.map(file =>
//                 URL.createObjectURL(file)
//             );

//           setUploadedImages(previews);
//           setCategory(product.category)
//     }

//     const formHandle = async ()=>{
//         const formData = new FormData();

//             formData.append('title', product.title);
//             formData.append('brand',product.brand);
//             formData.append('category', product.category);
//             formData.append('price',product.price);
//             formData.append('stock',product.stock);
//             formData.append('color',product.color);
//             formData.append('size',product.size);
//             formData.append('weight',product.weight);
//             formData.append('description',product.description);

//         product.images.forEach((img)=>{
            
//             formData.append(`${category}BagImages`, img);
//         });    

        
//            Array.from(formData).map((obje)=>{
//             console.log("what is inside formData: ", obje);
//            })
    
//         const result = await axios.post('http://localhost:3000/v1/addProduct',formData);

//         console.log("what do we get in result :", result.data);
//     }
//     return(
//         <main className="admin-add-product-main-container">
//             <form className="admin-add-product-form">
//                  <div className='admin-input-container'> 
//                     <label htmlFor="admin-addproduct-input-title" >Title</label>
//                     <input type="text"
//                     className="admin-add-product-input"
//                     name="title"
//                     id="admin-addproduct-input-title"
//                     onChange={handleInputs}
//                     />
//                  </div>
//                 <div className='admin-input-container'>
//                     <label htmlFor="admin-addproduct-input-brand">
//                         Brand
//                     </label>
                   
//                     <input 
//                     className="admin-add-product-input"
//                         type="text"
//                         name='brand'
//                         id="admin-addproduct-input-brand"
//                         onChange={handleInputs}
//                     />
                   
//                  </div>
                   
//                    <div className='admin-input-container'>
//                     <label htmlFor="admin-addproduct-input-category">
//                          Category
//                     </label>
                   
//                     <input 
//                     className="admin-add-product-input"
//                         type="text"
//                         name='category'
//                         id="admin-addproduct-input-category"
//                         onChange={handleInputs}
//                     />
                   
//                  </div>




//                  <div className='admin-input-container'>
//                     <label htmlFor="admin-addproduct-input-price">
//                         Price
//                     </label>
                    
//                     <input
//                     type="text"
//                     className="admin-add-product-input"
//                     name="price"
//                     id="admin-addproduct-input-price"
//                     onChange={handleInputs}
//                     />
                    
//                   </div>
//                   <div className='admin-input-container'>
//                       <label htmlFor="admin-addproduct-input-color">Color</label>
//                       <input
//                         type="text"
//                         className="admin-add-product-input"
//                         name="color"
//                         id="admin-addproduct-input-color"
//                         onChange={handleInputs}
//                         />
//                     </div>

//                      <div className='admin-input-container'>
//                       <label htmlFor="admin-addproduct-input-size">Size</label>
//                       <input
//                         type="text"
//                         className="admin-add-product-input"
//                         name="size"
//                         id="admin-addproduct-input-size"
//                         onChange={handleInputs}
//                         />
//                     </div>

//                      <div className='admin-input-container'>
//                       <label htmlFor="admin-addproduct-input-weight">weight</label>
//                       <input
//                         type="number"
//                         className="admin-add-product-input"
//                         name="weight"
//                         id="admin-addproduct-input-weight"
//                         onChange={handleInputs}
//                         />
//                     </div>

//                      <div className='admin-input-container'>
//                       <label htmlFor="admin-addproduct-input-stock">Stock</label>
//                       <input
//                         type="number"
//                         className="admin-add-product-input"
//                         name="stock"
//                         id="admin-addproduct-input-stock"
//                         onChange={handleInputs}
//                         />
//                     </div>

//                     <div className=''>
//                         <div className='file-labels-container'>
//                             <label className='' htmlFor="admin-addproduct-image-input">Add images</label>
//                             <label className='' htmlFor="admin-addproduct-image-input">
//                                 +
//                             </label>
//                             <div className='border flex gap-4'>
//                                 {
//                                    uploadedImages.length === 0? "": uploadedImages.map((img)=>{
//                                     console.log("what are inside images: ", img)
//                                         return(
//                                             <div className='w-[8%]'>
//                                                 <img className='w-[100%] h-[100%]' src={img} />
//                                             </div>
//                                         )
//                                     })
//                                 }
//                             </div>
//                         </div>
//                         <input
//                         type="file"
//                         className="border"
//                         name="images"
//                         id="admin-addproduct-image-input"
//                         onChange={handleImages}
//                         multiple
//                         hidden
//                         />
//                   </div>

//                    <div className='border flex flex-col'>
//                       <label htmlFor="admin-addproduct-textarea">description</label>
//                       <textarea
//                          className=''
//                          name='description'
//                          rows="20"
//                          cols="50"
//                          id="admin-addproduct-textarea"
//                         onChange={handleInputs}
//                        />
                           
                      
                      
//                     </div>
//             </form>
//             <button onClick={formHandle}>Add product</button>
//         </main>
//     )
// }