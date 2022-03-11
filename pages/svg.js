import Link from 'next/link';

//Components
import SideMenu from '@Components/SideMenu';
import Room from '@Components/Object/Room';
import data from '@Components/Object/sample.json';

//CSS
import { Wrap, Board, PageTitle, Contents, Section, Column, Section_Main, Section_Side } from '@Styles/base';
import { Contents_svg, Section_svg, Column_svg } from '@Styles/svg';

const Floorplan = ({ data: { rooms } }) => {
    return (
        <>
            {rooms.map((r) => (
                <Room {...r} />
            ))}
        </>
    );
};

const Svg = () => {
    return (
        <Wrap>
            <Board>
                <PageTitle>
                    <span>SVG Maker</span>
                </PageTitle>
                <Contents_svg>
                    <Section_svg>
                        <Column_svg width={'70%'} height={'500px'} style={{ backgroundColor: '#405CB0' }}>
                            <svg viewBox="-1000 -1000 21000 14000">
                                <Floorplan data={data} />
                                <line x1={-1000} y1={0} x2={20000} y2={0} stroke="white" strokeWidth={10} />
                                <line x1={0} y1={-1000} x2={0} y2={13000} stroke="white" strokeWidth={10} />
                            </svg>
                        </Column_svg>
                        <Column_svg width={'30%'} height={'500px'}>
                            Main 1
                        </Column_svg>
                    </Section_svg>
                    <Section>
                        <Column>Main 2</Column>
                        <Column>Main 3</Column>
                    </Section>
                </Contents_svg>
            </Board>
        </Wrap>
    );
};

export default Svg;
