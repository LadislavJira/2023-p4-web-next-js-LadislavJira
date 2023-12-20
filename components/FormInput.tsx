


import { Input } from "./FormInputStyle";
 
interface FormInputProps{
    placeholder?: "Title" | "Author" | "Genre" | "Published Year";
    type?: "text" | "number";
    name?: "titlee" | "author" | "genre" | "published";
    max?: 2023;
}

const FormInput:React.FC<FormInputProps> = ({ placeholder, type, name, max}) => {
    return (
        <Input placeholder={placeholder} type={type} name={name} max={max}
        >
        </Input>
    );
};
export default FormInput;

