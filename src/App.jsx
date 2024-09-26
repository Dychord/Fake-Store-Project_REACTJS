import React from 'react';

function App() {
  return (
    <>
      <div>
        <nav className='w-[15%] h-screen flex flex-col items-center gap-5 py-10'>
          <a href='/create' className='border-2 border-sky-200 text-sky-300 px-3 py-1 mb-3 rounded-md text-lg'>
            Add New Product
          </a>
          <hr className='w-[80%]' />
          <div className='flex flex-col items-start w-full'>
            <ul className='w-full px-10'>
              <li className='text-2xl mb-5'>Category Filter</li>
              <li className='flex items-center gap-2 my-3'>
                <span className='inline-block h-4 w-4 bg-sky-200 rounded-full'></span>
                <span className='text-md'>Cat 1</span>
              </li>
              <li className='flex items-center gap-2 my-3'>
                <span className='inline-block h-4 w-4 bg-red-200 rounded-full'></span>
                <span className='text-md'>Cat 2</span>
              </li>
              <li className='flex items-center gap-2 my-3'>
                <span className='inline-block h-4 w-4 bg-green-200 rounded-full'></span>
                <span className='text-md'>Cat 3</span>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default App;
