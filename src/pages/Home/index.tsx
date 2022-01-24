import { useAppDispatch, useAppSelector } from 'store/hooks';
import { Outlet } from 'react-router-dom';
import { addCount, minusCount } from '@/store/app/slice';

const Home = () => {
  const { count } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();
  return (
    <div className="">
      {count}
      <button onClick={() => dispatch(addCount())}>add</button>
      <button onClick={() => dispatch(minusCount())}>minus</button>
      <Outlet />
    </div>
  );
};

export default Home;
