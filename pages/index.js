import Link from 'next/link';
import { MQLWrap } from '@styles/mediaquery';

//CSS
import {
    VeticalCenter,
    Header,
    SearchBoxWrapper,
    SearchBoxInput,
    OptionBoxWrapper,
    OptionButtonText,
    OptionButtonBorder,
    OptionButtonIconWrapper,
    OptionButtonIcon,
} from '@styles/index';

const Main = () => {
    return (
        <>
            <Header css={VeticalCenter}>
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
                <div css={SearchBoxWrapper}>
                    <input css={SearchBoxInput} placeholder="Search all sandboxes" />
                </div>

                <div css={OptionBoxWrapper}>
                    <button css={OptionButtonText}>Option</button>
                    <button css={OptionButtonBorder}>JWLK</button>
                </div>
            </Header>
        </>
    );
};

export default Main;
