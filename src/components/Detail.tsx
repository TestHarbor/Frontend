//import
import { useParams } from "react-router-dom"
//styles
import '../styles/Flex.scss'
import style from '../styles/Detail.module.scss'

const Detail = () => {
    const Param = useParams()
    return (
        <div className={style.background}>
            <div className={`flex_row ${style.container}`}>
                <div>
                    <img src="" alt="" />
                </div>
                <div className={`flex_cloumn ${style.info_conatiner}`}>
                    <div className={`flex_row`}>
                        <div className={style.tagbox}><p>수학 I</p></div>
                        <div className={style.tagbox}><p>1학기 중간</p></div>
                    </div>
                    <div className={`flex_row`}>
                        <span>1학년</span>
                        <p>2022년 1학년 1학기 중간고사 수학 I 시험지</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Detail