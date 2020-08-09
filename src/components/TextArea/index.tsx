import React, {TextareaHTMLAttributes} from 'react';

// desse modo o componente input revece TODAS as props de um input normal
// rest -> armazena todas as props e passa dirtamente pro input
import './styles.css';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const TextArea:React.FC<TextareaProps> = ({label, name, ...rest}) => {
  return(
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest}/>
    </div>
  )
}

export default TextArea;