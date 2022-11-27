import * as MuiIcons from '@mui/icons-material/';
import React,{useState} from 'react';
import { SidebarData } from './sideBarData';

export default function Navbar(){
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return(
        <>
        <nav className ="nav">
        <a href="#" className="menu-bars"><MuiIcons.MenuRounded onClick={showSidebar}/></a>
        <h3>MATHOPIA</h3> 

        <ul>
            <CustomLink href="/Home">   Home</CustomLink>
            <CustomLink href="/Support">Support</CustomLink>
            <CustomLink href="/AboutUs">About Us</CustomLink>
            <CustomLink href="/ContactUs">Contact Us</CustomLink>
            <CustomLink href="/SignUp">SignUp</CustomLink>
            <CustomLink href="/Login">Login</CustomLink>      
        </ul>
        </nav>  
       

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className = 'nav-menu-items' onClick={showSidebar}>
                <li className = 'navbar-toggle'>
                    <a href = '#' className='menu-bars'>
                    <MuiIcons.CloseRounded/>
                    </a>
                </li>
                {SidebarData.map((item, index) => {
                    return(
                        <li key={index} className={item.cName}> 
                            <a href={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                            </a>
                        </li>
                    )
                })}
            </ul>
         </nav>
         </>

        
    )
}
 function CustomLink ({href, children, props}:{ href: string; children?: any; props?:any}){
    const path = window.location.pathname
    
    return (
        <li className={path === href ? "active" : ""}>
            <a href={href}{...props}>
                {children}
                </a>
        </li>
    )
 }
