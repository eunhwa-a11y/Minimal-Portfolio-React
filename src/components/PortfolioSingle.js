import React from 'react';
import { useParams, Link } from 'react-router-dom';

const PortfolioSingle = ({data}) => {
  const {id} = useParams();
  const item = data[id]; // {data}의 0번째 1번째

  const currentId = Number(id);
  // console.log(currentId, typeof(currentId)); -> console : 2 'number'

  const prevId = currentId > 0 ? currentId - 1 : null;
  const nextId = currentId < data.length - 1 ? currentId + 1 : null;

  if(!item) return <p>Item not found</p>; // item이 없다라고 한다면
  return(
    <main className="content portoflio-single">
      <div className="container">
        <div className="row">
          <div className="col-md-8 decription">
            <div className="contents shadow">
              <img src={item.images.description1} alt=""/>
              <p>image description 1</p>
            </div>
            <div className="contents shadow">
              <img src={item.images.description2} alt="" />
              <p>image description 2</p>
            </div>
          </div>
          <div className="col-md-4 portfolio_info">
            <div className="contents shadow">
              <h2>{item.title}</h2>
              <p>{item.content}</p>
              <hr className="double" />
              <blockquote>
                <p>{item.review.content}</p>
                <small>- {item.review.writer} -</small>
              </blockquote>
              <p className="nav">
                {prevId !== null ? (
                  <Link to={`/portfolio/${prevId}`} className="secondary-btn">&larr; Previous Project</Link>
                  ) : null
                }

                {nextId !== null ? (
                  <Link to={`/portfolio/${nextId}`} className="secondary-btn">Next Project &rarr;</Link>
                  ) : null
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
export default PortfolioSingle;