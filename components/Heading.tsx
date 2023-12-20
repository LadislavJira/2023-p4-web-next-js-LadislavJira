
import { FancyHeading } from "./HeadingStyle";

interface HeadingProps{
    children: React.ReactNode;
    color?: "black" | "red"
}

const Container:React.FC<HeadingProps> = ({children, color = "black"}) => {
    return (
        <FancyHeading
        className={` ${color}`}
        >
            {children}
        </FancyHeading>
    );
};
export default Container;



