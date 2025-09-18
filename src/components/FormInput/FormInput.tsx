import {FieldErrors, Path, UseFormRegister } from 'react-hook-form';

// eslint-disable-next-line
interface FormInputProps<T extends Record<string, any>> {
  type: "text" | "password"; 
  placeholder?: string;
  register:UseFormRegister<T>;
  name: Path<T>;
  errors: FieldErrors<T>;
  disabled?: boolean;
  label?: string;
}

// eslint-disable-next-line
function FormInput<T extends Record<string, any>>(props: FormInputProps<T>) {
  return (
      <div className="form-group mb-4">
        {props.label &&
        <label className="text-black" htmlFor={props.name}>{props.label}</label>
        }
        <input 
          type={props.type} 
          className={`form-control ${props.errors[props.name] ? 'is-invalid' : ''}`} 
          id={props.name} 
          placeholder={props.placeholder} 
          disabled={props.disabled} 
          {... props.register(props.name)} 
          />
         <div className={`text-danger ${props.errors[props.name] ? '' : 'hidden'}`} style={{height: 8}}>
          <small>{(props.errors[props.name]?.message as string | null) ?? ''}</small>
          </div>
      </div>
  )
}

export default FormInput
