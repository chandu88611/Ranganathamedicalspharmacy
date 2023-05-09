import React, { useState, useEffect } from 'react';

function Product() {
    const [product,setProduct]=useState({
        medicineName:"",
        Rate:"",
        Quantity:"",
        Ratepack:"",
        Gst:"",
        expRate:"",
        freeQuantity:"",
        batch:""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevState) => ({
          ...prevState,
          [name]: value
        }));
      };

    useEffect(() => {
        console.log(product);
    }, [product]);

    return (
        <div className='flex gap-3 flex-wrap justify-center pt-4'>
            <input type="text" className=' bg-green-500  border-none focus:outline-none caret-black p-1 text-xl placeholder:text-white' placeholder='Medicine Name' name="medicineName" value={product.medicineName} onChange={handleChange}/>
            <input type="text" className=' bg-green-500  border-none focus:outline-none caret-black p-1 text-xl placeholder:text-white' placeholder='Quantity' name="Quantity" value={product.Quantity} onChange={handleChange}/>
            <input type="text" className=' bg-green-500  border-none focus:outline-none caret-black p-1 text-xl placeholder:text-white' placeholder='Batch' name="batch" value={product.batch} onChange={handleChange}/>
            <input type="text" className=' bg-green-500  border-none focus:outline-none caret-black p-1 text-xl placeholder:text-white' placeholder='Rate' name="Rate" value={product.Rate} onChange={handleChange}/>
            <input type="text" className=' bg-green-500  border-none focus:outline-none caret-black p-1 text-xl placeholder:text-white' placeholder='GST' name="Gst" value={product.Gst} onChange={handleChange}/>
            <input type="date" className=' bg-green-500  border-none focus:outline-none caret-black p-1 text-xl placeholder:text-white' placeholder='EXP.Date' name="expRate" value={product.expRate} onChange={handleChange}/>
            <input type="text" className=' bg-green-500  border-none focus:outline-none caret-black p-1 text-xl placeholder:text-white' placeholder='MRP/pack' name="Ratepack" value={product.Ratepack} onChange={handleChange}/>
            <input type="text" className=' bg-green-500  border-none focus:outline-none caret-black p-1 text-xl placeholder:text-white' placeholder='Free Quantity' name="freeQuantity" value={product.freeQuantity} onChange={handleChange}/>
        </div>
    );
}

export default Product;
