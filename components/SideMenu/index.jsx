import Link from 'next/link';
import { useRouter } from 'next/router';

const _menu = [
    { id: '1', name: 'Home', path: '/' },
    { id: '2', name: 'Sub', path: '/sub' },
];
import { SideMenuWrapper, SideMenuBox, SideMenu_ul, SideMenu_li, SideMenu_link, SideMenu_icon } from './css';

const SideMenu = () => {
    const router = useRouter();
    return (
        <SideMenuWrapper>
            <SideMenuBox>
                <SideMenu_ul>
                    {_menu.map((menu) => {
                        return (
                            <SideMenu_li key={menu.id}>
                                <Link href={menu.path}>
                                    <a>
                                        <SideMenu_link active={menu.path == router.pathname ? true : false}>
                                            <div css={SideMenu_icon}>
                                                <img
                                                    style={{
                                                        width: '16px',
                                                        height: '16px',
                                                    }}
                                                    src="/logo/logo_swirly.svg"
                                                />
                                            </div>
                                            {menu.name}
                                        </SideMenu_link>
                                    </a>
                                </Link>
                            </SideMenu_li>
                        );
                    })}
                </SideMenu_ul>
            </SideMenuBox>
        </SideMenuWrapper>
    );
};

export default SideMenu;
