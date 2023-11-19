//import
import { useNavigate } from "react-router-dom";
//styles
import "../../styles/Flex.scss";
import style from "../../styles/List.module.scss";

interface ListProps {
  Data?: {
    [key: string]: string | undefined;
  }[];
}

const List: React.FC<ListProps> = ({ Data }) => {
  const navigate = useNavigate();
  return (
    <div className={`flex_column ${style.container}`}>
      {Data &&
        Data.map((item, index) => (
          <div key={`${index}`} className="flex_row">
            <div
              className={`flex_row ${style.item}`}
              onClick={() => navigate(`/Detail/${item["ID"]}`)}
            >
              <span>{item["학년"]}</span>
              <p>{item["제목"]}</p>
              <div>
                <p>{item["학기"]}</p>
              </div>
              <div>
                <p>{item["세부과목"]}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default List;
