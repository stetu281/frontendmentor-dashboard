import { useState } from 'react';
import profileImg from '../assets/images/image-jeremy.png';

export const User = (props) => {
  const timeFrames = ['daily', 'weekly', 'monthly'];

  const [active, setActive] = useState(0);

  const handleChange = (index) => {
    setActive(index);
  };

  return (
    <div className=" bg-dark-blue rounded-xl lg:row-span-2">
      <div className="bg-primary p-6 rounded-xl flex items-center lg:flex-col lg:items-start lg:p-8 lg:pb-14">
        <img src={profileImg} className=" w-16 border-2 border-white rounded-full" alt="" />
        <h1 className=" font-light leading-7 text-2xl pl-4 lg:pl-0 lg:mt-5 lg:text-4xl">
          <span className="text-sm opacity-70">Report for</span>
          <br />
          Jeremy Robson
        </h1>
      </div>
      <div className=" p-6 flex justify-between lg:flex-col lg:items-start lg:p-8">
        {timeFrames.map((item, index) => {
          return (
            <button
              id={item}
              key={index}
              className={index === active ? 'btn active' : 'btn'}
              onClick={(e) => {
                handleChange(index);
                props.handleClick(e);
              }}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};
