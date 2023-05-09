//  import React, { useEffect, useState } from 'react'

// function Sales() {
//     const [sale,setProduct]=useState({
//         medicineName:"",
//         Rate:"",
//         Quantity:"",
//         Gst:"",
//         expRate:"",
//         batch:"",
//         customerName:'',
//         customerNumber:"",
//         saleDate:""
//     })

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setProduct((prevState) => ({
//           ...prevState,
//           [name]: value
//         }));
//       };

//     useEffect(() => {
//         console.log(sale);
//     }, [sale]);

//   return (
//     <div>

//           <div className='flex gap-3 flex-wrap justify-center pt-4'>
//             <input type="text" className=' bg-green-500 text-white border-none focus:outline-none caret-black p-1 text-xl placeholder:text-white' placeholder='Customer Name' name="customerName" value={sale.customerName} onChange={handleChange}/>
//             <input type="text" className=' bg-green-500 text-white border-none focus:outline-none caret-black p-1 text-xl placeholder:text-white' placeholder='Customer Number' name="customerNumber" value={sale.customerNumber} onChange={handleChange}/>
//             <input type="text" className=' bg-green-500 text-white border-none focus:outline-none caret-black p-1 text-xl placeholder:text-white' placeholder='Sale Date' name="saleDate" value={sale.saleDate} onChange={handleChange}/>
//                  </div>

//         <div className='flex gap-3 flex-wrap justify-center pt-4'>
//             <input type="text" className=' bg-green-500 text-white border-none focus:outline-none caret-black p-1 text-xl placeholder:text-white' placeholder='Medicine Name' name="medicineName" value={sale.medicineName} onChange={handleChange}/>
//             <input type="text" className=' bg-green-500 text-white border-none focus:outline-none caret-black p-1 text-xl placeholder:text-white' placeholder='Quantity' name="Quantity" value={sale.Quantity} onChange={handleChange}/>
//             <input type="text" className=' bg-green-500 text-white border-none focus:outline-none caret-black p-1 text-xl placeholder:text-white' placeholder='Batch' name="batch" value={sale.batch} onChange={handleChange}/>
//             <input type="text" className=' bg-green-500 text-white border-none focus:outline-none caret-black p-1 text-xl placeholder:text-white' placeholder='Rate' name="Rate" value={sale.Rate} onChange={handleChange}/>
//             <input type="text" className=' bg-green-500 text-white border-none focus:outline-none caret-black p-1 text-xl placeholder:text-white' placeholder='GST' name="Gst" value={sale.Gst} onChange={handleChange}/>
//             <input type="date" className=' bg-green-500 text-white border-none focus:outline-none caret-black p-1 text-xl placeholder:text-white' placeholder='EXP.Date' name="expRate" value={sale.expRate} onChange={handleChange}/>
//         </div>


//         </div>
//   )
// }

// export default Sales   7996120891


import { useEffect, useState } from 'react'

function Sales() {
  const [sale, setProduct] = useState({
    medicineName: "",
    Rate: "",
    Quantity: "",
    Gst: "",
    expRate: "",
    batch: "",
    customerName: '',
    customerNumber: "",
    saleDate: ""
  });
  const [medicines, setMedicines] = useState([{
    medicineName: "",
    Rate: "",
    Quantity: "",
    Gst: "",
    expRate: "",
    batch: "",
    customerName: '',
    customerNumber: "",
    saleDate: ""
  }]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddMedicine = () => {
    setMedicines([...medicines, {
        medicineName: "",
        Rate: "",
        Quantity: "",
        Gst: "",
        expRate: "",
        batch: "",
        customerName: '',
        customerNumber: "",
        saleDate: ""
      }]);
  };

  useEffect(() => {
    console.log(sale);
  }, [sale]);

  return (
    <div>
      <div className='flex gap-3 flex-wrap justify-center pt-4'>
        <input type="text" className=' bg-green-500 border-none focus:outline-none caret-black p-1 text-xl placeholder:text-white' placeholder='Customer Name' name="customerName" value={sale.customerName} onChange={handleChange} />
        <input type="text" className=' bg-green-500  border-none focus:outline-none caret-black p-1 text-xl placeholder:text-white' placeholder='Customer Number' name="customerNumber" value={sale.customerNumber} onChange={handleChange} />
        <input type="text" className=' bg-green-500  border-none focus:outline-none caret-black p-1 text-xl placeholder:text-white' placeholder='Sale Date' name="saleDate" value={sale.saleDate} onChange={handleChange} />
      </div>

      <div>
        {medicines.map((medicine, index) => (
          <div className='flex gap-3 flex-wrap justify-center pt-4' key={index}>
           
             <input type="text" className=' bg-green-500  border-none focus:outline-none caret-black p-1 text-xl placeholder:text-white' placeholder='Medicine Name' name="medicineName" value={sale.medicineName} onChange={handleChange}/>
             <input type="text" className=' bg-green-500  border-none focus:outline-none caret-black p-1 text-xl placeholder:text-white' placeholder='Quantity' name="Quantity" value={sale.Quantity} onChange={handleChange}/>
             <input type="text" className=' bg-green-500  border-none focus:outline-none caret-black p-1 text-xl placeholder:text-white' placeholder='Batch' name="batch" value={sale.batch} onChange={handleChange}/>
             <input type="text" className=' bg-green-500 border-none focus:outline-none caret-black p-1 text-xl placeholder:text-white' placeholder='Rate' name="Rate" value={sale.Rate} onChange={handleChange}/>
        <input type="text" className=' bg-green-500  border-none focus:outline-none caret-black p-1 text-xl placeholder:text-white' placeholder='GST' name="Gst" value={sale.Gst} onChange={handleChange}/>
           <input type="date" className=' bg-green-500  border-none focus:outline-none caret-black p-1 text-xl placeholder:text-white' placeholder='EXP.Date' name="expRate" value={sale.expRate} onChange={handleChange}/>
       </div>))}</div>
       
       <button onClick={handleAddMedicine}>add</button>
       </div>)

        }

export default Sales