import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../context/authContext/AuthContext';
import logo from '../../assets/logoimg.png'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const links = <>
        <NavLink className='btn' to={'/'}><button >home</button></NavLink> 
        <NavLink className='btn' to={'/myApplications'}><button >My Applications</button></NavLink>
    </>
    return (
        <div className="navbar bg-base-100 w-11/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to={'/'} className="flex justify-center items-center gap-2 font-bold text-2xl">
                    <img src={logo} alt="" />
                    <h2>Job Portal</h2>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {user? <><button onClick={logOut} className='btn'>logOut</button></>: <>
                    <Link className='mr-4' to={'/login'}><button>Login</button></Link>
                    <Link to={'/register'}><button>Register</button></Link>
                </>
                }
                
            </div>
        </div>
    );
};

export default Navbar;