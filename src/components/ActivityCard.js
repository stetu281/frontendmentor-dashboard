import Ellipsis from '../assets/images/icon-ellipsis.svg';

export const ActivityCard = ({ activity, id }) => {
    console.log(activity)
    return (
        <div className={`card-${id} pt-10 rounded-xl`}>
            <div className=' bg-dark-blue p-6 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-lg font-medium'>Work</h2>
                    <img src={Ellipsis} alt="" />
                </div>
                <div className='flex justify-between items-center mt-1'>
                    <p className='text-3xl font-light'>32hrs</p>
                    <p className=' text-sm text-pale-blue'>Last Week - 36hrs</p>
                </div>
            </div>
        </div>
    )
}