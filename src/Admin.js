import React, { useState }  from 'react'
import { MdSearch } from "react-icons/md";
import { MdTune } from "react-icons/md";
import { MdGroup } from "react-icons/md";
import './Admin.css';

const Admin = () => {
  const [ filterToggled , setFilterToggled ] = useState(false);

  function handleClick(){
    setFilterToggled(!filterToggled);
    console.log(filterToggled);
  }

  return(
<>
  <div className="flex items-center min-h-screen p-8 bg-gray-100 lg:justify-center">
    <div className="min-w-11/12 min-h-11/12 flex flex-col flex-1 overflow-hidden bg-white rounded-md shadow-lg max md:flex-1 2xl:max-w-screen-xl 2xl:max-h-screen-sm">
      <div className=" p-5 bg-white md:flex-1">
        <div className='flex justify-between items-center'>
            <h3 className="my-4 text-2xl font-semibold text-gray-700">Admin Dashboard</h3>   
        </div>
        <div className='flex flex-col bg-gray-200 justify-evenly sm:flex-row'>
            <div className='justify-between p-4 '>
                <span className='flex bg-white p-4 rounded-2xl text-center'>
                    <div className='flex my-auto'> 
                        {/* <MaterialIcon icon="group" size={80} /> */}
                        <MdGroup  className='flex my-auto' size={100} />
                     </div>
                    <div className='p-4 flex flex-col text-left justify-center'>
                      <div className='text-lg no-student font-semibold'>32</div>
                      <div className='text-gray-600 '>Students</div>
                    </div>
                </span>
            </div>
         </div>
        <div className='flex flex-col bg-gray-200 my-4 justify-evenly sm:flex-row'>
          <div className='w-full p-4 flex flex-col'>
            <div className='flex flex-col gap-2 mb-2 xl:justify-evenly xl:flex-row '>
                <button onClick={handleClick} className='h-max w-max px-4 py-2 rounded text-center my-auto flex gap-2 text-md bg-white p-2'> 
                    {/* <MaterialIcon icon="tune" size={25} /> */}
                    <MdTune className='flex my-auto' size={23} />
                    Filter
                </button>
                <div className='flex flex-col gap-4 xl:justify-between xl:flex-row '>
                    <div className='flex flex-row'>
                        <input placeholder='Search for Name ' className='px-4 py-2 transition duration-300 border font-semibold text-gray-700 bg-white border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"' type="text" />
                        <span className='-ml-8 flex items-center'>
                        {/* <MaterialIcon icon="search" size={25} /> */}
                        <MdSearch className='flex my-auto' size={23} />
                        </span>
                    </div> 
                    <div className='flex flex-row'>
                        <input placeholder='Search for Institute' className='px-4 py-2 transition duration-300 border font-semibold text-gray-700 bg-white border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"' type="text" />
                        <span className='-ml-8 flex items-center'>
                        {/* <MaterialIcon icon="search" size={25} /> */}
                        <MdSearch className='flex my-auto' size={23} />
                        </span>
                    </div> 
                    <div className='flex flex-row'>
                        <input placeholder='Search' className='px-4 py-2 transition duration-300 border bg-white font-semibold text-gray-700  border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"' type="text" />
                        <span className='-ml-8 flex items-center'>
                        {/* <MaterialIcon icon="search" size={25} /> */}
                        <MdSearch className='flex my-auto' size={23} />
                        </span>
                    </div> 
                    <div className='flex flex-row '>
                        <input placeholder='Search' className='px-4 py-2 transition duration-300 border text-gray-700 font-semibold bg-white border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"' type="text" />
                        <span className='-ml-8 flex items-center'>
                        {/* <MaterialIcon icon="search" size={25} /> */}
                        <MdSearch className='flex my-auto' size={23} />
                        </span>
                    </div> 
                </div>
             </div>
            <div  className={`flex flex-col ${ filterToggled ? "show" : "hide" } `} >
                        <div className='w-full py-2 text-center mb-4 '>
                            <div className='text-xl py-2' >Educational Institutions</div>
                            <form className='flex flex-col lg:grid lg:grid-cols-2 '>
                                <div className=" flex items-center space-x-2 py-2">
                                    <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                                    <label className="text-sm font-semibold text-gray-500">S S  Girls School – Sirsa ( Haryana )</label>
                                </div>
                                <div className="flex items-center space-x-2 py-2">
                                    <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                                    <label className="text-sm font-semibold text-gray-500">S S  Girls College – Sirsa ( Haryana )</label>
                                </div>
                                <div className="flex items-center space-x-2 py-2">
                                    <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                                    <label className="text-sm font-semibold text-gray-500">S S  Boys School – Sirsa ( Haryana )</label>
                                </div>
                                <div className="flex items-center space-x-2 py-2">
                                    <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                                    <label className="text-sm font-semibold text-gray-500">S S  Boys College – Sirsa ( Haryana )</label>
                                </div>                 
                                <div className="flex items-center space-x-2 py-2">
                                    <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                                    <label className="text-sm font-semibold text-gray-500">S S  College of Education – Sirsa ( Haryana )</label>
                                </div>
                                <div className="flex items-center space-x-2 py-2">
                                    <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                                    <label className="text-sm font-semibold text-gray-500">MSG Glorious International School – Sirsa ( Haryana )</label>
                                </div>
                                <div className="flex items-center space-x-2 py-2">
                                    <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                                    <label className="text-sm font-semibold text-gray-500">S S  Noble School – Kotda ( Rajasthan )</label>
                                </div>                  
                                <div className="flex items-center space-x-2 py-2">
                                    <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                                    <label className="text-sm font-semibold text-gray-500">S S  Girls School – Tara Nagar( Rajasthan )</label>
                                </div>
                                <div className="flex items-center space-x-2 py-2">
                                    <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                                    <label className="text-sm font-semibold text-gray-500">S S  Girls School – Budhni ( Madhya Pradesh )</label>
                                </div> 
                                <div className="flex items-center space-x-2 py-2">
                                    <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                                    <label className="text-sm font-semibold text-gray-500">S S  Girls School – Sri Gurusar Modia ( Rajasthan )</label>
                                </div>
                                <div className="flex items-center space-x-2 py-2">
                                    <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                                    <label className="text-sm font-semibold text-gray-500">S S  Girls College – Sri Gurusar Modia ( Rajasthan )</label>
                                </div>
                                <div className="flex items-center space-x-2 py-2">
                                    <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                                    <label className="text-sm font-semibold text-gray-500">S S  Boys School – Sri Gurusar Modia ( Rajasthan )</label>
                                </div>
                            </form>
                        </div>
                        <div className='w-full text-center mb-4 flex-1'>
                            <div className='text-lg' >Gender</div>
                            <div className=" flex items-center space-x-2 py-2">
                                <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                                <label className="text-sm font-semibold text-gray-500">Male</label>
                            </div>
                            <div className="flex items-center space-x-2 py-2">
                                <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                                <label className="text-sm font-semibold text-gray-500">Female</label>
                            </div>                      
                            <div className="flex items-center space-x-2 py-2">
                                <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                                <label className="text-sm font-semibold text-gray-500">Other</label>
                            </div>                      
                        </div>
             </div>
            <div className='flex flex-col'>
              <ul className='filtered-list flex justify-between py-1 ' >
                <li>Full Name</li>
                <li className='hidden md:block'>School/College/Institute</li>
                <li>Qualification</li>
                <li className='hidden md:block'>Phone NO. ( Calling )</li>
                <div className='flex gap-8 mr-0'>
                    <button className="flex gap-2">
                    <img src="./Asset/Icon/fullScreen.svg" width={25} alt="" />
                    View
                  </button>
                  <button className="flex gap-2">
                    <img src="./Asset/Icon/delete.svg" width={25} alt="" />
                    Delete
                  </button>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
  )
}
export default Admin;



