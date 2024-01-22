import { Fragment,useState, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Menu,Transition } from '@headlessui/react'


const messages = () => {


    const [data, setData] = useState([]);
    const [showPopupConf, setShowPopupConf] = useState(false);
    const [showDelId, setShowDelId] = useState('');
    const [showPopupEdit, setShowPopupEdit] = useState(false);


    //Notify
    
    const showToastUpdate = () => {
      toast.success("Successfully Post Update!", {
        position: toast.POSITION.TOP_RIGHT,
        className: "toast-message",
      })};
    
    
  const showToastErrorFormSubmit = () => {

    toast.error("Submition Error !", {
  position: toast.POSITION.TOP_CENTER,
});

  };


 const showToastWarning = () => {

   toast.warning("Warning Notification !", {
   
     position: toast.POSITION.BOTTOM_RIGHT,
       className: "toast-message",
   
   }) };
   
   
   const showToastDelete = () => {
     toast.success("Post Delete Successfull !", {
       position: toast.POSITION.TOP_RIGHT,
       className: "toast-message",
     })};
     
   
   
     const showToastError = () => {
   
       toast.error("Error Notification !", {
     position: toast.POSITION.TOP_CENTER,
   });
   
     };
       

     const confPopup = (del_id) => {
        showToastWarning();
        setShowDelId(del_id);
        setShowPopupConf(true);
        console.log("good cehck")
      };
     



    useEffect(() => {
      // Function to fetch data from the API
      const fetchData = async () => {
        try {
          const response = await fetch('/api/admin/alluser');
          const result = await response.json();
          console.log("data from api to show all post", result)
          
          // setcatenum(result.data.map(i=>i.category));
          setData(result.data);
          console.log(result.data)
          
  
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
      
      // Call the fetch data function
      // console.log(data)
  }, []); 




  const showPopup = () => {
    setShowPopupEdit(true);
  };



//EDIT

//   //Edit form Pages nefor and after submit or update blog page
   
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [password, setPassword] = useState('');

const [MyId, setMyId] = useState('');
// const [status, setStatus] = useState(true);


// //Edit button effect className: "toast-message",

const handleEdit=(index)=>{

  setName(index.name)
  setEmail(index.email)
  setPhone(index.phone)
  setPassword(index.password)
  setMyId(index._id)
console.log(index)
}


//update
const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("handleSubmit")
  
  // Create FormData object to send files and other data
  const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
formData.append('phone', phone);
formData.append('password', password);

// formData.append('status', status);
console.log(formData)
console.log(MyId)

try {
  const response = await fetch(`/api/admin/register/${MyId}`, {
    method: 'PATCH',
    body:formData
  })
  
  if (response.ok) {  
    // Handle success
    console.log('Data submitted successfully');
    showToastUpdate()
    setShowPopupEdit(false)
    showToastErrorFormSubmit();
    // setShowPopupMess(true)


    // setTimeout(() => {
    //   setShowPopupMess(false);
    // }, 2000);
  } else {

    // Handle error
    console.error('Failed to submit data');
  }
} catch (error) {
  showToastError()
  console.error('Error submitting data:', error);
}
};




    return (


<Fragment>



{showPopupConf && (
    <div className="fixed w-[100%] h-full  bg-[#9898983f]  " >
  <section className="h-[600px] w-[75%] overflow-hidden flex justify-center items-center overflow-y-auto backdrop-blur-md left-5 p-8 absolute">
  <div className=" bg-[#f5f5f5cb] border-2 border-solid border-black p-5 w-[50%] h-[30%] flex flex-col justify-center items-center">

  <h1 className="font-medium">Are you sure you want to delete?</h1>
  <div className='flex space-x-10 py-7'>
  <button onClick={()=>{ handleDelete(showDelId)}}>Sure</button>
  <button onClick={()=>{ setShowPopupConf(false) }}>Not Sure</button>
  
  </div>
  
  </div>
  </section>
</div>
)}



{showPopupEdit && (
    <div className="fixed w-[100%] h-full bg-[#9898983f]  " >
<section className="h-[600px] w-[75%] overflow-hidden overflow-y-auto backdrop-blur-md left-5 p-8 absolute">
 
<div className="w-full bg-[#f5f5f5cb] p-5 flex justify-center items-center">


<form onSubmit={handleSubmit}>
<button onClick={()=>{setShowPopupEdit(false)}} className=' px-5 h-fit w-fit hover:bg-blue-700 bg-gray-900 text-white font-extrabold absolute text-xl right-10'>X</button>
<div >  
<h1 className="text-2xl font-extrabold">Update Profile</h1> 
</div>
<div>  

<div className="-mx-3 flex gap-2 flex-wrap">
<div className="w-full px-16">
<div className="mb-5">
<label htmlFor="fName" className="mb-3 block text-base font-medium ">
Name
</label>
<input type="text" name="fName" id="fName" placeholder="What going on ..." value={name} 
onChange={(e) => setName(e.target.value)} className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
</div>
</div>

<div className="w-full px-16">
<div className="mb-5">

<label htmlFor="lName" className="mb-3 block text-base font-medium ">
Email
</label>
<input type="text" name="fName" id="fName" placeholder="What going on ..." value={email} 
onChange={(e) => setEmail(e.target.value)} className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />

</div>
</div>

<div className="w-full px-16">
<div className="mb-5">
<label htmlFor="lName" className="mb-3 block text-base font-medium ">
Phone#
</label>
<input type="number" name="fName" id="fName" placeholder="What going on ..." value={phone} 
onChange={(e) => setPhone(e.target.value)} className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />

</div>
</div>

<div className="w-full px-16">
<div className="mb-5">
<label htmlFor="lName" className="mb-3 block text-base font-medium ">
password
</label>
<input type="text" name="fName" id="fName" placeholder="What going on ..." value={password} 
onChange={(e) => setPassword(e.target.value)} className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />

</div>
</div>


{/* <div className="w-full px-16">
<div className="mb-5">
<label htmlFor="lName" className="mb-3 block text-base font-medium ">
Status
</label>
{/* <select type="text" name="lName" id="lName" defaultValue={status}
onChange={(e) => setStatus(e.target.value)} className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" >
<option value={true}>Active</option>
<option value={false}>In-Active</option>
</select> 
</div>
</div> */}

</div>
   
   <div>
   {/* component */}
   <link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.4/dist/flowbite.min.css" />

</div>


<div className="space-x-2">
      
<button onClick={()=>{setShowPopupEdit(false)}} className=" bg-gray-900 hover:bg-blue-700 mt-4 py-3 px-8 text-center text-base font-semibold outline-none text-white">
cancle
</button>
<button className="hover:shadow-form  bg-gray-900 text-white hover:bg-blue-700 mt-4 py-3 px-8 text-center text-base font-semibold outline-none">
Submit
</button>

</div>

</div>

   </form> 



</div>

   </section>

</div>
)}


        <div>
            <section>

                <h1 className=" font-bold text-2xl py-10 px-10">Users</h1>
             
                <div class="py-6 px-4">

                    <table class=" border-gray-800 dark:border-gray-700 md:rounded-lg text-sm overflow-hidden border-5 rtl:text-right text-gray-500 dark:text-gray-400 ">
                        <thead class="dark:divide-gray-700 text-xs text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400">
                          
                           <tr>
                                <th scope="col" class="px-6 py-6">
                                    Name
                                </th>
                                <th scope="col" class="px-6 py-6">
                                    Email
                                </th>
                                <th scope="col" class="px-6 py-6">
                                    Phone#
                                </th>
                                <th scope="col" class="px-6 py-6">
                                   Role
                                </th>
                                <th scope="col" class="px-6 py-4">
                                   ...
                                </th>
                                

                            </tr>
                        
                        </thead>
                        {data.length > 0 ? (       
                        <tbody>
                        

                        {data.map((index) => (
   
                            <tr key={index._id} class="bg-gray-900 border-b dark:border-gray-700">
                                <th scope="row" class="px-16 py-7 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {index.name}
                                </th>
                                <td class="px-16 py-7">
                                    {index.email}
                                </td>
                                <td class="px-16 py-7">
                                    {index.phone}
                                </td>
                                <td class="px-24 py-7">
                                    {index.role}
                                </td>
 
                                <td className="px-1 py-4 text-sm whitespace-nowrap">

<Menu as="div" className="overflow-hidden text-left">
<div>
<Menu.Button className="inline-flex justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
<button className="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
    </svg>
  </button>
</Menu.Button>
</div>
<Transition
as={Fragment}
enter="transition ease-out duration-100"
enterFrom="transform opacity-0 scale-95"
enterTo="transform opacity-100 scale-100"
leave="transition ease-in duration-75"
leaveFrom="transform opacity-100 scale-100"
leaveTo="transform opacity-0 scale-95"
>
<Menu.Items className="absolute z-50 right-20 mt-2 w-24 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">



<div className="px-1 py-1">
<Menu.Item>
{({ active }) => (

<button 

onClick={ ()=> {showPopup(); handleEdit(index);}}
    className={`${
      active ? 'bg-violet-500 text-white' : 'text-gray-900'
    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
    >
    Edit
  </button>
)}
</Menu.Item>
<Menu.Item>
{({ active }) => (
  <button
    className={`${
      active ? 'bg-violet-500 text-white' : 'text-gray-900'
    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
     onClick={ ()=>confPopup(index._id) }
  >
    {/* handleDelete(index._id) */}
    
    Delete
  </button>
  
)}

</Menu.Item>

</div>
</Menu.Items>
</Transition>

<ToastContainer />

</Menu>
 
</td>
                            </tr> 
            ))}
                       </tbody>
            ) : (
          <p>Loading...</p>
        )}
        
         </table>
                </div>


            </section>
        </div>



        </Fragment>


    )

}

export default messages;