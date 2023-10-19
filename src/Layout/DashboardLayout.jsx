import {Link,  Outlet } from "react-router-dom";


const DashboardLayout = () => {
    return (
       <div className="flex gap-4">
          <nav className="w-[20%] bg-red-200">
                <ul className=''>
                    <li><Link to="/">Amajhon Home</Link></li>
                    <li><Link to="/dashboard/profile">Profile</Link></li>
                    <li><Link to="/dashboard/Editprofile">Edit Profile</Link></li>
                </ul>
             </nav>
           <div className="w[80%]">
           <Outlet></Outlet>
           </div>
       </div>
    );
};

export default DashboardLayout;