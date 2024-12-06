import React from 'react'; // 리엑트 로드
import {Link} from "react-router-dom";

/*
function 함수명(props){
  props.data
}
export default 함수명;
*/

const PortfolioList = ({data}) => {
  return(
    <div className="row list">
      {data.map((item, index) => (
        <div className="col-md-4">
          <div className="contents shadow">
            <img
              src={item.images.thumbnail}
              alt={item.title}
            />
            <div className="hover_contents">
              <div className="list_info">
                <h3>
                  <Link to={`/portfolio/${index}`}>{item.title}</Link>
                  <img
                    src="images/portfolio_list_arrow.png"
                    alt="list arrow"
                  />
                </h3>
                <p>
                  <Link to={`/portfolio/${index}`}>Click to see project</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default PortfolioList;