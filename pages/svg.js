import Link from 'next/link';

//Components
import SideMenu from '@Components/SideMenu';

//Object
import ObjSample from '@Components/Object/ObjSample';
import ObjectTypeA from '@Components/Object/ObjectTypeA';
import { Object001, Object002 } from '@Components/Object/ObjectTypeA/data.json';

import { ViewScale, ViewMargin, ViewSize, ViewBox } from '@Tools/AxisBase';
import AxisX from '@Tools/AxisX';
import AxisY from '@Tools/AxisY';

//O

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
                            <svg viewBox={ViewBox} fill="#fff">
                                <ObjSample Object={Object001} />
                                {/* <ObjectTypeA Object={Object001} /> */}
                                <AxisX />
                                <AxisY />
                            </svg>
                        </Column_svg>
                        <Column>Main 2</Column>
                        <Column>Main 2</Column>
                    </Section_svg>
                    <Section_svg>
                        <Column_svg width={'800px'} height={'auto'}>
                            <svg viewBox={ViewBox} fill="#fff">
                                <ObjectTypeA Object={Object002} />
                                <AxisX />
                                <AxisY />
                            </svg>
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
