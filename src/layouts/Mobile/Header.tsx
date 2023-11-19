//import
import { useState } from 'react';
//assets
import Logo from '../../assets/LOGO.svg'
import User from '../../assets/icons/user.png'
//styles
import style from '../../styles/Header.module.scss'
import '../../styles/Flex.scss'
//hooks
//components
import Auth from '../../components/Auth';
const Header: React.FC = () => {
    const [authOpen, setAuthOpen] = useState<boolean>(false)
    const closeModal = () => {
        setAuthOpen(false)
    }
    return (
        <div className={`flex_row ${style.hd_container}`}>
            <div className={style.Logo}>
                <img src={Logo} alt="logo" />
            </div>
            <div className={style.Icon} onClick={() => setAuthOpen(true)}>
                <img src={User} alt="User" />
            </div>
            {authOpen && <Auth closeModal={closeModal}/>}
        </div>
    )
}
export default Header;