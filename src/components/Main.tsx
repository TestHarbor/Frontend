//style
import '../styles/Flex.scss'
//components
import PDF from '../components/PDF'
import INFO from '../components/INFO'

interface MainProps {
    selectedTab: string
}

const Main:React.FC<MainProps> = ({ selectedTab }) => {
    return (
        <>
        {selectedTab === '시험지' && <PDF></PDF>}
        {selectedTab === '대입정보' && <INFO></INFO>}
        </>
    )
}
export default Main