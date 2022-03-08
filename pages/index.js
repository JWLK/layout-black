import Link from 'next/link';

//Components
import SideMenu from '@Components/SideMenu';

//CSS
import { Wrap, Board, Title, Contents, Section, Section_Main, Section_Side } from '@Styles/base';

const Main = () => {
    return (
        <Wrap>
            <Board>
                <Title>
                    <span>HOME</span>
                </Title>
                <Contents>
                    <Section_Main>Main</Section_Main>
                    <Section_Side>Side</Section_Side>
                </Contents>
            </Board>
        </Wrap>
    );
};

export default Main;
