import Link from 'next/link';

//Components
import SideMenu from '@Components/SideMenu';
import Room from '@Components/Object/Room';
import data from '@Components/Object/sample.json';

//CSS
import {
    Wrap,
    Board,
    PageTitle,
    Contents,
    Section,
    Column,
    Section_Main,
    Section_Side,
} from '@Styles/base';
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
                    <span>Object Maker</span>
                </PageTitle>
                <Contents_svg>
                    <Section_svg>
                        <Column_svg width={'800px'} height={'auto'}>
                            <svg viewBox="-1000 -1000 11000 11000" fill="#fff">
                                <Floorplan data={data} />
                                <line
                                    x1={-1000}
                                    y1={0}
                                    x2={10000}
                                    y2={0}
                                    stroke="white"
                                    strokeWidth={30}
                                    strokeDasharray={'100 100'}
                                />
                                <line
                                    x1={0}
                                    y1={-1000}
                                    x2={0}
                                    y2={11000}
                                    stroke="white"
                                    strokeWidth={30}
                                    strokeDasharray={'100 100'}
                                />
                            </svg>
                        </Column_svg>
                        <Column_svg
                            width={'calc(100% - 800px)'}
                            height={'600px'}
                        >
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
