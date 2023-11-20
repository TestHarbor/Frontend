//import
//styles
import "../styles/Flex.scss";
import style from "../styles/Detail.module.scss";
//assets
import test from "../assets/images/시험지.png";

const Data = {
  "파일 유형": "PDF",
  "학년 / 학기": "1학년/1학기 중간",
  과목: "수학",
  종류: "시험지",
};

export const Table = () => {
  return (
    <table className={style.table_container}>
      <tbody>
        {Object.entries(Data).map((item, index) => {
          return (
            <tr key={index}>
              <td>{item[0]}</td>
              <td>{item[1]}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const Detail = () => {
  return (
    <div className={style.background}>
      <div className={`flex_row ${style.container}`}>
        <div>
          <img src={test} alt="" />
        </div>
        <div className={`flex_column ${style.info_container}`}>
          <div className="flex_column">
            <div className={`flex_row ${style.tagbox}`}>
              <p>{Data.과목}</p>
              <p>1학기 중간</p>
            </div>
            <div className={`flex_row`}>
              <span>1학년</span>
              <p className={style.title}>2022년 1학년 1학기 중간고사 수학 I 시험지</p>
            </div>
            <Table />
          </div>
          <button>다운로드</button>
        </div>
      </div>
    </div>
  );
};
export default Detail;
