import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function ReadMore({ children }) {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p className='inline w-full'>
      {isReadMore ? text.slice(0, 80) : text}
      <span
        onClick={toggleReadMore}
        className='cursor-pointer pl-1 hover:underline'
      >
        {isReadMore ? '...read more' : ' show less'}
      </span>
    </p>
  );
}

export default ReadMore;
