import { Fragment,useState, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Menu,Transition } from '@headlessui/react'

const messages = () => {


    const [data, setData] = useState([]);
    const [showPopupView, setShowPopupView] = useState(false);
    const [showPopupConf, setShowPopupConf] = useState(false);
    const [showDelId, setShowDelId] = useState('');


    const confPopup = (del_id) => {
      showToastWarning();
      setShowDelId(del_id);
      setShowPopupConf(true);
      console.log("good cehck")
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
          

    const showPopup = () => {
    setShowPopupView(true);
  };




    useEffect(() => {
      // Function to fetch data from the API
      const fetchData = async () => {
        try {
          const response = await fetch('/api/contact/');
          const result = await response.json();
          console.log("data from api to show all post", result);       
          // setcatenum(result.data.map(i=>i.category));
          setData(result.data);
          
        } catch (error) {
          console.error('Error fetching data:', error);
          showToastError();
        }
      };
  
      fetchData();
      
      // Call the fetch data function
      // console.log(data)
  }, []); 



  //  // delete User detail operation

const handleDelete = async(itemId) => {
  // console.log(itemId,'hello check it')
  // Send a DELETE request to the server
  try {
    console.log(itemId)
    await fetch(`/api/contact/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: itemId }),
    });
    showToastDelete();
    setShowPopupConf(false)

    // Check if the deletion was successful (status code 204)
       } catch (error) {
        showToastError();
    console.error('Error deleting item:', error);
  }
};

  
  // console.log(":::")  





  //   //View User Detail
   
const [userName, setUserName] = useState('');
const [userEmail, setUserEmail] = useState('');
const [userPhone, setUserPhone] = useState('');
const [userCompany, setUserCompany] = useState('');
const [userService, setUserService] = useState('');
const [userBudget, setUserBudget] = useState('');
const [userMessage, setUserMessage] = useState('');

// const [MyId, setMyId] = useState('');

const handleView=(index)=>{

  setUserEmail(index.email)
  setUserName(index.name)
  setUserPhone(index.phone)
  setUserCompany(index.company)
  setUserService(index.service)
  setUserBudget(index.budget)
  setUserMessage(index.message)
  
  // setMyId(index._id)
  console.log(index)
}

    return (


<Fragment>



{showPopupView && (

<div className="fixed w-[100%] h-full bg-[#9898983f] ">

<section className="h-[700px] w-[75%] py-16 overflow-hidden overflow-y-auto backdrop-blur-md left-5 absolute">

<div className="w-full flex justify-center flex-col">

<div className="flex justify-between items-center">

<h1 className=" font-extrabold text-2xl w-fit">Contact Information</h1>

<button onClick={()=>{setShowPopupView(false)}} className=' px-5 h-fit w-fit hover:bg-blue-700 bg-gray-900 text-white font-extrabold absolute text-xl right-10'>X</button>

</div>
<div  className="py-10">

    <table class="border-gray-800 dark:border-gray-700 md:rounded-lg text-sm overflow-hidden border-5 text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
        
        <thead class="dark:divide-gray-700 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          
           <tr>
                <th scope="col" class="px-10 py-4">
                    Name
                </th>
                <th scope="col" class="px-10 py-4">
                    Email
                </th>
                <th scope="col" class="px-10 py-4">
                    Phone#
                </th>
                <th scope="col" class="px-10 py-4">
                  Company
                </th>
                <th scope="col" class="px-14 py-4">
                    Service
                </th>
                <th scope="col" class="px-10 py-4">
                    Budget
                </th>
                {/* <th scope="col" class="px-10 py-4">
                    Message
                </th> */}
                
            </tr>
        
        </thead>
        {data.length > 0 ? (       
        <tbody>
        
        <tr class=" bg-gray-900 border-b dark:border-gray-700">
              
                <td  scope="row" class="px-10 py-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {userName}
                </td>
                <td class="px-10 py-6">
                    {userEmail}
                </td>

                <td class="px-10 py-6">
                    {userPhone}
                </td>
     
                <td class="px-10 py-6">
                    {userCompany}
                </td>
                <td class="px-14 py-6">
                    {userService}
                </td>
                <td class="px-10 py-6">
                    {userBudget}
                </td>
            </tr> 


       </tbody>
) : (
<p>Loading...</p>
)}

</table>

<div className="bg-gray-900 px-3 py-6 border-gray-800 dark:border-gray-700 md:rounded-lg text-sm overflow-hidden border-5 text-left rtl:text-right text-gray-500 dark:text-gray-400 ">

<h1 className=" font-bold text-lg text-gray-100 ">Message</h1>
<h2 className="text-gray-400 py-3 text-base min-h-[160px]">{userMessage}</h2>
</div>
</div>

</div>

</section>
    
</div>

)}




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




        <div>
            <section>

                <h1 className=" font-bold text-2xl py-10 ">Contacts</h1>
                <div class="py-8">

                    <table class="border-gray-800 dark:border-gray-700 md:rounded-lg text-sm overflow-hidden border-5 rtl:text-right text-gray-500 dark:text-gray-400 ">
                        <thead class="dark:divide-gray-700 text-xs text-gray-700 uppercase bg-gray-900 dark:bg-gray-700 dark:text-gray-400">
                          
                           <tr>
                                <th scope="col" class="px-28 py-4">
                                    Name
                                </th>
                                <th scope="col" class="px-28 py-4">
                                    email
                                </th>
                                <th scope="col" class="px-28 py-4">
                                    status
                                </th>
                                <th scope="col" class="px-24 py-4">
                                   ...
                                </th>

                            </tr>
                        
                        </thead>
                        {data.length > 0 ? (       
                        <tbody>
                        

                        {data.map((index) => (
   
                            <tr key={index._id} class="bg-gray-900 border-b dark:border-gray-700">
                                <th scope="row" class="px-20 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {index.name}
                                </th>
                                <td class="px-20 py-2">
                                    {index.email}
                                </td>
                                <td class="px-20 py-2">
                                    Static 
                                </td>
                                <td className="px-4 py-4 text-sm whitespace-nowrap">

<Menu as="div" className="overflow-hidden text-left">
<div>
<Menu.Button className="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
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
<div className="px-1 py-1 ">

<Menu.Item>
{({ active }) => (
  <button  onClick={ ()=> { showPopup();handleView(index);}}
  
  className={`${
      active ? 'bg-violet-500 text-white' : 'text-gray-900'
    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
    >
    
   View 
  </button>
)}
</Menu.Item>
</div>
<div className="px-1 py-1">
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