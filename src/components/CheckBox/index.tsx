/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
import React, {
  FC, useState, useEffect, memo, useCallback,
} from 'react'
import { uniqueId } from 'lodash'

interface ICheckBoxProps{
  initialChecked? : any;
  _onChange? : (isChecked? : any) => any;
  label : string;
}

const CheckboxComponent : FC<ICheckBoxProps> = memo(({
  initialChecked,
  _onChange, label,
}:ICheckBoxProps) => {
  const [id] = useState<string>(uniqueId('Checkbox'))
  const [isChecked, setIsChecked] = useState<any>(initialChecked)

  useEffect(() => {
    if (typeof _onChange === 'function') { _onChange(isChecked); }
  }, [isChecked])

  const onChange = useCallback((event : React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event?.currentTarget?.checked);
  }, [])

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
})

export default CheckboxComponent;
