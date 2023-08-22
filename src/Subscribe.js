
import {AiOutlineCheckCircle} from "react-icons/ai"
import { useNavigate } from "react-router-dom"


const Subscribe = () => {

    const navigate = useNavigate();

    return  (
        <>
           
            <section className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:py-20 lg:place-items-center'>
                <div >
                    <h1 className='font-bold mb-3 lg:text-5xl text-yellow-500'>Stay Tuned.</h1>
                    <p className='text-slate-900 font-bold text-2xl'>Welcome to our advert plateform where you </p>
                    <p className='text-slate-900 font-bold text-2xl'>can subscribe to a flexible plan of your choice </p>
{/* 
                   <div className='lg:flex-1'>
                   <p className='text-slate-900 font-bold text-2xl'> Unlimited Sessions </p>
                   <p className='text-slate-900 font-bold text-2xl'><AiOutlineCheckCircle/> Access all categories of our advertisment products </p>
                   </div> */}
                </div>

                <div>
                <p className='font-bold mb-3 mt-16 lg:text-5xl text-yellow-500'>Categories</p>
                    <div className='lg:flex justify-between gap-2 mb-20 mt-6'>
                    <button className='text-2xl rounded bg-yellow-200 items-center px-4 py-2'>Weekly</button>
                    <button className='text-2xl rounded bg-yellow-200 items-center px-4 py-2'>Monthly</button>
                    <button className='text-2xl rounded bg-yellow-200 items-center px-4 py-2'>Yearly</button>
                    </div>
                    <button className='text-2xl rounded bg-red-500 text-white items-center px-4 py-4 ml-20' onClick={()=>navigate("/advert")}>Subscribe</button>
                </div>
            </section>
        </>
    )
}

export default Subscribe