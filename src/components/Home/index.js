import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { latestNews, otherNews } from '../../redux/actions';
import LatestNews from './LatestNews';
import OtherNews from './OtherNews';

const Home = () => {
  const state = useSelector((state) => ({ ...state }));
  console.log('state', state);
  let dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(latestNews());
    dispatch(otherNews());
  }, []);

  return (
    <>
      <LatestNews latest={state.articles.latest} />
      <OtherNews otherNews={state.articles.otherNews} />
    </>
  );
};

export default Home;
