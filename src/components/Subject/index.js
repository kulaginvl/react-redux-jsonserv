import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { clearSubData, getSubData, handleSubLikes } from '../../redux/actions';
import Likes from '../Subject/Likes';

const Subject = () => {
  let dispatch = useDispatch();
  const state = useSelector((state) => ({ ...state }));
  let { id } = useParams();
  React.useEffect(() => {
    dispatch(getSubData(id));
    return () => {
      dispatch(clearSubData());
    };
  }, []);

  const addLike = (action) => {
    const data = state.articles.subData[0];
    const likes = data.likes[0];
    const dislikes = data.likes[1];

    const newLikes = action === 'ADD' ? [likes + 1, dislikes] : [likes, dislikes + 1];
    dispatch(handleSubLikes(newLikes, id));
  };

  const renderOtherNews = ({ subData }) => {
    return (
      <>
        {subData ? (
          <div>
            <div className="tags">
              <span>
                <i className="fa fa-eye" />
                {subData[0].views}
              </span>
              <span>
                <i className="fa fa-thumbs-up" />
                {subData[0].likes[0]}
              </span>
              <span>
                <i className="fa fa-thumbs-down" />
                {subData[0].likes[1]}
              </span>
            </div>
            <div className="top">
              <h2>{subData[0].title}</h2>
              <span>
                Article By: <strong>{subData[0].author}</strong>
              </span>
            </div>
            <img src={`/images/articles/${subData[0].img}`} alt={subData[0].title} />
            <div className="body_news">{subData[0].body}</div>
            <div>
              <Likes
                addLike={(args) => addLike(args)}
                likes={subData[0].likes[0]}
                dislikes={subData[0].likes[1]}
              />
            </div>
          </div>
        ) : null}
      </>
    );
  };
  return <div className="news_container">{renderOtherNews(state.articles)}</div>;
};

export default Subject;
