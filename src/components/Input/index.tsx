import React, { useEffect, useRef, InputHTMLAttributes } from 'react';
import { useField } from '@unform/core';
import { Input } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  placeholder: string;
}

const InputComponent: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef(null);

  const { defaultValue = '', fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  return <Input ref={inputRef} defaultValue={defaultValue} {...rest} />;
};

export default InputComponent;
