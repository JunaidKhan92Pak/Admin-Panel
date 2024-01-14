import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Fragment,useState, useEffect } from 'react';
import { Menu,Transition } from '@headlessui/react'
import TextEditor from "./TextEditor"

const AllPost =()=>{
  
  const [data, setData] = useState([]);
const [showPopupEdit, setShowPopupEdit] = useState(true);
const [showPopupConf, setShowPopupConf] = useState(false);

// const [showPopupMess, setShowPopupMess] = useState(false);
const [showDelId, setShowDelId] = useState();


//Notify

const showToastUpdate = () => {
  toast.success("Successfully Post Update!", {
    position: toast.POSITION.TOP_RIGHT,
    className: "toast-message",
  })};


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
    
    


    //latest update after anyaction
    
  useEffect(() => {
    // Function to fetch data from the API
    
    const fetchData = async () => {
      try {
        const response = await fetch('/api/blog/');
        const result = await response.json();
        console.log("data from api to show all post", result.data)
        setData(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    // Call the fetch data function
    fetchData();
    // console.log(data)
}, [data]); 
// Empty dependency array ensures the effect runs only once after initial render

    
//delete operation

  const handleDelete = async (itemId) => {
    // console.log(itemId,'hello check it')
    // Send a DELETE request to the server
    try {
      await fetch(`/api/blog/${itemId}`, {
        method: 'DELETE',
      });
      showToastDelete();
      setShowPopupConf(false)

      // Check if the deletion was successful (status code 204)
         } catch (error) {
      console.error('Error deleting item:', error);
    }
  };



  //Edit form Pages nefor and after submit or update blog page
   
const [image, setImage] = useState('');
const [title, setTitle] = useState('');
const [content, setContent] = useState('');
const [category, setCategory] = useState('');
const [featured, setFeatured] = useState(false);
const [status, setStatus] = useState(true);
const [metaTitle, setMetaTitle] = useState('');
const [description, setDescription] = useState('');
const [author, setAuthor] = useState('');
const [MyId, setMyId] = useState('');


//Edit button effect className: "toast-message",

const handleEdit=(index)=>{

  setImage(index.fImage)
  setTitle(index.title)
  setContent(index.content)
  setCategory(index.category)
  setFeatured(index.isFeatured)
  setStatus(index.status)
  setMetaTitle(index.meta.title)
  setDescription(index.meta.description)
  setAuthor(index.meta.author)

setMyId(index._id)
console.log(index)
}



useEffect(() => {
  // This effect will run when the component mounts
    // You can use it to show the popup after a delay, for example
    setShowPopupEdit(false);
    // const timeoutId = setTimeout(() => {
    // }, 1000); // Show popup after 2000 milliseconds (2 seconds)
    
    // Clean up the timeout to avoid memory leaks
    // return () => clearTimeout(timeoutId);
  }, [setShowPopupEdit]); // Empty dependency array means the effect runs only once when the component mounts

  const closePopup = () => {
    setShowPopupEdit(true);
  };
  

  const confPopup = (del_id) => {
    showToastWarning();
    setShowDelId(del_id);
    setShowPopupConf(true);
  };
  
  // LAst Submitted
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit")
    
    // Create FormData object to send files and other data
    const formData = new FormData();
  formData.append('fImage', image);
  formData.append('title', title);
  formData.append('content', content);
  formData.append('category', category);
  formData.append('isFeatured', featured);
  formData.append('status', status);
  formData.append('metaTitle', metaTitle);
  formData.append('metaDescription', description);
  formData.append('metaAuthor', author);
  console.log(formData)
  console.log(MyId)
  
  try {
    const response = await fetch(`/api/blog/${MyId}`, {
      method: 'PATCH',
      body:formData
    });

    if (response.ok) {  
      // Handle success
      console.log('Data submitted successfully');
      showToastUpdate()
      setShowPopupEdit(false)

      // setShowPopupMess(true)


      // setTimeout(() => {
      //   setShowPopupMess(false);
      // }, 2000);
    } else {
      // Handle error
      console.error('Failed to submit data');
    }
  } catch (error) {
    console.error('Error submitting data:', error);
  }
};

  return (


<Fragment>
    
    {showPopupEdit && (
    <div className="fixed w-[100%] h-full bg-[#9898983f]  " >
<section className="h-[600px] w-[75%] overflow-hidden overflow-y-auto backdrop-blur-md left-5 p-8 absolute">
 
<div className="w-full bg-[#f5f5f5cb] p-5 flex justify-center items-center">
<form onSubmit={handleSubmit}>
<button onClick={()=>{setShowPopupEdit(false)}} className=' px-5 h-fit w-fit hover:bg-blue-700 bg-gray-900 text-white font-extrabold absolute text-xl right-10'>X</button>
<div >  
<h1 className="text-2xl font-extrabold">Update Post</h1> 
</div>
<div>  
<section aria-label="File Upload Modal"  className="relative h-full flex flex-col rounded-md">
<label className="py-2 text-">Featured Image</label>
<section className="h-full overflow-auto p-8 w-full  flex flex-col">
<header className="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center">
 <input id="hidden-input" type="file" onChange={(e) => setImage(e.target.files[0])} multiple className="" />
</header>
</section>
</section>

<div className="-mx-3 flex gap-2 flex-wrap">
<div className="w-full px-3">
<div className="mb-5">
<label htmlFor="fName" className="mb-3 block text-base font-medium ">
Title
</label>
<input type="text" name="fName" id="fName" placeholder="What going on ..." value={title}
onChange={(e) => setTitle(e.target.value)} className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
</div>
</div>
<div className="w-full px-3">

<TextEditor handleContent={setContent} />

</div>
<div className="w-full px-3">
<div className="mb-5">
<label htmlFor="lName" className="mb-3 block text-base font-medium ">
Choose Category
</label>
<select type="text" name="lName" id="lName" placeholder="My First Blog"  value={category}
onChange={(e) => setCategory(e.target.value)} className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" >
<option value="Programming">Programming</option>
<option value="Artificial-inteligence">Artificial-inteligence</option>
<option value="Cryptography">Cryptography</option>
</select>
</div>
</div>
<div className="w-full px-3">
<div className="mb-5">
<label htmlFor="lName" className="mb-3 block text-base font-medium ">
isFeatured
</label>
<select type="text" name="lName" id="lName" placeholder="My First Blog"  defaultValue={featured}
onChange={(e) => setFeatured(e.target.value)} className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" >
<option value={true}>Yes</option>
<option value={false}>No</option>
</select>
</div>
</div>
<div className="w-full px-3">
<div className="mb-5">
<label htmlFor="lName" className="mb-3 block text-base font-medium ">
Status
</label>
<select type="text" name="lName" id="lName" defaultValue={status}
onChange={(e) => setStatus(e.target.value)} className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" >
<option value={true}>Active</option>
<option value={false}>In-Active</option>
</select>
</div>
</div>
<div className="w-full px-3">
<div className="mb-5">
<label htmlFor="lName" className="mb-3 block text-base font-medium ">
Meta Title
</label>
<input type="text" name="lName" id="lName" placeholder="My First Blog"  value={metaTitle}
onChange={(e) => setMetaTitle(e.target.value)} className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
</div>
</div>
<div className="w-full px-3">
<div className="mb-5">
<label htmlFor="lName" className="mb-3 block text-base font-medium ">
Meta Description
</label>
<input type="text" name="lName" id="lName" placeholder="hi its blog description"  value={description}
onChange={(e) => setDescription(e.target.value)} className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
</div>

</div>
<div className="w-full px-3">
<div className="mb-5">
<label htmlFor="lName" className="mb-3 block text-base font-medium ">
Meta Author (default:devzox)
</label>
<input type="text" name="lName" id="lName" placeholder="devzox"  value={author}
onChange={(e) => setAuthor(e.target.value)} className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
</div>

</div>
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

<div >




{/* 
{showPopupMess && (
           <div class="flex absolute items-center bg-blue-500 text-white text-sm font-bold px-4 py-3" role="alert">
  <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
  <p> Your Post Updated.</p>
</div>
        )} */}



    <section className="container px-4 mx-auto">
    
     <div className="sm:flex sm:items-center sm:justify-between">
     <div className="">
    <h1 className="text-xl">All Post</h1>
    </div>
      
      
          {/* <h2 className="text-lg font-medium">Files uploaded</h2> */}
          <div className="flex items-center mt-4 gap-x-3">
            {/* <button className="w-1/2 px-5 py-2 text-sm transition-colors duration-200 bg-white border rounded-lg sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-white dark:border-gray-700">
              Download all
            </button> */}
            <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
              <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_3098_154395)">
                  <path d="M13.3333 13.3332L9.99997 9.9999M9.99997 9.9999L6.66663 13.3332M9.99997 9.9999V17.4999M16.9916 15.3249C17.8044 14.8818 18.4465 14.1806 18.8165 13.3321C19.1866 12.4835 19.2635 11.5359 19.0351 10.6388C18.8068 9.7417 18.2862 8.94616 17.5555 8.37778C16.8248 7.80939 15.9257 7.50052 15 7.4999H13.95C13.6977 6.52427 13.2276 5.61852 12.5749 4.85073C11.9222 4.08295 11.104 3.47311 10.1817 3.06708C9.25943 2.66104 8.25709 2.46937 7.25006 2.50647C6.24304 2.54358 5.25752 2.80849 4.36761 3.28129C3.47771 3.7541 2.70656 4.42249 2.11215 5.23622C1.51774 6.04996 1.11554 6.98785 0.935783 7.9794C0.756025 8.97095 0.803388 9.99035 1.07431 10.961C1.34523 11.9316 1.83267 12.8281 2.49997 13.5832" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_3098_154395">
                    <rect width={20} height={20} fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>Add New</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right  dark:text-gray-400">
                        <div className="flex items-center gap-x-3">
                          <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700" />
                          <span>Feature Image</span>
                        </div>
                      </th>
                      <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right  dark:text-gray-400">
                        Title
                      </th>
                      <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right  dark:text-gray-400">
                    Category
                      </th>
                      <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right  dark:text-gray-400">
                        Status
                      </th>
                      <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right  dark:text-gray-400">
                        IsFeatured
                      </th>
            
                      <th scope="col" className="relative py-3.5 px-4 dark:text-gray-400">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  
                  {data.length > 0 ? (
                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    
            {data.map((index) => (
              // <img src={item.meta} alt={imageData.title} />
            
              <tr key={index._id}>
                 
                  <td className="px-12 py-4 text-sm font-normal dark:text-gray-300 whitespace-nowrap">
                  <img src={index.fImage} className='w-20 h-20' /> </td>
                  <td  className="px-4 py-4 text-sm  dark:text-gray-300 whitespace-nowrap">{index.title}</td>
                  <td  className="px-4 py-4 text-sm  dark:text-gray-300 whitespace-nowrap">{index.category}</td>
                  <td  className="px-4 py-4 text-sm dark:text-gray-300 whitespace-nowrap">{index.status? "Active": "in-Active"}</td>
                  <td  className="px-4 py-4 text-sm dark:text-gray-300 whitespace-nowrap">{index.isFeatured? "Yes" :"No" }</td>

                  
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
  
  <button onClick={ ()=>{closePopup(); handleEdit(index);}}
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
                  >
                    
                   View Blog
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
                     onClick={ ()=> confPopup(index._id)}
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
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-6">
          <a href="#" className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>
            <span>
              previous
            </span>
          </a>
          <div className="items-center hidden md:flex gap-x-3">
            <a href="#" className="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60">1</a>
            <a href="#" className="px-2 py-1 text-sm  rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">2</a>
            <a href="#" className="px-2 py-1 text-sm  rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">3</a>
            <a href="#" className="px-2 py-1 text-sm  rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">...</a>
            <a href="#" className="px-2 py-1 text-sm  rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">12</a>
            <a href="#" className="px-2 py-1 text-sm  rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">13</a>
            <a href="#" className="px-2 py-1 text-sm  rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">14</a>
          </div>
          <a href="#" className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
            <span>
              Next
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </div>
      </section>
      
        </div>
        </Fragment>
    )
}


export default AllPost