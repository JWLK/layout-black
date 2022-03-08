import Link from 'next/link';

//Components
import SideMenu from '@Components/SideMenu';

//CSS
import { Wrap, Board, Title, Contents } from '@Styles/base';

const Sub = () => {
    return (
        <Wrap>
            <Board>
                <Title>
                    <span>HOME</span>
                </Title>
                <Contents></Contents>
            </Board>
        </Wrap>
    );
};

export default Sub;
