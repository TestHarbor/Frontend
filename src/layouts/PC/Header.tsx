//import
import { useState } from 'react';
//assets
import Searcrh from '../../components/PC/Search';
import Logo from '../../assets/LOGO.svg'
//styles
import style from '../../styles/Header.module.scss'
import '../../styles/Flex.scss'
//hooks
import useIsLoggedIn from '../../hooks/useIsLoggedIn'
//components
import Auth from '../../components/Auth';
const Header: React.FC = () => {
    const isLogin = useIsLoggedIn();
    const [authOpen, setAuthOpen] = useState<boolean>(false)
    const closeModal = () => {
        setAuthOpen(false)
    }
    return (
        <div className={`flex_row ${style.hd_container}`}>
            <div className={style.Logo}>
                <img src={Logo} alt="logo" />
            </div>
            <Searcrh></Searcrh>
            <nav className={`flex_row ${style.nav_container}`}>
                <p>업로드</p>
                {isLogin?
                <p>로그아웃</p>:
                <p onClick={() => setAuthOpen(true)}>로그인</p>}
            </nav>
            {authOpen && <Auth closeModal={closeModal}/>}
        </div>
    )
}
export default Header;