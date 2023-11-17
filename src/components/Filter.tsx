import React from "react";
//style
import style from "../styles/PDF.module.scss";

interface Data {
  title: string;
  value: string[];
}

const Table = () => {
  const data: Data[] = React.useMemo(
    () => [
      {
        title: "학년",
        value: ["1학년", "2학년", "3학년"],
      },
      {
        title: "년도",
        value: [
          "2019 기출",
          "2020 기출",
          "2021 기출",
          "2022 기출",
          "2023 기출",
        ],
      },
      {
        title: "학기",
        value: ["1학기 중간", "1학기 기말", "2학기 중간", "2학기 기말"],
      },
      {
        title: "세부 과목",
        value: ["국어", "수학", "영어", "한국사", "과학탐구", "사회탐구", "직업탐구"],
      },
    ],
    []
  );

  return (
    <table className={style.table}>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.title}</td>
            <td>
              {item.value.map((val, i) => (
                <label key={i} id="" className="flex_row">
                  <input type="checkbox" name={`${item.title}`}/>
                  <p>{val}</p>
                </label>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
