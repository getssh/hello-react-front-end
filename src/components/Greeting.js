import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreet } from '../redux/greetSlice';

function Greeting() {
  const message = useSelector((state) => state.greeting.message);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getGreet());
  }, []);

  return (
    <div>
      <h1>{message.greeting}</h1>
    </div>
  );
}

export default Greeting;
