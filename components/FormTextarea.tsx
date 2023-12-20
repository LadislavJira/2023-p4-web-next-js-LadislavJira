import { Textarea } from "./FormTextareaStyle";
 
interface FormTextareaProps{
    placeholder?: "Description";
    name?: "description" ;
}

const FormTextarea:React.FC<FormTextareaProps> = ({ placeholder, name}) => {
    return (
        <Textarea placeholder={placeholder}  name={name}>
        </Textarea>
    );
};
export default FormTextarea;

