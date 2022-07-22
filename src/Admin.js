import React from 'react'
import './Admin.css';

const Admin = () => {

  // const filterIcon = document.querySelector(".filter-icon");
  // const filterInstitution = document.querySelector(".filter-institution");

  // filterInstitution.style.display="none";

  // filterIcon.addEventListener("click", function(){
  //     filterInstitution.style.display="flex";
  // });


  return (
    <>
    <div className="flex items-center min-h-screen p-8 bg-gray-100 lg:justify-center">
      <div className="min-w-11/12 min-h-11/12 flex flex-col flex-1 overflow-hidden bg-white rounded-md shadow-lg max md:flex-1 2xl:max-w-screen-sm 2xl:max-h-screen-sm">
        <div className="p-5 bg-white md:flex-1">
          <h3 className="my-4 text-2xl font-semibold text-gray-700">Admin Dashboard</h3>
          <div className='flex flex-col bg-gray-100 justify-evenly sm:flex-row'>
            <div className=' p-4 '>
                <span className='flex text-center'>
                    <img className='bg-white p-4 rounded-3xl' src="./Asset/Icon/group.svg" alt="" />
                    <div className='p-4 flex flex-col text-left justify-center'>
                      <div className='text-lg no-student'>32</div>
                      <div className='text-gray-600 '>Students</div>
                    </div>
                </span>
            </div>
          </div>
          <div className='flex flex-col bg-gray-100 my-4 justify-evenly sm:flex-row'>
            <div className='w-full p-4 '>
              <div className='mb-2 flex gap-2'> 
                <img  className='cursor-pointer filter-icon' src="./Asset/Icon/filter.svg" height={25} width={25} alt="" />Filter
               </div>
               <div className='grid grid-cols-1 justify-between xl:grid-cols-2'>
                <div className='filter-institution w-fit text-center justify-center mb-4'>
                    <div className='text-lg' >Educational Institutions</div>
                    <div className="flex items-center space-x-2 py-2">
                        <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                        <label className="text-sm font-semibold text-gray-500">Shah Satnam Ji Girls School – Sirsa ( Haryana )</label>
                    </div>
                    <div className="flex items-center space-x-2 py-2">
                        <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                        <label className="text-sm font-semibold text-gray-500">Shah Satnam Ji Girls College – Sirsa ( Haryana )</label>
                    </div>
                    <div className="flex items-center space-x-2 py-2">
                        <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                        <label className="text-sm font-semibold text-gray-500">Shah Satnam Ji Boys School – Sirsa ( Haryana )</label>
                    </div>
                    <div className="flex items-center space-x-2 py-2">
                        <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                        <label className="text-sm font-semibold text-gray-500">Shah Satnam Ji Boys College – Sirsa ( Haryana )</label>
                    </div>                 
                    <div className="flex items-center space-x-2 py-2">
                        <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                        <label className="text-sm font-semibold text-gray-500">Shah Satnam Ji College of Education – Sirsa ( Haryana )</label>
                    </div>
                    <div className="flex items-center space-x-2 py-2">
                        <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                        <label className="text-sm font-semibold text-gray-500">Saint MSG Glorious International School – Sirsa ( Haryana )</label>
                    </div>
                    <div className="flex items-center space-x-2 py-2">
                        <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                        <label className="text-sm font-semibold text-gray-500">Shah Satnam Ji Noble School – Kotda, Udaipur ( Rajasthan )</label>
                    </div>                  
                    <div className="flex items-center space-x-2 py-2">
                        <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                        <label className="text-sm font-semibold text-gray-500">Shah Satnam Ji Girls School – Tara Nagar, Churu ( Rajasthan )</label>
                    </div>
                    <div className="flex items-center space-x-2 py-2">
                        <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                        <label className="text-sm font-semibold text-gray-500">Shah Satnam Ji Girls School – Budhni, Sehore ( Madhya Pradesh )</label>
                    </div> 
                    <div className="flex items-center space-x-2 py-2">
                        <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                        <label className="text-sm font-semibold text-gray-500">Shah Satnam Ji Girls School – Sri Gurusar Modia, Sri Ganganagar ( Rajasthan )</label>
                    </div>
                    <div className="flex items-center space-x-2 py-2">
                        <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                        <label className="text-sm font-semibold text-gray-500">Shah Satnam Ji Girls College – Sri Gurusar Modia, Sri Ganganagar ( Rajasthan )</label>
                    </div>
                    <div className="flex items-center space-x-2 py-2">
                        <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                        <label className="text-sm font-semibold text-gray-500">Shah Satnam Ji Boys School – Sri Gurusar Modia, Sri Ganganagar ( Rajasthan )</label>
                    </div>
                </div>
                <div className='filter-institution w-fit text-center justify-center mb-4'>
                    <div className='text-lg' >Educational Institutions</div>
                    <div className="flex items-center space-x-2 py-2">
                        <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                        <label className="text-sm font-semibold text-gray-500">Shah Satnam Ji Girls School – Sirsa ( Haryana )</label>
                    </div>
                    <div className="flex items-center space-x-2 py-2">
                        <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                        <label className="text-sm font-semibold text-gray-500">Shah Satnam Ji Girls College – Sirsa ( Haryana )</label>
                    </div>
                    <div className="flex items-center space-x-2 py-2">
                        <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                        <label className="text-sm font-semibold text-gray-500">Shah Satnam Ji Boys School – Sirsa ( Haryana )</label>
                    </div>
                    <div className="flex items-center space-x-2 py-2">
                        <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                        <label className="text-sm font-semibold text-gray-500">Shah Satnam Ji Boys College – Sirsa ( Haryana )</label>
                    </div>                 
                    <div className="flex items-center space-x-2 py-2">
                        <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                        <label className="text-sm font-semibold text-gray-500">Shah Satnam Ji College of Education – Sirsa ( Haryana )</label>
                    </div>
                    <div className="flex items-center space-x-2 py-2">
                        <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                        <label className="text-sm font-semibold text-gray-500">Saint MSG Glorious International School – Sirsa ( Haryana )</label>
                    </div>
                    <div className="flex items-center space-x-2 py-2">
                        <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                        <label className="text-sm font-semibold text-gray-500">Shah Satnam Ji Noble School – Kotda, Udaipur ( Rajasthan )</label>
                    </div>                  
                    <div className="flex items-center space-x-2 py-2">
                        <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                        <label className="text-sm font-semibold text-gray-500">Shah Satnam Ji Girls School – Tara Nagar, Churu ( Rajasthan )</label>
                    </div>
                    <div className="flex items-center space-x-2 py-2">
                        <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                        <label className="text-sm font-semibold text-gray-500">Shah Satnam Ji Girls School – Budhni, Sehore ( Madhya Pradesh )</label>
                    </div> 
                    <div className="flex items-center space-x-2 py-2">
                        <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                        <label className="text-sm font-semibold text-gray-500">Shah Satnam Ji Girls School – Sri Gurusar Modia, Sri Ganganagar ( Rajasthan )</label>
                    </div>
                    <div className="flex items-center space-x-2 py-2">
                        <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                        <label className="text-sm font-semibold text-gray-500">Shah Satnam Ji Girls College – Sri Gurusar Modia, Sri Ganganagar ( Rajasthan )</label>
                    </div>
                    <div className="flex items-center space-x-2 py-2">
                        <input type="checkbox" className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200" />
                        <label className="text-sm font-semibold text-gray-500">Shah Satnam Ji Boys School – Sri Gurusar Modia, Sri Ganganagar ( Rajasthan )</label>
                    </div>
                </div>
               </div>
            <div className='flex flex-col'>
              <ul className='flex justify-between py-1 ' >
                <li>Full Name</li>
                <li className='hidden sm:block'>School/College/Institute</li>
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
          {/* <form action="#" className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-1">
              <label htmlFor="email" className="text-sm font-semibold text-gray-500">Email address</label>
              <input
                type="email"
                name="login-email"
                autoFocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-semibold text-gray-500">Password</label>
                  <a href="#root"   className="text-sm text-blue-600 hover:underline focus:text-blue-800">Forgot Password?</a>
              </div>
              <input
                type="password"
                autoComplete='on'
                name="login-password"
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 transition duration-300 rounded focus:ring-2 accent-blue-500 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
              />
              <label htmlFor="remember" className="text-sm font-semibold text-gray-500">Remember me</label>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
              >
                Log in
              </button>
            </div>
            <div className="flex flex-col space-y-5">
              <span className="flex items-center justify-center space-x-2">
                <span className="h-px bg-gray-400 w-14"></span>
                <span className="font-normal text-gray-500">or login with</span>
                <span className="h-px bg-gray-400 w-14"></span>
              </span>
              <div className="flex flex-col space-y-4">
                  <a href="#root"
                   
                  className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none"
                >
                  <span className="text-sm font-medium text-blue-500 group-hover:text-white">Google</span>
                </a>
              </div>
            </div>
          </form> */}
        </div>
      </div>
    </div>
    </>
  )
}

export default Admin
