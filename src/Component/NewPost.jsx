import TextEditor from "./TextEditor"


const NewPost =()=>{
    return (
        <div className="flex justify-center items-center w-[85%]">
{/* component */}
<div className="flex items-center justify-center px-12 py-3 w-full ">
  {/* Author: FormBold Team */}
  {/* Learn More: https://formbold.com */}
  <div className="mx-auto w-full max-w-auto">
    <div>
    <div className="">

    <h1 className="text-2xl">Add New Post</h1>
    </div>
    
    <div>
    
    <article aria-label="File Upload Modal" className="relative h-full flex flex-col rounded-md">
    
        

        <label className="py-2 text-">Featured Image</label>
        <section className="h-full overflow-auto p-8 w-full  flex flex-col">
          <header className="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center">
          
            <input id="hidden-input" type="file" multiple className="" />
           
          </header>
       
        </section>

      </article>
  <template id="file-template">
    <li className="block p-1 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 h-24">
      <article tabindex="0" className="group w-full h-full rounded-md focus:outline-none focus:shadow-outline elative bg-gray-100 cursor-pointer relative shadow-sm">
        <img alt="upload preview" className="img-preview hidden w-full h-full sticky object-cover rounded-md bg-fixed" />

        <section className="flex flex-col rounded-md text-xs break-words w-full h-full z-20 absolute top-0 py-2 px-3">
          <h1 className="flex-1 group-hover:text-blue-800"></h1>
          <div className="flex">
            <span className="p-1 text-blue-800">
              <i>
                <svg className="fill-current w-4 h-4 ml-auto pt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M15 2v5h5v15h-16v-20h11zm1-2h-14v24h20v-18l-6-6z" />
                </svg>
              </i>
            </span>
            <p className="p-1 size text-xs text-gray-700"></p>
            <button className="delete ml-auto focus:outline-none hover:bg-gray-300 p-1 rounded-md text-gray-800">
              <svg className="pointer-events-none fill-current w-4 h-4 ml-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path className="pointer-events-none" d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z" />
              </svg>
            </button>
          </div>
        </section>
      </article>
    </li>
  </template>

  <template id="image-template">
    <li className="block p-1 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 h-24">
      <article tabindex="0" className="group hasImage w-full h-full rounded-md focus:outline-none focus:shadow-outline bg-gray-100 cursor-pointer relative text-transparent hover:text-white shadow-sm">
        <img alt="upload preview" className="img-preview w-full h-full sticky object-cover rounded-md bg-fixed" />

        <section className="flex flex-col rounded-md text-xs break-words w-full h-full z-20 absolute top-0 py-2 px-3">
          <h1 className="flex-1"></h1>
          <div className="flex">
            <span className="p-1">
              <i>
                <svg className="fill-current w-4 h-4 ml-auto pt-" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M5 8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5zm9 .5l-2.519 4-2.481-1.96-4 5.96h14l-5-8zm8-4v14h-20v-14h20zm2-2h-24v18h24v-18z" />
                </svg>
              </i>
            </span>

            <p className="p-1 size text-xs"></p>
            <button className="delete ml-auto focus:outline-none hover:bg-gray-300 p-1 rounded-md">
              <svg className="pointer-events-none fill-current w-4 h-4 ml-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path className="pointer-events-none" d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z" />
              </svg>
            </button>
          </div>
        </section>
      </article>
    </li>
  </template>



    </div>


      <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3">
          <div className="mb-5">
            <label htmlFor="fName" className="mb-3 block text-base font-medium text-[#07074D]">
              Title
            </label>
            <input type="text" name="fName" id="fName" placeholder="What going on ..." className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
          </div>
        </div>
        <div className="w-full px-3">
          
           <TextEditor />
          
        </div>
        <div className="w-full px-3">
          <div className="mb-5">
            <label htmlFor="lName" className="mb-3 block text-base font-medium text-[#07074D]">
              Meta Title
            </label>
            <input type="text" name="lName" id="lName" placeholder="Last Name" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
          </div>
          <div className="mb-5">
            <label htmlFor="lName" className="mb-3 block text-base font-medium text-[#07074D]">
              Meta Description
            </label>
            <input type="text" name="lName" id="lName" placeholder="Last Name" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
          </div>
        </div>
      </div>

<div>
  {/* component */}
  <link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.4/dist/flowbite.min.css" />
  {/* This is an example component */}
  {/* <div className=" mx-auto">
    <label htmlFor="countries" className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400">Select Category</label>
    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  block dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <option selected>Choose a country</option>
      <option value="US">United States</option>
      <option value="CA">Canada</option>
      <option value="FR">France</option>
      <option value="DE">Germany</option>
    </select>

  </div> */}
</div>


      
      <div>
        <button className="hover:shadow-form rounded-md  bg-[#6A64F1] mt-4 py-3 px-8 text-center text-base font-semibold text-white outline-none">
          Submit
        </button>
      </div>
    </div>
  </div>
</div>

  </div>
    )
}


export default NewPost