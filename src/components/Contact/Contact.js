import React from 'react'

const Contact = () => {
  return (
    <>
    <div className='w-full flex justify-center content-center'>
        <button className='text-white p-6 rounded-sm border-2 border-white'>Get In Touch</button>
    </div>
    <button className="border border-gray-300  p-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-20 w-40 text-white"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5 4a2 2 0 012-2h6a2 2 0 012 2v10a2 2 0 01-2 2H7l-2 2V4zm7 0h2a1 1 0 110 2h-2a1 1 0 110-2zM5 4a1 1 0 011-1h6a1 1 0 011 1v10a1 1 0 01-1 1H7a1 1 0 01-1-1V4z"
          clipRule="evenodd"
        />
      </svg>
    </button>

    </>
  )
}

export default Contact