//import
//styles
import "../../styles/Flex.scss";
import style from "../../styles/List.module.scss";

const Data = [
  "2022년 1학년 1학기 중간고사 수학 시험지",
  "2022년 1학년 1학기 기말고사 수학 시험지",
  "2022년 1학년 2학기 중간고사 수학 시험지",
  "2022년 1학년 2학기 기말고사 수학 시험지",
  "2022년 2학년 1학기 중간고사 수학 I 시험지",
  "2022년 2학년 1학기 기말고사 수학 I 시험지",
  "2022년 2학년 1학기 기말고사 수학 II 시험지",
  "2022년 2학년 1학기 중간고사 수학 II 시험지",
  "2022년 3학년 1학기 중간고사 수학 시험지",
  "2022년 3학년 1학기 중간고사 수학 시험지",
  "2023년 3학년 1학기 기말고사 수학 시험지",
  "2023년 3학년 1학기 중간고사 수학 시험지",
];
const grade = ["1학년", "2학년", "3학년"];

const List = () => {
  return (
    <div className={`flex_column ${style.container}`}>
      {grade.map((item, index) => {
        const DataList = Data.filter((dataItem) => dataItem.includes(item));
        return (
          <div key={index} className={`flex_column ${style.itembox}`}>
            <div className={`flex_row ${style.title}`}>
              <p>{item}</p>
              <hr />
            </div>
            {DataList.map((dataItem, index) => {
              return (
                <div key={index}>
                  <p className={style.item}>{dataItem}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
export default List;
