import Link from 'next/link';

//Components
import SideMenu from '@Components/SideMenu';

//CSS
import { Wrap, Board, PageTitle, Contents, Section, Column, Section_Main, Section_Side } from '@Styles/base';

const Page = () => {
    return (
        <Wrap>
            <Board>
                <PageTitle>
                    <span>Page</span>
                </PageTitle>
                <Contents>
                    <Section>
                        <Column width={'100%'}>Main 0</Column>
                        <Column height={'auto'}>Main 1</Column>
                        <Column>Main 2</Column>
                        <Column>Main 3</Column>
                    </Section>
                    <Section>
                        <Column width={'100%'}>Main 0</Column>
                        <Column height={'auto'}>Main 1</Column>
                        <Column>Main 2</Column>
                        <Column>Main 3</Column>
                    </Section>
                </Contents>
            </Board>
        </Wrap>
    );
};

export default Page;
