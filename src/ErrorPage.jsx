import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='w-full'>
            <h1 className="text-5xl font-bold mt-20 text-center">404 Page Not Found!</h1>
            <div className='w-1/12 mx-auto my-10'>
            <Link to="/"><button className='btn bg-red-500'>Go Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;