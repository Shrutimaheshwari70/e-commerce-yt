import React from 'react';

function NewsLetterBox() {
    const onSubmitHandler = (event) =>{
        event.preventDefault();
    }
  return (
    <div className=" px-4 sm:px-6 lg:px-20 text-center  max-w-2xl mx-auto">
      <p className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-600 mb-3 text-sm sm:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, natus.
      </p>
      <form className="flex flex-col sm:flex-row justify-center items-center gap-3">
        <input
          type="email"
          placeholder="Enter your email"
          required
          className="w-full sm:w-auto flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
          onSubmit={onSubmitHandler}
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
}

export default NewsLetterBox;
