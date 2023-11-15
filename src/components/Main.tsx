//style
import { useState } from 'react'
import '../styles/Flex.scss'
import style from '../styles/Main.module.scss'
//components
import PDF from '../components/PDF'
import INFO from '../components/INFO'
const Main = () => {
    const [selectedTab, setSelectedTap] = useState('시험지');
    return (
        <>
        <nav className={`flex_row ${style.nav_container}`}>
            <p 
            className={selectedTab === '시험지' ? style.nav_act : ''}
            onClick={() => setSelectedTap('시험지')}
            >시험지</p>
            <p 
            className={selectedTab === '대입정보' ? style.nav_act : ''}
            onClick={() => setSelectedTap('대입정보')}>대입정보</p>
        </nav>
        <hr />
        {selectedTab === '시험지' && <PDF></PDF>}
        {selectedTab === '대입정보' && <INFO></INFO>}
        </>
    )
}
export default Main