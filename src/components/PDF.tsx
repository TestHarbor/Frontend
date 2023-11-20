//import
import React from "react";
//styles
import "../styles/Flex.scss";
import style from "../styles/PDF.module.scss";
//components
import Filter from "./PC/Filter";
import PCList from "./PC/List";
import { PC, Mobile } from "../responsive";
import MoList from "./Mobile/List";
interface LayoutProps {
  children?: React.ReactNode;
}

const PDF: React.FC<LayoutProps> = ({ children }) => {
  const Data = [
    {
      제목: "2022년 1학년 1학기 중간고사 수학 I 시험지",
      학년: "1학년",
      년도: "2022년",
      학기: "1학기 중간",
      세부과목: "수학",
      ID: "22111m",
    },
    {
      제목: "2023년 2학년 2학기 중간고사 영어 시험지",
      학년: "2학년",
      년도: "2023년",
      학기: "2학기 중간",
      세부과목: "영어",
      ID: "23221e",
    },
    {
      제목: "2023년 3학년 1학기 기말고사 물리 시험지",
      학년: "3학년",
      년도: "2023년",
      학기: "1학기 기말",
      세부과목: "물리",
      ID: "23312s",
    },
  ];
  return (
    <>
      <PC>
        <div className={`${style.background}`}>
          <Filter />
          <hr />
          <PCList Data={Data} />
        </div>
      </PC>
      <Mobile>
        <div className={`${style.background}`}>
          <MoList />
        </div>
      </Mobile>
    </>
  );
};

export default PDF;
