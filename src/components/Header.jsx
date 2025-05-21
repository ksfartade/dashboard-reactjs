import React from 'react'

const Header = ({category, title}) => {
  return (
    <div>
      <p className='text-sm text-gray-400'>{category}</p>
      <p className='text-xl font-extrabold'>{title}</p>
  </div>
  )
}

export default Header