import React from 'react'

const InputForm = () => {
  return (
    <>
        <div>
        <form>
        <label class="block">
        <span class="block text-sm font-medium text-white">Username</span>
        <input type="text" placeholder='name'  class="mt-1 w-56 block  px-3 py-2 bg-transparent text-white  rounded-md text-sm  placeholder-slate-400
       focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 
    "/>
  </label>
 
</form>
        </div>
    </>
  )
}

export default InputForm