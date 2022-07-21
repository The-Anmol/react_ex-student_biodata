import React from 'react'
import './Form.css';

const Form = () => {
  return (
    <>
        <div className="flex items-center min-h-screen p-8 bg-gray-100 lg:justify-center">
      <div
        className="flex flex-col flex-1 overflow-hidden bg-white rounded-md shadow-lg max  md:flex-1 lg:max-w-screen-md"
      >
        {/* Ex-student Biodata Collection */}
        <div className="p-5 bg-white md:flex-1">
          <h1 className="my-4 text-2xl font-semibold text-gray-700">Ex-student Biodata Collection </h1>
          <form action="#" className="flex flex-col space-y-5">
            {/* Name */}
            <div className="flex flex-col space-y-1">
              <label for="name" className="text-sm font-semibold text-gray-500 required">Name</label>
              <input
                type="text"
                id="name"
                required
                autofocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* Age */}
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label for="age" className="text-sm font-semibold text-gray-500 required">Age</label>
              </div>
              <input
                type="number"
                id="age"
                autofocus
                required
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* Gender And MArtial Status */}
            <span className='flex justify-around'>
            {/* Gender */}
            <div className="flex flex-col space-y-1">
              <label for="name" className="text-sm font-semibold text-gray-500 required">Gender</label>
            {/* DropDown Begins */}
              <div className="dropdown inline-block relative w-fit ">
                <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                    <span className="mr-1">Choose</span>
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                </button>
                <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                    <li className="">
                          <a href="#root" className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Male</a></li>
                    <li className="">
                          <a href="#root" className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Female</a></li>
                    <li className="">
                          <a href="#root" className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Other</a></li>
                </ul>
            </div>
            {/* DropDown Ends */}
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label for="password" className="text-sm font-semibold text-gray-500 required">Maritial Status</label>
              </div>
              
            <div className="dropdown inline-block relative w-fit ">
                <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                    <span className="mr-1">Choose</span>
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                </button>
                <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                    <li className="">
                          <a href="#root" className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Married</a></li>
                    <li className="">
                          <a href="#root" className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Unmarried</a></li>
                </ul>
            </div>
            </div>
            </span>
            {/* Phone Number Calling */}
            <div className="flex flex-col space-y-1">
              <label for="phone-number" className="text-sm font-semibold text-gray-500 required">Phone Number ( Calling )</label>
              <input
                type="number"
                id="phone-call"
                autofocus
                required
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* Phone Number Whatsapp */}
            <div className="flex flex-col space-y-1">
              <label for="phone-number" className="text-sm font-semibold text-gray-500">Phone Number ( Whatsapp )</label>
              <input
                type="number"
                id="phone-whatsapp"
                autofocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* Email*/}
            <div className="flex flex-col space-y-1">
              <label for="email" className="text-sm font-semibold text-gray-500">Email address</label>
              <input
                type="email"
                id="email"
                autofocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* Address */}
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label for="address" className="text-sm font-semibold text-gray-500 required">Address</label>
              </div>
              <input
                type="text"
                id="address"
                autofocus
                required
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* City */}
            <div className="flex flex-col space-y-1">
              <label for="city" className="text-sm font-semibold text-gray-500 required">City</label>
              <input
                type="text"
                id="city"
                required
                autofocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* State */}
            <div className="flex flex-col space-y-1">
              <label for="city" className="text-sm font-semibold text-gray-500 required">City</label>
              <input
                type="text"
                id="city"
                autofocus
                required
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* Country */}
            <div className="flex flex-col space-y-1">
              <label for="country" className="text-sm font-semibold text-gray-500 required">Country</label>
              <input
                type="text"
                id="country"
                autofocus
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
              <label for="name" className="text-sm font-semibold text-gray-500 required">Name of the institute</label>
              <input
                type="text"
                id="institute-name"
                required
                autofocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* Course you were enrolled in */}
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label for="course" className="text-sm font-semibold text-gray-500 required">Course you were enrolled in</label>
              </div>
              <input
                type="text"
                id="course-enrolled"
                autofocus
                required
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* Duration during which you studied at a institute (specify the number of years, or months.) */}
            <div className="flex flex-col space-y-1">
              <label for="course-duration" className="text-sm font-semibold text-gray-500 required">Duration during which you studied at a institute (specify the number of years, or months.)</label>
              <input
                type="text"
                id="course-duration"
                autofocus
                required
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* Admission number (at the institute, if you don't remember, leave blank.) */}
            <div className="flex flex-col space-y-1">
              <label for="admission-number" className="text-sm font-semibold text-gray-500">Admission number (at the institute, if you don't remember, leave blank.)</label>
              <input
                type="number"
                id="admission-number"
                autofocus
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
              <label for="name" className="text-sm font-semibold text-gray-500 required">What most accurately describes your current position?</label>
              <div className="flex flex-col gap-2 ">
                <span>
                    <input type="radio" id="position-job" required autofocus className="w-fit mr-2 px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-blue-200" />
                    <label className="text-sm font-semibold text-gray-500 ">Job</label>
                </span>
                <span>
                    <input type="radio" id="position-student" required autofocus className="w-fit mr-2 px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-blue-200" />
                    <label className="text-sm font-semibold text-gray-500 ">Student</label>
                </span>
                <span>
                    <input type="radio" id="position-bussiness" required autofocus className="w-fit mr-2 px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-blue-200" />
                    <label className="text-sm font-semibold text-gray-500 ">Businness</label>
                </span>
                <span>
                    <input type="radio" id="position-unemployed" required autofocus className="w-fit mr-2 px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-blue-200" />
                    <label className="text-sm font-semibold text-gray-500 ">Unemployed</label>
                </span>
                <span className='flex gap-20 align-center'>
                  <span >
                      <input type="radio" id="position-other" required autofocus className="w-fit mr-2 px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none  focus:ring-blue-200" />
                      <label className="text-sm font-semibold text-gray-500 ">Other</label>
                  </span>
                  <input type="number" id="position-other-value" autofocus required className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
                </span>
              </div>
            </div>
            {/* JOb Type AND Job Sector */}
            <span className='flex space-y-2 justify-around'>
            {/* What is your Job Type? */}
            <div className="flex flex-col space-y-1">
              <label for="name" className="text-sm font-semibold text-gray-500 required">What is your Job Type?</label>
            {/* DropDown Begins */}
              <div className="dropdown inline-block relative w-fit ">
                <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                    <span className="mr-1">Choose</span>
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                </button>
                <ul className="w-max dropdown-menu absolute hidden text-gray-700 pt-1">
                    <li className="w-max">
                          <a href="#root" className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Private</a></li>
                    <li className="">
                          <a href="#root" className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Goverment</a></li>
                    <li className="">
                          <a href="#root" className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Freelance</a></li>
                    <li className="">
                          <a href="#root" className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Entrepreneur (you own a bussiness ) </a></li>
                </ul>
            </div>
            {/* DropDown Ends */}
            </div>
            {/* What is your Job Sector? */}
            <div className="flex flex-col space-y-1">
              <label for="name" className="text-sm font-semibold text-gray-500 required">What is your Job Sector?</label>
            {/* DropDown Begins */}
              <div className="dropdown inline-block relative w-fit ">
                <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                    <span className="mr-1">Choose</span>
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                </button>
                <ul className="w-max dropdown-menu absolute hidden text-gray-700 pt-1">
                    <li className="">
                          <a href="#root" className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Manufacturing</a></li>
                    <li className="">
                          <a href="#root" className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Sports</a></li>
                    <li className="">
                          <a href="#root" className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Technology</a></li>
                    <li className="">
                          <a href="#root" className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Health Care</a></li>
                    <li className="">
                          <a href="#root" className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Finance</a></li>
                    <li className="">
                          <a href="#root" className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Stock Market</a></li>
                    <li className="">
                          <a href="#root" className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Economics</a></li>
                    <li className="">
                          <a href="#root" className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Computer and IT</a></li>
                    <li className="">
                          <a href="#root" className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Construction</a></li>
                    <li className="">
                          <a href="#root" className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Energy</a></li>
                    <li className="">
                          <a href="#root" className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" > Telecommunications</a></li>
                    <li className="">
                          <a href="#root" className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Agriculture</a></li>
                    <li className="">
                          <a href="#root" className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Manufacturing</a></li>
                    <li className="">
                          <a href="#root" className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Retail</a></li>
                    <li className="">
                          <a href="#root" className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Communication</a></li>
                    <li className="">
                          <a href="#root" className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Hospitality</a></li>
                    <li className="">
                          <a href="#root" className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Financial Services</a></li>
                    <li className="">
                          <a href="#root" className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Real Estate</a></li>
                    <li className="">
                          <a href="#root" className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Transport</a></li>
                    <li className="">
                          <a href="#root" className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Mining</a></li>
                    <li className="">
                          <a href="#root" className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Food</a></li>
                    <li className="">
                          <a href="#root" className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >E-commerce</a></li>
                    <li className="">
                          <a href="#root" className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Medical Devices</a></li>
                    <li className="">
                          <a href="#root" className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Aviation</a></li>
                    <li className="">
                          <a href="#root" className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Engeneering</a></li>
                    <li className="">
                          <a href="#root" className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Pharmaceutical</a></li>
                    <li className="">
                          <a href="#root" className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Research</a></li>
                    <li className="">
                          <a href="#root" className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Health</a></li>
                    <li className="">
                          <a href="#root" className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Logistics</a></li>
                    <li className="">
                          <a href="#root" className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Insurance</a></li>
                    <li className="">
                          <a href="#root" className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Defence/Police</a></li>
                    <li className="">
                          <a href="#root" className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Judiciary</a></li>
                    <li className="">
                          <a href="#root" className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Other</a></li>
                </ul>
            </div>
            {/* DropDown Ends */}
            </div>
            </span>
            {/* If Others, Please specify (Please specifically mention if you're working in a government organization or anything not in the list) */}
            <div className="flex flex-col space-y-1">
              <label for="phone-number" className="text-sm font-semibold text-gray-500 required">If Others, Please specify (Please specifically mention if you're working in a government organization or anything not in the list)</label>
              <input
                type="text"
                id="other-job-sector"
                autofocus
                required
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* Job Domain */}
            <div className="flex flex-col space-y-1">
              <label for="name" className="text-sm font-semibold text-gray-500 required">What is your Job Domain?</label>
            {/* DropDown Begins */}
              <div className="dropdown inline-block relative w-fit ">
                <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                    <span className="mr-1">Choose</span>
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                </button>
                <ul className="w-max dropdown-menu absolute hidden text-gray-700 pt-1">
                    <li className="w-max">
                          <a href="#root" className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >HR</a></li>
                    <li className="">
                          <a href="#root" className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Manufacturing</a></li>
                    <li className="">
                          <a href="#root" className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Accounting, Finance</a></li>
                    <li className="">
                          <a href="#root" className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Legal</a></li>
                    <li className="">
                          <a href="#root" className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Supply Chain and Procurement</a></li>
                    <li className="">
                          <a href="#root" className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Bussiness Process</a></li>
                    <li className="">
                          <a href="#root" className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >IT</a></li>
                    <li className="">
                          <a href="#root" className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Engineering</a></li>
                    <li className="">
                          <a href="#root" className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Medical</a></li>
                    <li className="">
                          <a href="#root" className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Administration</a></li>
                    <li className="">
                          <a href="#root" className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Others</a></li>
                </ul>
            </div>
            {/* DropDown Ends */}
            </div>
            {/* If Others, Please specify here*/}
            <div className="flex flex-col space-y-1">
              <label for="other-job-domain" className="text-sm font-semibold text-gray-500">If Others, Please specify here</label>
              <input
                type="text"
                id="other-job-domain"
                autofocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* Designation */}
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label for="designation" className="text-sm font-semibold text-gray-500 required">Designation</label>
              </div>
              <input
                type="text"
                id="designation"
                autofocus
                required
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* Department */}
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label for="department" className="text-sm font-semibold text-gray-500 required">Department</label>
              </div>
              <input
                type="text"
                id="department"
                autofocus
                required
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* Company/Firm/Organization */}
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label for="company" className="text-sm font-semibold text-gray-500 required">Company/Firm/Organization</label>
              </div>
              <input
                type="text"
                id="company"
                autofocus
                required
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* City where you're working */}
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label for="working-city" className="text-sm font-semibold text-gray-500 required">City where you're working</label>
              </div>
              <input
                type="text"
                id="working-city"
                autofocus
                required
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* State where you're working */}
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label for="working-state" className="text-sm font-semibold text-gray-500 required">State where you're working</label>
              </div>
              <input
                type="text"
                id="working-state"
                autofocus
                required
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* Country where you're working */}
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label for="working-country" className="text-sm font-semibold text-gray-500 required">Country where you're working</label>
              </div>
              <input
                type="text"
                id="working-country"
                autofocus
                required
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* Experience (in Years and months) */}
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label for="working-experience" className="text-sm font-semibold text-gray-500 required">Experience (in Years and months)</label>
              </div>
              <input
                type="text"
                id="working-experience"
                autofocus
                required
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            
          </form>
        </div>
        {/* QUALIFICATION DETAILS */}
        <div className="p-5 bg-white md:flex-1">
          <h1 className="my-4 text-2xl font-semibold text-gray-700">Qualifiacation Details</h1>
          <form action="#" className="flex flex-col space-y-5">
            {/* Qualifications Completed (Degrees, Diplomas etc.) */}
            <div className="flex flex-col space-y-1">
              <label for="  " className="text-sm font-semibold text-gray-500 required">Qualifications Completed (Degrees, Diplomas etc.)</label>
              <input
                type="text"
                id="qualifications-completed"
                required
                autofocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* Institute where you completed your most recent qualification from */}
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label for="qualifications-completed-institute" className="text-sm font-semibold text-gray-500 required">Institute where you completed your most recent qualification from</label>
              </div>
              <input
                type="text"
                id="qualifications-completed-institute"
                autofocus
                required
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
          </form>
        </div>
        {/* ONGOING STUDY/QUALIFICATION DETAILS */}
        <div className="p-5 bg-white md:flex-1">
          <h1 className="my-4 text-2xl font-semibold text-gray-700">Ongoing Study/Qualifiacation Details</h1>
          <form action="#" className="flex flex-col space-y-5">
            {/* Which degree /diploma program are you currently enrolled in? */}
            <div className="flex flex-col space-y-1">
              <label for="ongoing-course" className="text-sm font-semibold text-gray-500 ">Which degree /diploma program are you currently enrolled in?</label>
              <input
                type="text"
                id="ongoing-course"
                autofocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* Area of Study */}
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label for="area-study" className="text-sm font-semibold text-gray-500 ">Area of Study</label>
              </div>
              <input
                type="text"
                id="area-study"
                autofocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* Institution/University currently enrolled at. */}
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label for="currently-enrolled-institute" className="text-sm font-semibold text-gray-500 ">Institution/University currently enrolled at.</label>
              </div>
              <input
                type="text"
                id="currently-enrolled-institute"
                autofocus
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
                <label for="skills" className="text-sm font-semibold text-gray-500 required">Your skills, areas of expertise (that you could aid in.)</label>
              </div>
              <input
                type="text"
                id="skills"
                autofocus
                required
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* Are you already a member of any pakki sammitti/sewa group? */}
            <div className="flex flex-col space-y-1">
              <label for="name" className="text-sm font-semibold text-gray-500 required">Are you already a member of any pakki sammitti/sewa group?</label>
              <div className="flex flex-col gap-2 ">
                <span>
                    <input type="radio" id="sewa-member-yes" required autofocus className="w-fit mr-2 px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-blue-200" />
                    <label className="text-sm font-semibold text-gray-500 ">Yes</label>
                </span>
                <span>
                    <input type="radio" id="sewa-member-yes" required autofocus className="w-fit mr-2 px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-blue-200" />
                    <label className="text-sm font-semibold text-gray-500 ">No</label>
                </span>
              </div>
            </div>
            {/* Any other information you want to share! (For eg. Achievements, Research experience, Sports or other awards) */}
            <div className="flex flex-col space-y-1">
              <label for="another-info" className="text-sm font-semibold text-gray-500 required">Any other information you want to share! (For eg. Achievements, Research experience, Sports or other awards)</label>
              <input
                type="text"
                id="another-info"
                autofocus
                required
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* Link to your CV/Resume/Portfolio etc. (only if you wish to. You can upload on Google Drive and share the link!) */}
            <div className="flex flex-col space-y-1">
              <label for="other-job-domain" className="text-sm font-semibold text-gray-500">Link to your CV/Resume/Portfolio etc. (only if you wish to. You can upload on Google Drive and share the link!)
</label>
              <input
                type="text"
                id="other-job-domain"
                autofocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            {/* Suggestions for Dera/Sewa (that could be implemented) */}
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label for="suggestion" className="text-sm font-semibold text-gray-500 required">Suggestions for Dera/Sewa (that could be implemented)</label>
              </div>
              <input
                type="text"
                id="suggestion"
                autofocus
                required
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
          </form>
        </div>
          </form>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Form;
