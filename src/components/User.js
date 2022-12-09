import profileImg from '../assets/images/image-jeremy.png';

export const User = () => {
  return (
    <div className=" bg-dark-blue rounded-xl">
      <div className='bg-primary p-6 rounded-xl flex items-center'>
        <img src={profileImg} className=" w-16 border-2 border-white rounded-full" alt="" />
        <h1 className=' font-light leading-7 text-2xl pl-4'>
          <span className='text-sm opacity-70'>Report for</span>
          <br />
          Jeremy Robson
        </h1>        
      </div>
      <div className=' p-6 flex justify-between'>
        <button className='btn'>Daily</button>
        <button className='btn'>Weekly</button>
        <button className='btn'>Monthly</button>
      </div>
    </div>
  );
};
