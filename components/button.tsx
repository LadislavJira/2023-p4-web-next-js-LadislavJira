import { ButtonContainer } from "./buttonStyle";


interface ButtonProps{
    children: React.ReactNode;
    size?: "small" | "medium" | "large" | "extra-large";
    type?: "button" | "submit" | "reset";
    color?: "black" | "red" | "green" | "blue";
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, size, type = "button", color = "black", onClick }) => {
    return (
        <ButtonContainer
            type={type}
            className={`${
                size === "small" ? "small" : size === "medium" ? "medium" : size === "large" ? "large" : "extra-large"
            } ${color}`}
            onClick={onClick}
        >
            {children}
        </ButtonContainer>
    );
};

export default Button;