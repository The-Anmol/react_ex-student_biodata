import React, { useState  } from 'react'
import "./Form.css";

    
const Edit = () => {

  let [ isDisabled , setIsDisabled ] = useState(true);
  function disableInput(){
    setIsDisabled(!isDisabled);
    console.log(isDisabled);
  }
  function enableInput(){
    setIsDisabled(!isDisabled);
    console.log(isDisabled);
    console.log("Edit Clicked");
  }
  
return (
    <>
        <div className="flex items-center min-h-screen p-8 bg-gray-100 lg:justify-center" id='formBase' onLoad={disableInput}>
      <div className="flex flex-col flex-1 overflow-hidden bg-white rounded-md shadow-lg max  md:flex-1 lg:max-w-screen-lg" >
        {/* Ex-student Biodata Collection */}
        <div className="p-5 bg-white md:flex-1">
              <h1 className=" flex justify-between my-4 text-2xl font-semibold text-gray-700">Ex-student Biodata Collection 
                  <button type="submit" onClick={enableInput} className="w-fit flex justify-between px-4 py-2 m-0 text-lg font-semibold text-white transition-colors duration-300 bg-gray-700 rounded-md shadow hover:bg-slate-800 focus:outline-none focus:ring-blue-200 focus:ring-4">
                  <img className='self-center mr-1' src="./Asset/Icon/edit-white.svg" height={23} width={23} alt="" />Edit
                  </button>
              </h1>
          <form action="#" className="flex flex-col space-y-5">
            {/* Name */}
            <div className="flex flex-col space-y-1">
              <label  htmlFor="name" className="text-sm font-semibold text-gray-500 readOnly required">Name</label>
              <input disabled={`${ isDisabled ? "true" : "false" } `} type="text" id="name" className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
            </div>
            {/* Age */}
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label htmlFor="age" className="text-sm font-semibold text-gray-500 required">Age</label>
              </div>
              <input disabled={`${ isDisabled ? "true" : "false" } `} type="number"   id="age" className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* Gender And MArtial Status */}
            <span className='flex justify-around'>
            {/* Gender */}
            <div className="flex flex-col space-y-1">
              <label htmlFor="name" className="text-sm font-semibold text-gray-500 required">Gender</label>
            {/* DropDown Begins */}
              <div className="dropdown inline-block relative w-fit ">
                <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                    <span className="mr-1">Choose</span>
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                </button>
                <ul className="dropdown-menu  absolute hidden text-gray-700 pt-1">
                    <li className="">
                          <button  className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Male</button></li>
                    <li className="">
                          <button   className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Female</button></li>
                    <li className="">
                          <button   className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Other</button></li>
                </ul>
            </div>
            {/* DropDown Ends */}
            </div>  
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-semibold text-gray-500 required">Maritial Status</label>
              </div>
            <div className="dropdown inline-block relative w-fit ">
                <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                    <span className="mr-1">Choose</span>
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                </button>
                 <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                    <li className="">
                          <button className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Married</button></li>
                    <li className="">
                          <button className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Unmarried</button></li>
                </ul> 
            </div>
            </div>
            </span> 
            {/* Phone Number Calling */}
            <div className="flex flex-col space-y-1">
              <label htmlFor="phone-number" className="text-sm font-semibold text-gray-500 required">Phone Number ( Calling )</label>
              <input disabled={`${ isDisabled ? "true" : "false" } `}
                type="number"
                id="phone-call"
                 
                required
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* Phone Number Whatsapp */}
            <div className="flex flex-col space-y-1">
              <label htmlFor="phone-number" className="text-sm font-semibold text-gray-500">Phone Number ( Whatsapp )</label>
              <input disabled={`${ isDisabled ? "true" : "false" } `}
                type="number"
                id="phone-whatsapp"
                 
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* Email*/}
            <div className="flex flex-col space-y-1">
              <label htmlFor="email" className="text-sm font-semibold text-gray-500">Email address</label>
              <input disabled={`${ isDisabled ? "true" : "false" } `}
                type="email"
                id="email"
                 
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* Address */}
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label htmlFor="address" className="text-sm font-semibold text-gray-500 required">Address</label>
              </div>
              <input disabled={`${ isDisabled ? "true" : "false" } `}
                type="text"
                id="address"
                 
                required
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* City */}
            <div className="flex flex-col space-y-1">
              <label htmlFor="city" className="text-sm font-semibold text-gray-500 required">City</label>
              <input disabled={`${ isDisabled ? "true" : "false" } `}
                type="text"
                id="city"
                required
                 
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* State */}
            <div className="flex flex-col space-y-1">
              <label htmlFor="state" className="text-sm font-semibold text-gray-500 required">City</label>
              <input disabled={`${ isDisabled ? "true" : "false" } `}
                type="text"
                id="state"
                 
                required
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* Country */}
            <div className="flex flex-col space-y-1">
              <label htmlFor="country" className="text-sm font-semibold text-gray-500 required">Country</label>
              <input disabled={`${ isDisabled ? "true" : "false" } `}
                type="text"
                id="country"
                 
                required
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
          </form>
        </div>
        {/* Ex-student Details */}
        <div className="p-5 bg-white md:flex-1">
          <h1 className="my-4 text-2xl font-semibold text-gray-700">Ex-student Details</h1>
          <form action="#" className="flex flex-col space-y-5">
            {/* Name of the institute */}
            <div className="flex flex-col space-y-1">
              <label htmlFor="name" className="text-sm font-semibold text-gray-500 required">Name of the institute</label>
              <input disabled={`${ isDisabled ? "true" : "false" } `}
                type="text"
                id="institute-name"
                required
                 
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* Course you were enrolled in */}
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label htmlFor="course" className="text-sm font-semibold text-gray-500 required">Course you were enrolled in</label>
              </div>
              <input disabled={`${ isDisabled ? "true" : "false" } `}
                type="text"
                id="course-enrolled"
                 
                required
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* Duration during which you studied at a institute (specify the number of years, or months.) */}
            <div className="flex flex-col space-y-1">
              <label htmlFor="course-duration" className="text-sm font-semibold text-gray-500 required">Duration during which you studied at a institute (specify the number of years, or months.)</label>
              <input disabled={`${ isDisabled ? "true" : "false" } `}
                type="text"
                id="course-duration"
                 
                required
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* Admission number (at the institute, if you don't remember, leave blank.) */}
            <div className="flex flex-col space-y-1">
              <label htmlFor="admission-number" className="text-sm font-semibold text-gray-500">Admission number (at the institute, if you don't remember, leave blank.)</label>
              <input disabled={`${ isDisabled ? "true" : "false" } `}
                type="number"
                id="admission-number"
                 
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
          </form>
        </div>
        {/* CURRENT POSITION DETAILS */}
        <div className="p-5 bg-white md:flex-1">
          <h1 className="my-4 text-2xl font-semibold text-gray-700">Current Position Details</h1>
          <form action="#" className="flex flex-col space-y-5">
            {/* What most accurately describes your current position? */}
            <div className="flex flex-col space-y-1">
              <label htmlFor="name" className="text-sm font-semibold text-gray-500 required">What most accurately describes your current position?</label>
              <div className="flex flex-col gap-2 ">
                <span>
                    <input disabled={`${ isDisabled ? "true" : "false" } `} type="radio" id="position-job" required   className="w-fit mr-2 px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-blue-200" />
                    <label className="text-sm font-semibold text-gray-500 ">Job</label>
                </span>
                <span>
                    <input disabled={`${ isDisabled ? "true" : "false" } `} type="radio" id="position-student" required   className="w-fit mr-2 px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-blue-200" />
                    <label className="text-sm font-semibold text-gray-500 ">Student</label>
                </span>
                <span>
                    <input disabled={`${ isDisabled ? "true" : "false" } `} type="radio" id="position-bussiness" required   className="w-fit mr-2 px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-blue-200" />
                    <label className="text-sm font-semibold text-gray-500 ">Businness</label>
                </span>
                <span>
                    <input disabled={`${ isDisabled ? "true" : "false" } `} type="radio" id="position-unemployed" required   className="w-fit mr-2 px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-blue-200" />
                    <label className="text-sm font-semibold text-gray-500 ">Unemployed</label>
                </span>
                <span className='flex gap-20 align-center'>
                  <span >
                      <input disabled={`${ isDisabled ? "true" : "false" } `} type="radio" id="position-other" required   className="w-fit mr-2 px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none  focus:ring-blue-200" />
                      <label className="text-sm font-semibold text-gray-500 ">Other</label>
                  </span>
                  <input disabled={`${ isDisabled ? "true" : "false" } `} type="number" id="position-other-value"   required className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
                </span>
              </div>
            </div>
            {/* JOb Type AND Job Sector */}
            <span className='flex space-y-2 justify-around'>
            {/* What is your Job Type? */}
            <div className="flex flex-col space-y-1">
              <label htmlFor="name" className="text-sm font-semibold text-gray-500 required">What is your Job Type?</label>
            {/* DropDown Begins */}
              <div className="dropdown inline-block relative w-fit ">
                <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                    <span className="mr-1">Choose</span>
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                </button>
                <ul className="w-max  dropdown-menu absolute hidden text-gray-700 pt-1">
                    <li className="">
                          <div  className=" rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Private</div></li>
                    <li className="">
                          <div   className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Goverment</div></li>
                    <li className="">
                          <div   className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Freelance</div></li>
                    <li className="">
                          <div   className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Entrepreneur (you own a bussiness ) </div></li>
                </ul>
            </div>
            {/* DropDown Ends */}
            </div>
            {/* What is your Job Sector? */}
            <div className="flex flex-col space-y-1">
              <label htmlFor="name" className="text-sm font-semibold text-gray-500 required">What is your Job Sector?</label>
            {/* DropDown Begins */}
              <div className="dropdown inline-block relative w-fit ">
                <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                    <span className="mr-1">Choose</span>
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                </button>
                <ul className="w-max dropdown-menu absolute hidden text-gray-700 pt-1">
                    <li className="">
                          <div   className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Manufacturing</div></li>
                    <li className="">
                          <div   className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Sports</div></li>
                    <li className="">
                          <div   className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Technology</div></li>
                    <li className="">
                          <div   className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Health Care</div></li>
                    <li className="">
                          <div   className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Finance</div></li>
                    <li className="">
                          <div   className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Stock Market</div></li>
                    <li className="">
                          <div   className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Economics</div></li>
                    <li className="">
                          <div   className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Computer and IT</div></li>
                    <li className="">
                          <div   className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Construction</div></li>
                    <li className="">
                          <div   className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Energy</div></li>
                    <li className="">
                          <div   className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" > Telecommunications</div></li>
                    <li className="">
                          <div   className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Agriculture</div></li>
                    <li className="">
                          <div   className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Manufacturing</div></li>
                    <li className="">
                          <div   className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Retail</div></li>
                    <li className="">
                          <div   className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Communication</div></li>
                    <li className="">
                          <div   className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Hospitality</div></li>
                    <li className="">
                          <div   className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Financial Services</div></li>
                    <li className="">
                          <div   className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Real Estate</div></li>
                    <li className="">
                          <div   className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Transport</div></li>
                    <li className="">
                          <div   className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Mining</div></li>
                    <li className="">
                          <div   className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Food</div></li>
                    <li className="">
                          <div   className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >E-commerce</div></li>
                    <li className="">
                          <div   className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Medical Devices</div></li>
                    <li className="">
                          <div   className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Aviation</div></li>
                    <li className="">
                          <div   className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Engeneering</div></li>
                    <li className="">
                          <div   className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Pharmaceutical</div></li>
                    <li className="">
                          <div   className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Research</div></li>
                    <li className="">
                          <div   className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Health</div></li>
                    <li className="">
                          <div   className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Logistics</div></li>
                    <li className="">
                          <div   className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Insurance</div></li>
                    <li className="">
                          <div   className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Defence/Police</div></li>
                    <li className="">
                          <div   className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Judiciary</div></li>
                    <li className="">
                          <div   className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Other</div></li>
                </ul>
            </div>
            {/* DropDown Ends */}
            </div>
            </span>
            {/* If Others, Please specify (Please specifically mention if you're working in a government organization or anything not in the list) */}
            <div className="flex flex-col space-y-1">
              <label htmlFor="phone-number" className="text-sm font-semibold text-gray-500 required">If Others, Please specify (Please specifically mention if you're working in a government organization or anything not in the list)</label>
              <input disabled={`${ isDisabled ? "true" : "false" } `}
                type="text"
                id="other-job-sector"
                 
                required
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* Job Domain */}
            <div className="flex flex-col space-y-1">
              <label htmlFor="name" className="text-sm font-semibold text-gray-500 required">What is your Job Domain?</label>
            {/* DropDown Begins */}
              <div className="dropdown inline-block relative w-fit ">
                <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                    <span className="mr-1">Choose</span>
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                </button>
                <ul className="w-max dropdown-menu absolute hidden text-gray-700 pt-1">
                    <li className="w-max">
                          <div className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >HR</div></li>
                    <li className="">
                          <div className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Manufacturing</div></li>
                    <li className="">
                          <div className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Accounting, Finance</div></li>
                    <li className="">
                          <div className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Legal</div></li>
                    <li className="">
                          <div className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Supply Chain and Procurement</div></li>
                    <li className="">
                          <div className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Bussiness Process</div></li>
                    <li className="">
                          <div className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >IT</div></li>
                    <li className="">
                          <div className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Engineering</div></li>
                    <li className="">
                          <div className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Medical</div></li>
                    <li className="">
                          <div className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Administration</div></li>
                    <li className="">
                          <div className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Others</div></li>
                </ul>
            </div>
            {/* DropDown Ends */}
            </div>
            {/* If Others, Please specify here*/}
            <div className="flex flex-col space-y-1">
              <label htmlFor="other-job-domain-label" className="text-sm font-semibold text-gray-500">If Others, Please specify here</label>
              <input disabled={`${ isDisabled ? "true" : "false" } `}
                type="text"
                name="other-job-domain-input"
                 
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* Designation */}
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label htmlFor="designation" className="text-sm font-semibold text-gray-500 required">Designation</label>
              </div>
              <input disabled={`${ isDisabled ? "true" : "false" } `}
                type="text"
                id="designation"
                 
                required
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* Department */}
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label htmlFor="department" className="text-sm font-semibold text-gray-500 required">Department</label>
              </div>
              <input disabled={`${ isDisabled ? "true" : "false" } `}
                type="text"
                id="department"
                 
                required
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* Company/Firm/Organization */}
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label htmlFor="company" className="text-sm font-semibold text-gray-500 required">Company/Firm/Organization</label>
              </div>
              <input disabled={`${ isDisabled ? "true" : "false" } `}
                type="text"
                id="company"
                 
                required
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* City where you're working */}
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label htmlFor="working-city" className="text-sm font-semibold text-gray-500 required">City where you're working</label>
              </div>
              <input disabled={`${ isDisabled ? "true" : "false" } `}
                type="text"
                id="working-city"
                 
                required
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* State where you're working */}
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label htmlFor="working-state" className="text-sm font-semibold text-gray-500 required">State where you're working</label>
              </div>
              <input disabled={`${ isDisabled ? "true" : "false" } `}
                type="text"
                id="working-state"
                 
                required
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* Country where you're working */}
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label htmlFor="working-country" className="text-sm font-semibold text-gray-500 required">Country where you're working</label>
              </div>
              <input disabled={`${ isDisabled ? "true" : "false" } `}
                type="text"
                id="working-country"
                 
                required
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* Experience (in Years and months) */}
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label htmlFor="working-experience" className="text-sm font-semibold text-gray-500 required">Experience (in Years and months)</label>
              </div>
              <input disabled={`${ isDisabled ? "true" : "false" } `}
                type="text"
                id="working-experience"
                 
                required
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            
          </form>
        </div>
        {/* QUALIFICATION DETAILS */}
        <div className="p-5 bg-white md:flex-1">
          <h1 className="my-4 text-2xl font-semibold text-gray-700">Qualification Details</h1>
          <form action="#" className="flex flex-col space-y-5">
            {/* Qualifications Completed (Degrees, Diplomas etc.) */}
            <div className="flex flex-col space-y-1">
              <label htmlFor="  " className="text-sm font-semibold text-gray-500 required">Qualifications Completed (Degrees, Diplomas etc.)</label>
              <input disabled={`${ isDisabled ? "true" : "false" } `}
                type="text"
                id="qualifications-completed"
                required
                 
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* Institute where you completed your most recent qualification from */}
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label htmlFor="qualifications-completed-institute" className="text-sm font-semibold text-gray-500 required">Institute where you completed your most recent qualification from</label>
              </div>
              <input disabled={`${ isDisabled ? "true" : "false" } `}
                type="text"
                id="qualifications-completed-institute"
                 
                required
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
          </form>
        </div>
        {/* ONGOING STUDY/QUALIFICATION DETAILS */}
        <div className="p-5 bg-white md:flex-1">
          <h1 className="my-4 text-2xl font-semibold text-gray-700">Ongoing Study/Qualifiacation Details</h1>
          <form action="" className="flex flex-col space-y-5">
            {/* Which degree /diploma program are you currently enrolled in? */}
            <div className="flex flex-col space-y-1">
              <label htmlFor="ongoing-course" className="text-sm font-semibold text-gray-500 ">Which degree /diploma program are you currently enrolled in?</label>
              <input disabled={`${ isDisabled ? "true" : "false" } `}
                type="text"
                id="ongoing-course"
                 
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* Area of Study */}
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label htmlFor="area-study" className="text-sm font-semibold text-gray-500 ">Area of Study</label>
              </div>
              <input disabled={`${ isDisabled ? "true" : "false" } `}
                type="text"
                id="area-study"
                 
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* Institution/University currently enrolled at. */}
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label htmlFor="currently-enrolled-institute" className="text-sm font-semibold text-gray-500 ">Institution/University currently enrolled at.</label>
              </div>
              <input disabled={`${ isDisabled ? "true" : "false" } `}
                type="text"
                id="currently-enrolled-institute"
                 
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* Sewa Details*/}
        <div className="p-5 bg-white md:flex-1">
          <h1 className="my-4 text-2xl font-semibold text-gray-700">Sewa Details</h1>
          <form action="#" className="flex flex-col space-y-5">
            
            {/* Your skills, areas of expertise (that you could aid in.) */}
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label htmlFor="skills" className="text-sm font-semibold text-gray-500 required">Your skills, areas of expertise (that you could aid in.)</label>
              </div>
              <input disabled={`${ isDisabled ? "true" : "false" } `}
                type="text"
                id="skills"
                 
                required
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* Are you already a member of any pakki sammitti/sewa group? */}
            <div className="flex flex-col space-y-1">
              <label htmlFor="name" className="text-sm font-semibold text-gray-500 required">Are you already a member of any pakki sammitti/sewa group?</label>
              <div className="flex flex-col gap-2 ">
                <span>
                    <input disabled={`${ isDisabled ? "true" : "false" } `} type="radio" name="sewa-member-yes" required   className="w-fit mr-2 px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-blue-200" />
                    <label className="text-sm font-semibold text-gray-500 ">Yes</label>
                </span>
                <span>
                    <input disabled={`${ isDisabled ? "true" : "false" } `} type="radio" name="sewa-member-no" required   className="w-fit mr-2 px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-blue-200" />
                    <label className="text-sm font-semibold text-gray-500 ">No</label>
                </span>
              </div>
            </div>
            {/* Any other information you want to share! (For eg. Achievements, Research experience, Sports or other awards) */}
            <div className="flex flex-col space-y-1">
              <label htmlFor="another-info" className="text-sm font-semibold text-gray-500 required">Any other information you want to share! (For eg. Achievements, Research experience, Sports or other awards)</label>
              <input disabled={`${ isDisabled ? "true" : "false" } `}
                type="text"
                id="another-info"
                 
                required
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* Link to your CV/Resume/Portfolio etc. (only if you wish to. You can upload on Google Drive and share the link!) */}
            <div className="flex flex-col space-y-1">
              <label htmlFor="resume-link-label" className="text-sm font-semibold text-gray-500">Link to your CV/Resume/Portfolio etc. (only if you wish to. You can upload on Google Drive and share the link!)
</label>
              <input disabled={`${ isDisabled ? "true" : "false" } `}
                type="text"
                name="resume-link-input"
                 
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* Suggestions for Dera/Sewa (that could be implemented) */}
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label htmlFor="suggestion" className="text-sm font-semibold text-gray-500 required">Suggestions for Dera/Sewa (that could be implemented)</label>
              </div>
              <input disabled={`${ isDisabled ? "true" : "false" } `} type="text" id="suggestion" required className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"/>
            </div>
            <span className=''>
            <div className='flex justify-center'>
              <button type="submit" className="flex w-max px-6 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4">
              <img className='self-center mr-2' src="./Asset/Icon/save.svg" height={23} width={23} alt="" />Save
              </button>
            </div>
            </span>
          </form>
        </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}


export default Edit ;
