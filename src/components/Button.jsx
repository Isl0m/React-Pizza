import React from 'react'

const Button = ({children, uniclass=""}) => {
  return (
    <button className={`button ${uniclass}`}>
        {children}
    </button>
  )
}

export default Button