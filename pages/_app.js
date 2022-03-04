import '@styles/globals.css';
import { ThemeProvider } from '@emotion/react';
import Theme from '@styles/theme';

function App({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider theme={Theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}

export default App;
