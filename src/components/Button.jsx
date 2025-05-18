import React from 'react'

const Button = ({text, color, bgColor, hoverColor, px, py, radius, size}) => {
  console.log("Button text: ", text);
  return (
    <button 
      style={{
        backgroundColor: bgColor,
        color: color,
        paddingLeft: px,  // Tailwind's spacing unit (1 = 0.25rem)
        paddingRight: px,
        paddingTop: py,
        paddingBottom: py,
        borderRadius: radius,
        fontSize: size
      }}
      className="hover:bg-green-900 shadow-md"
    >
      {text}
    </button>
  )
}

export default Button