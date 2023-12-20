

import { BookTitle } from "./BookHeadingStyle";

interface BookHeadingProps{
    children: React.ReactNode;
}

const BookHeading:React.FC<BookHeadingProps> = ({children}) => {
    return (
        <BookTitle>
            {children}
        </BookTitle>
    );
};
export default BookHeading;


