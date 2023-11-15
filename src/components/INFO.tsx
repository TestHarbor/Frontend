import React from "react";
interface LayoutProps {
  children?: React.ReactNode;
}

const Info: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
        <div>대입 정보</div>
    </>
  );
};

export default Info;
