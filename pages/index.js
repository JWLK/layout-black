import Link from 'next/link';
import { MQLWrap } from '@styles/mediaquery';

//CSS
import {
    VeticalCenter,
    Header,
    MainLogoWrapper,
    SearchBoxWrapper,
    LeftMenuButtonWrapper,
    ButtonIcon,
    SearchBoxInput,
    OptionBoxWrapper,
    ButtonText,
    ButtonBorder,
} from '@styles/index';

const Main = () => {
    return (
        <>
            <Header css={VeticalCenter}>
                <MainLogoWrapper>
                    <Link href="/">
                        <a>
                            <img
                                style={{
                                    position: 'relative',
                                    width: '32px',
                                    height: 'auto',
                                    objectFit: 'cover',
                                }}
                                src="/logo/logo.svg"
                            />
                        </a>
                    </Link>
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
                    <input css={SearchBoxInput} placeholder="Search all sandboxes" />
                </SearchBoxWrapper>

                <OptionBoxWrapper>
                    <ButtonText>Option</ButtonText>
                    <ButtonBorder>JWLK</ButtonBorder>
                </OptionBoxWrapper>
            </Header>
        </>
    );
};

export default Main;
