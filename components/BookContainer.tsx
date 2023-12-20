

import { BookContainer } from "./BookContainerStyle";

interface BookContainerProps{
    children: React.ReactNode;
    size?: "small" | "big";
}

const BookFrame:React.FC<BookContainerProps> = ({children, size= "small"}) => {
    return (
        <BookContainer
        className={` ${size}`}
        >
            {children}
        </BookContainer>
    );
};
export default BookFrame;


