import Link from 'next/link';

//Components
import SideMenu from '@Components/SideMenu';

//CSS
import { Wrap, Board, PageTitle, Contents, Section, Column, Section_Main, Section_Side } from '@Styles/base';

const Main = () => {
    return (
        <Wrap>
            <Board>
                <PageTitle>
                    <span>HOME</span>
                </PageTitle>
                <Contents>
                    <Section>
                        <Column width={'100%'} height={'500px'}>
                            SIETE
                        </Column>
                    </Section>
                </Contents>
            </Board>
        </Wrap>
    );
};

export default Main;
