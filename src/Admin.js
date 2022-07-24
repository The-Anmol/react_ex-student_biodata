import React, { useState }  from 'react'
import { MdSearch } from "react-icons/md";
import { MdTune } from "react-icons/md";
import { MdGroup } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdOutlineVisibility } from "react-icons/md";
import './Admin.css';

const Admin = () => {
  const [ filterToggled , setFilterToggled ] = useState(false);

  function handleClick(){
    setFilterToggled(!filterToggled);
  }

  return(
<>
  <div className="flex items-center min-h-screen p-8 bg-gray-100 lg:justify-center">
    <div className="min-w-11/12 min-h-11/12 flex flex-col flex-1 overflow-hidden bg-white rounded-md shadow-lg max md:flex-1 2xl:max-w-screen-xl 2xl:max-h-screen-sm">
      <div className=" p-5 bg-white md:flex-1">
        <div className='flex justify-between items-center'>
            <h3 className="my-4 text-2xl font-semibold text-gray-700">Admin Dashboard</h3>   
        </div>
        <div className='flex flex-col bg-gray-300 justify-evenly sm:flex-row'>
            <div className='justify-between p-4 '>
                <span className='flex bg-white p-4 rounded text-center'>
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
        <div className='flex flex-col bg-gray-300 my-4 justify-end sm:flex-row'>
          <div className='w-full p-4 flex flex-col'>
            <div className='flex flex-col gap-2 justify-end items-end'>
                <div className='flex flex-col gap-4 justify-end '>
                    <div className='flex flex-row'>
                        <input placeholder='Search for Name ' className='px-4 py-2 transition duration-300 border font-semibold text-gray-700 bg-white border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"' type="text" />
                        <span className='-ml-8 flex items-center'>
                        {/* <MaterialIcon icon="search" size={25} /> */}
                        <MdSearch className='flex my-auto' size={23} />
                        </span>
                    </div>
                </div>
                <button onClick={handleClick} className='h-max w-max px-4 py-2 rounded text-center my-auto flex gap-2 text-md bg-white p-2'> 
                    {/* <MaterialIcon icon="tune" size={25} /> */}
                    <MdTune className='flex my-auto' size={23} />
                    Filter
                </button>
             </div>
            <div  className={`flex flex-col ${ filterToggled ? "show" : "hide" } `} >
                        <div className='w-full py-2 text-center mb-4 '>
                            <div className='text-xl py-2 text-gray-800' >Educational Institutions</div>
                            <form className='flex flex-col lg:grid lg:grid-cols-2 text-gray-700'>
                                <div className=" flex items-center space-x-2 py-2">
                                    <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                                    <label className="text-sm font-semibold ">S S  Girls School – Sirsa ( Haryana )</label>
                                </div>
                                <div className="flex items-center space-x-2 py-2">
                                    <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                                    <label className="text-sm font-semibold">S S  Girls College – Sirsa ( Haryana )</label>
                                </div>
                                <div className="flex items-center space-x-2 py-2">
                                    <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                                    <label className="text-sm font-semibold ">S S  Boys School – Sirsa ( Haryana )</label>
                                </div>
                                <div className="flex items-center space-x-2 py-2">
                                    <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                                    <label className="text-sm font-semibold ">S S  Boys College – Sirsa ( Haryana )</label>
                                </div>                 
                                <div className="flex items-center space-x-2 py-2">
                                    <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                                    <label className="text-sm font-semibold">S S  College of Education – Sirsa ( Haryana )</label>
                                </div>
                                <div className="flex items-center space-x-2 py-2">
                                    <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                                    <label className="text-sm font-semibold ">MSG Glorious International School – Sirsa ( Haryana )</label>
                                </div>
                                <div className="flex items-center space-x-2 py-2">
                                    <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                                    <label className="text-sm font-semibold ">S S  Noble School – Kotda ( Rajasthan )</label>
                                </div>                  
                                <div className="flex items-center space-x-2 py-2">
                                    <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                                    <label className="text-sm font-semibold">S S  Girls School – Tara Nagar( Rajasthan )</label>
                                </div>
                                <div className="flex items-center space-x-2 py-2">
                                    <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                                    <label className="text-sm font-semibold ">S S  Girls School – Budhni ( Madhya Pradesh )</label>
                                </div> 
                                <div className="flex items-center space-x-2 py-2">
                                    <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                                    <label className="text-sm font-semibold">S S  Girls School – Sri Gurusar Modia ( Rajasthan )</label>
                                </div>
                                <div className="flex items-center space-x-2 py-2">
                                    <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                                    <label className="text-sm font-semibold">S S  Girls College – Sri Gurusar Modia ( Rajasthan )</label>
                                </div>
                                <div className="flex items-center space-x-2 py-2">
                                    <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                                    <label className="text-sm font-semibold ">S S  Boys School – Sri Gurusar Modia ( Rajasthan )</label>
                                </div>
                            </form>
                        </div>
                        <div className='w-full text-center mb-4 flex-1 text-gray-700'>
                            <div className='text-xl text-gray-800' >Gender</div>
                            <div className=" flex items-center space-x-2 py-2 ">
                                <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                                <label className="text-sm font-semibold ">Male</label>
                            </div>
                            <div className="flex items-center space-x-2 py-2">
                                <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                                <label className="text-sm font-semibold ">Female</label>
                            </div>                      
                            <div className="flex items-center space-x-2 py-2">
                                <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                                <label className="text-sm font-semibold ">Other</label>
                            </div>                      
                        </div>
             </div>
          </div>
        </div>
        <table className="content-table flex flex-col w-full bg-gray-700 border border-black border-solid text-white text-left text-bold border-collapse my-6 overflow-hidden ">
            <thead className='flex w-full ' >
                <tr className='w-full flex justify-between ' >
                    <th className=''>Sr no.</th>
                    <th>Name</th>
                    <th>Qualification</th>
                    <th>Age</th>
                    <th className='flex justify-evenly'>Action</th>
                </tr>
            </thead>
            <tbody className='flex flex-col text-gray-800 text-semibold' >  
                <tr className='flex justify-between ' >
                    <td>1</td>
                    <td>Anmol</td>
                    <td>Matric</td>
                    <td>17</td>
                    <td className='flex justify-evenly'>
                        <MdOutlineVisibility size={25} />
                        <MdDelete size={25} />
                    </td>
                </tr>
                <tr className='flex justify-between' >
                    <td>2</td>
                    <td>Nisha</td>
                    <td>Senior Secondary</td>
                    <td>19</td>
                    <td className='flex justify-evenly'>
                        <MdOutlineVisibility size={25} />
                        <MdDelete size={25} />
                    </td>
                </tr>
                <tr className='flex justify-between' >
                    <td>3</td>               
                    <td>Sandeep</td>
                    <td>Graduate</td>
                    <td>22</td>
                    <td className='flex justify-evenly'>
                        <MdOutlineVisibility size={25} />
                        <MdDelete size={25} />
                    </td>
                </tr>
                <tr className='flex justify-between' >
                    <td>4</td>
                    <td>Anmol</td>
                    <td>Matric</td>
                    <td>17</td>
                    <td className='flex '>
                        <MdOutlineVisibility size={25} />
                        <MdDelete size={25} />
                    </td>
                </tr>
                <tr className='flex justify-between' >
                    <td>5</td>
                    <td>Nisha</td>
                    <td>Senior Secondary</td>
                    <td>19</td>
                    <td className='flex justify-evenly'>
                        <MdOutlineVisibility size={25} />
                        <MdDelete size={25} />
                    </td>
                </tr>
                <tr className='flex justify-between' >
                    <td>6</td>               
                    <td>Sandeep</td>
                    <td>Graduate</td>
                    <td>22</td>
                    <td className='flex justify-evenly'>
                        <MdOutlineVisibility size={25} />
                        <MdDelete size={25} />
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  </div>
</>
  )
}


// marker:gray-700

export default Admin;