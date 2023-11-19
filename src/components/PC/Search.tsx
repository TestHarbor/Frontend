//style
import "../../styles/Flex.scss";
import style from '../../styles/Header.module.scss'
//assets
import search from "../../assets/icons/search.png";
const Search = () => {
  return (
    <div className={`flex_column ${style.search_container}`}>
      <div className={`flex_row`}>
        <div>
          <img src={search} alt="search" />
        </div>
        <input type="text" placeholder="어떤 정보를 찾으시나요?" />
      </div>
      <hr />
    </div>
  );
};
export default Search;
