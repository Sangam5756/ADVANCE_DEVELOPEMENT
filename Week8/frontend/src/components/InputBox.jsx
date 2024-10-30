import React from 'react'


const InputBox = ({name="",label,onChange,placeholder, type="text"}) => {
  return (
    <div>
        <div className='text-sm font-medium text-left py-2'>
            {label}
        </div>
        <input type={type} name={name} onChange={onChange} placeholder={placeholder} className='w-full px-2 py-1 border rounded border-slate-200' />

    </div>
  )
}

export default InputBox