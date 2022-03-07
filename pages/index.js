import Link from 'next/link';
import { MQLWrap } from '@styles/mediaquery';

//CSS
import {
    Wrapper,
    NoneScroll,
    Templete,
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
    ContentsBoard,
    SideMenuWrapper,
    SideMenuBox,
    SideMenu_ul,
    SideMenu_li,
} from '@styles/index';

const Main = () => {
    return (
        <Wrapper>
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
                                    src="/logo/logo.svg"
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
                                width: '80%',
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
            <ContentsBoard>
                <SideMenuWrapper>
                    <SideMenuBox>
                        <ul css={SideMenu_ul}>
                            <li css={SideMenu_li}>MENU1</li>
                            <li css={SideMenu_li}>MENU2</li>
                            <li css={SideMenu_li}>MENU3</li>
                        </ul>
                    </SideMenuBox>
                </SideMenuWrapper>
            </ContentsBoard>
        </Wrapper>
    );
};

export default Main;
