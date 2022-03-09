import React, { useCallback, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

//TreeComponents
import Cube from '@Components/Tree/Cube';
import TreeStage from '@Components/Tree/TSection';

//CSS
import { VeticalCenter, Wrap, Board, Title, Contents, Section, ButtonBorder } from '@Styles/base';
import { TreeSection, TreeSectionDisplay, TreeSectionOption, InputData } from '@Styles/tree';

const Tree = () => {
    const [number, setNumber] = useState(4);
    const onChangeNumber = useCallback(
        (e) => {
            setNumber(e.target.value);
        },
        [number],
    );
    return (
        <Wrap>
            <Board>
                <Title>
                    <span>Evo Project</span>
                </Title>
                <Contents>
                    <TreeSectionDisplay>
                        <TreeStage number={number} />
                    </TreeSectionDisplay>
                    <TreeSectionOption>
                        <Section>
                            <div
                                css={{
                                    fontSize: '16px',
                                    alignItems: 'center',
                                    padding: '16px',
                                }}
                            >
                                {' '}
                                Section
                            </div>
                            <form>
                                <input value={number} onChange={onChangeNumber} />
                            </form>
                            <ButtonBorder
                                css={{
                                    width: '80px',
                                    height: '50px',
                                }}
                            >
                                SET
                            </ButtonBorder>
                        </Section>
                    </TreeSectionOption>
                </Contents>
            </Board>
        </Wrap>
    );
};

export default Tree;
