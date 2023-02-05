import React from 'react';
import {PageContainer} from "./style";
import {Container} from "../UI";
import Logo from "../Logo/Logo";

type Props = {
    children: React.ReactNode,
}

const Page = ({children}: Props) => {
    return (
        <PageContainer>
            <Logo/>
            <Container>
                {children}
            </Container>
        </PageContainer>
    );
};

export default Page;