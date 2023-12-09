import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useAuth} from '../Hooks/useAuth'

const Register = () => {

  const {RegUser} = useAuth();
  
  const Navigate = useNavigate()


    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      role: 2002,
      password: '',
      confirmPassword: ''
    });

    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      console.log( "Najaf Nazeer")
      // Perform validation (you can add more validation logic)
      if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword ||!formData.phone ) {
        alert('Please fill in all fields');
        return;
      }
  
     
      // Assuming you have an API endpoint for user registration
      // Make an API call to register the user
      fetch('https://de-backend-chi.vercel.app/admin/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => console.log(response.json))
        .then((data) => {
          // Handle successful registration
          console.log('User registered successfully');

          RegUser()
       
          Navigate("/")
         

        })
        .catch((error) => {
          // Handle registration failure
  
          console.error('Error registering user', error);
        });
    };

  return (

    <div>
    <section className="bg-gray-900 md:py-0" >
    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
    <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
 Devzox  
  </a>
    <div className="flex items-center justify-center mx-auto md:py-0">
   
    <div className=" w-full bg-white rounded-lg  shadow border-2 md:mt-0 sm:max-w-md md:p-0 dark:bg-gray-800 border-zinc-600 ">
      
    <div className="space-y-4 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Create an account
        </h1>

        <form onSubmit={handleSubmit}  className="space-y-4 md:space-y-2" action="#">
        <div>
            <label htmlFor="name" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <input required type="name" name="name" id="name"   value={formData.name}
            onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Zulkr-nan" />
          </div>  
        <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input required type="email" name="email" id="email"   value={formData.email}
            onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
          </div>

          <div>
          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone#</label>
          <input required type="number" name="phone" id="phone"   value={formData.phone}
          onChange={handleChange} placeholder="+92345" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>

          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input required type="password" name="password" id="password"   value={formData.password}
            onChange={handleChange} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <div>

            <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
            <input required type="password" name="confirmPassword" id="confirm-password" value={formData.confirmPassword}
            onChange={handleChange} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <button type="submit" className="w-full text-white bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:border-blue-500  ">Create an account</button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
          </p>
        </form>
 
        </div>
    </div>
  </div>
  </section>


</div>

  )
}

export default Register