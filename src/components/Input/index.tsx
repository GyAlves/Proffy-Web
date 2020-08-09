import React, {InputHTMLAttributes} from 'react';

// desse modo o componente input revece TODAS as props de um input normal
// rest -> armazena todas as props e passa dirtamente pro input
import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input:React.FC<InputProps> = ({label, name, ...rest}) => {
  return(
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest}/>
    </div>
  )
}

export default Input;