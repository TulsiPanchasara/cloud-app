import React from 'react'

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary = false, label, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`${
        primary ? 'bg-blue-500 text-white' : 'bg-black text-red-500'
      } rounded-md px-3 py-2`}
      {...props}
    >
      {label}
    </button>
  )
}
