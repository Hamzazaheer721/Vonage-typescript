/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
import React, { FC, useState, useEffect } from 'react'
import { uniqueId } from 'lodash'

interface ICheckBoxProps{
  initialChecked? : any;
  _onChange? : (isChecked? : any) => any;
  label : string;
}

const CheckboxComponent : FC<ICheckBoxProps> = ({
  initialChecked,
  _onChange, label,
}:ICheckBoxProps) => {
  const [id] = useState<string>(uniqueId('Checkbox'))
  const [isChecked, setIsChecked] = useState<any>(initialChecked)
  const onChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event?.currentTarget?.checked);
  }
  useEffect(() => {
    if (typeof _onChange === 'function') { _onChange(isChecked); }
  }, [isChecked])

  return (
    <div>
      <label htmlFor={id}>
        {label}
      </label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        id={id}
      />
    </div>
  )
}

export default CheckboxComponent;
