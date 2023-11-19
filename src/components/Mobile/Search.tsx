//style
import "../../styles/Flex.scss";
import style from '../../styles/Header.module.scss'
//assets
import search from "../../assets/icons/search.png";
const Search = () => {
  return (
    <div className={`flex_row ${style.search_container}`}>
        <div>
          <img src={search} alt="search" />
        </div>
        <input type="text" placeholder="어떤 정보를 찾으시나요?" />
    </div>
  );
};
export default Search;
