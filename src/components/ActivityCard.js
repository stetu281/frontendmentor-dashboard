export const ActivityCard = ({ activity, id }) => {
    console.log(activity)
    return (
        <div className={`card-${id} pt-10 rounded-xl`}>
            <div className=' bg-dark-blue p-6 rounded-xl lg:p-8 hover:bg-hov-blue hover:cursor-pointer'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-lg font-medium'>{activity.title}</h2>
                    <button className="group py-1">
                        <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path className=" group-hover:fill-white" d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg>
                    </button>
                </div>
                <div className='flex justify-between items-center mt-1 lg:flex-col lg:items-start lg:mt-6'>
                    <p className='text-3xl font-light lg:text-5xl'>32hrs</p>
                    <p className=' text-sm text-pale-blue lg:mt-2'>Last Week - 36hrs</p>
                </div>
            </div>
        </div>
    )
}