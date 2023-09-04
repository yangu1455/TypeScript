import React from 'react'

import { buttonProps } from "../types";

const Button = (props: buttonProps) => {
  return (
    <button
      type='button'
      style={{ backgroundColor: props.bgColor, color: props.color, borderRadius: props.borderRadius }}
      className={`text-${props.size} p-3 hover:drop-shadow-xl`}
    >
      {props.text}
    </button>
  )
}

export default Button