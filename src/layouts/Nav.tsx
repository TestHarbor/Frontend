//styles
import '../styles/Flex.scss'
import style from '../styles/Main.module.scss'
interface NavProps {
    selectedTab: string;
    toggleSelect?: (data: { data: string}) => void;
}

const Nav:React.FC<NavProps> = ({selectedTab, toggleSelect}) => {
  return (
    <>
      <nav className={`flex_row ${style.nav_container}`}>
        <p
          className={selectedTab === "시험지" ? style.nav_act : ""}
          onClick={() => { toggleSelect && toggleSelect({ data: '시험지'}) }}
        >
          시험지
        </p>
        <p
          className={selectedTab === "대입정보" ? style.nav_act : ""}
          onClick={() => { toggleSelect && toggleSelect({ data: '대입정보'}) }}
        >
          대입정보
        </p>
      </nav>
      <hr />
    </>
  );
};
export default Nav;
