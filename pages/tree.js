import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

//TreeComponents
import Cube from '@Components/Tree/Cube';
import TreeStage from '@Components/Tree/Stage';

//CSS
import { Wrap, Board, Title, Contents } from '@Styles/base';
import { TreeSection, TreeSectionDisplay, TreeSectionOption } from '@Styles/tree';

const Tree = () => {
    return (
        <Wrap>
            <Board>
                <Title>
                    <span>Evo Project</span>
                </Title>
                <Contents>
                    <TreeSectionDisplay>
                        <TreeStage />
                    </TreeSectionDisplay>
                    <TreeSectionOption>Side</TreeSectionOption>
                </Contents>
            </Board>
        </Wrap>
    );
};

export default Tree;
