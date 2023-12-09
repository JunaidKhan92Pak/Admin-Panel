import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useAuth } from './AuthContext';
import {useAuth} from '../Hooks/useAuth'


const Login =()=>{
  
  const {LoginUser} = useAuth();
  
  const Navigate = useNavigate()



    const [formData, setFormData] = useState({
      email: '',
      password: '',
     });
  
     
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };



  const HandleLogin = async(e)=>{

    e.preventDefault()
      console.log( "123 check")

      console.log('User Login successfully', formData);

      fetch('https://de-backend-chi.vercel.app/admin/login', {
      
      method: 'POST',
      
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json",
        
      },
      body: JSON.stringify(formData),
      credentials: 'include',
      })
      .then( async(response) =>{
     
        console.log( response.status )

if(response.status==200){

let Userdata= await response.json() 
  console.log('User Login successfully',Userdata,document.cookie);

  LoginUser()
  
  Navigate("/")  
}else{
  console.log('User invalid');
  Navigate("/login")  

}


  }).catch((error) => {
        // Handle registration failure
        console.log("data ma error ha")
        
        console.error('Error login user', error);
      });
      
      
      

      // Perform validation (you can add more validation logic)
     


      if (!formData.email || !formData.password) {
        alert('Please fill in all fields');
        return ;
      }
  
      // Assuming you have an API endpoint for user registration
      // Make an API call to register the user
   
  
  }

  
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    // };





  return (
    
    <section>
  <div className="flex flex-col items-center bg-gray-900 justify-center py-10">

    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
      <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
   Devzox  
    </a>
    <div className="w-full bg-white rounded-lg  shadow border-2 md:mt-0 sm:max-w-md xl:p-10 dark:bg-gray-800 border-zinc-600">
      <div className=" space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Create an account
        </h1>

        <form onSubmit={HandleLogin}  className="space-y-4 md:space-y-6" action="#">
      
        <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input required type="email" name="email" id="email"  value={formData.email}
            onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
          </div>


          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input required type="password" name="password" id="password"   value={formData.password}
            onChange={handleChange} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
        
          
          <button type="submit" className="w-full text-white bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:border-blue-500  ">Login</button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
          </p>
        </form>
 
        </div>
    </div>

  </div>
</section>


  )
}

export default Login






