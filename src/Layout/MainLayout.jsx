import {Link, Outlet} from 'react-router-dom'
import Footer from '../Pages/Footer';

const MainLayout = () => {
    return (
        <div>
        <section className='flex py-6 px-24 shadow-lg justify-between shadow-md '>
            <div className='text-xl font-bold'>
                 <h1><Link to="/">Amajhon</Link></h1>
            </div>
            <nav>
                <ul className='flex gap-4'>
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/product">product</Link></li>
                    <li> <Link to="/contact">Contact</Link></li>
                    <li> <Link to="/dashboard">Dashboard</Link></li>
                </ul>
             </nav>
       </section>
       <div className='min-h-screen'>
       <Outlet></Outlet>
       </div>
       <Footer/>
        </div>
    );
};

export default MainLayout;