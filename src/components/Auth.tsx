import React, { useEffect, useCallback } from "react";
//styles
import "../styles/Flex.scss";
import style from "../styles/Auth.module.scss";
//assets
import googleIcon from "../assets/icons/google.png";

interface AuthProps {
  closeModal: () => void;
}

const Auth: React.FC<AuthProps> = ({ closeModal }) => {
  const handleBackgroundClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div
      className={`flex_row ${style.background}`}
      onClick={handleBackgroundClick}
    >
      <div className={`flex_row ${style.container}`}>
        <div className={`flex_column `}>
          <p>로그인하여</p>
          <p>필요한 시험지를 찾아보세요.</p>
          <div className={`flex_row ${style.button_container}`}>
            <div>
              <img src={googleIcon} alt="google" />
            </div>
            <p>학교 계정으로 로그인</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Auth;
