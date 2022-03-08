import Link from 'next/link';

//CSS
import { VeticalCenter, ButtonText, ButtonBorder, ButtonIcon } from '@Styles/base';

import {
    Header,
    MainLogoWrapper,
    SearchBoxWrapper,
    LeftMenuButtonWrapper,
    SearchBoxInput,
    OptionBoxWrapper,
} from './css';

const HeaderTypeBoard = () => {
    return (
        <Header css={VeticalCenter}>
            <MainLogoWrapper>
                <ButtonIcon>
                    <Link href="/">
                        <a>
                            <img
                                style={{
                                    position: 'relative',
                                    width: '100%',
                                    height: 'auto',
                                    objectFit: 'cover',
                                }}
                                src="/logo/logo_swirly.svg"
                            />
                        </a>
                    </Link>
                </ButtonIcon>
            </MainLogoWrapper>
            <LeftMenuButtonWrapper>
                <ButtonIcon>
                    <img
                        style={{
                            position: 'relative',
                            width: '100%',
                            height: 'auto',
                            objectFit: 'cover',
                        }}
                        src="/icon/menu-left-side.svg"
                    />
                </ButtonIcon>
            </LeftMenuButtonWrapper>
            <SearchBoxWrapper>
                <input css={SearchBoxInput} placeholder="Search Item" />
            </SearchBoxWrapper>

            <OptionBoxWrapper>
                <ButtonText>Option</ButtonText>
                <ButtonBorder>Guest</ButtonBorder>
            </OptionBoxWrapper>
        </Header>
    );
};

export default HeaderTypeBoard;
