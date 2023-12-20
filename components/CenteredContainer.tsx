
import { CenteredContainer } from "./CenteredContainerStyle";

interface ContainerProps{
    children: React.ReactNode;
}

const Container:React.FC<ContainerProps> = ({children}) => {
    return (
        <CenteredContainer>
            {children}
        </CenteredContainer>
    );
};
export default Container;



