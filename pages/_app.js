import { ThemeProvider } from '@emotion/react';

//Components
import HeaderTypeBoard from '@Components/Header';
import SideMenu from '@Components/SideMenu';

//CSS
import '@Styles/globals.css';
import Theme from '@Styles/theme';
import { Wrapper, ContentsWrapper, Main } from '@Styles/base';

const App = ({ Component, pageProps }) => {
    return (
        <>
            <ThemeProvider theme={Theme}>
                <Wrapper>
                    <HeaderTypeBoard />
                    <ContentsWrapper>
                        <SideMenu />
                        <Main>
                            <Component {...pageProps} />
                        </Main>
                    </ContentsWrapper>
                </Wrapper>
            </ThemeProvider>
        </>
    );
};

export default App;
