import React from 'react';

const Contact = () => {
  return (
    <div className='relative flex flex-row gap-7'>
      <div className="flex flex-col lg:flex-row lg:w-[70%]">
        <div className="flex flex-col gap-2 lg:w-full">
          <label htmlFor="firstname" className="label-style">
            First Name
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Enter first name"
            className="form-style"
          />
          <div className="flex flex-col gap-2">
            <label htmlFor="lastname" className="label-style">
              Last Name
            </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Enter last name"
              className="form-style"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="label-style">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
              className="form-style"
            />
            <span className="-mt-1 text-[12px] text-yellow-500">
              Please enter your Email address.
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phonenumber" className="label-style">
              Phone Number
            </label>
            <div className="flex gap-5">
              <div className="flex w-[81px] flex-col gap-2">
                <select
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="Enter first name"
                  className="form-style"
                >
                </select>
              </div>
              <div className="flex w-[calc(100%-90px)] flex-col gap-2">
                <input
                  type="number"
                  name="phonenumber"
                  id="phonenumber"
                  placeholder="12345 67890"
                  className="form-style"
                />
              </div>
            </div>
            <span className="-mt-1 text-[12px] text-yellow-100">
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="label-style">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="7"
              placeholder="Enter your message here"
              className="form-style"
            />
            {(
              <span className="-mt-1 text-[12px] text-yellow-400">
                Please enter your Message.
              </span>
            )}
          </div>
          <button
            type="submit"
            className={`rounded-md bg-yellow-500 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
           ${
             "transition-all duration-200 hover:scale-95 hover:shadow-none"
           }  disabled:bg-richblack-500 sm:text-[16px] `}
          >
            Send Message
          </button>
        </div>
      </div>
      <img src="./contact-us-banner.jpg" alt="QR_Image" className='w-[30%] mx-auto'/>
    </div>
  );
}

export default Contact;
