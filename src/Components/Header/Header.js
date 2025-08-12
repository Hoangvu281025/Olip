import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import  Styles  from "./Header.module.css"


export default function Header() {
    const [isOpenCategory, setIsOpenCategory] = useState(false);
    const [isOpenCart, setIsOpenCart] = useState(false);
  return (
    <header className={Styles.header}>         
        <div className="pad_l_r">
            <nav className={Styles.nav_header}>
                <div className={` ${Styles.bars_header} ${Styles.bars_header_none} `} onClick={() => setIsOpenCategory(!isOpenCategory)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={Styles.icon} fill="currentColor" viewBox="0 0 24 24" role="presentation">
                        <path fill-rule="evenodd" d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"/>
                    </svg>
                </div>
                <div className={`${Styles.category_header} ${isOpenCategory ? Styles.open_category_header : ''}`}>
                    <div className="pad_l_r">
                        <ul>
                            <li><Link to="/product">Cửa hàng</Link></li>
                            <li><Link to="/about">Học Hỏi</Link></li>
                            <li><Link to="/oder">Đặt Mua</Link></li>
                        </ul>
                    </div>
                </div>
                <div className={Styles.logo_header}>
                    <Link to="/"><img src="/logo.png" alt="" className={Styles.logo}/></Link>
                </div>
                <div className={Styles.link_icon_header}>
                    <div className={Styles.login_header}>
                        <Link to="/login">
                            <svg xmlns="http://www.w3.org/2000/svg" className={Styles.icon} viewBox="0 0 55 56" fill="#14433D" role="presentation">
                                <path fill-rule="evenodd" d="M24.988.032C11.23.032.038 11.225.038 24.982s11.192 24.951 24.95 24.951 24.951-11.194 24.951-24.951S38.746.032 24.988.032zm14.041 40.941c-1.218-7.206-6.359-12.752-12.702-13.442 4.376-.649 7.738-4.411 7.738-8.968 0-5.012-4.064-9.076-9.077-9.076s-9.076 4.064-9.076 9.076c0 4.557 3.361 8.319 7.737 8.968-6.343.69-11.484 6.236-12.702 13.442-4.443-3.905-7.255-9.624-7.255-15.991 0-11.742 9.553-21.296 21.296-21.296 11.743 0 21.296 9.554 21.296 21.296 0 6.367-2.812 12.086-7.255 15.991z"></path>
                            </svg>
                        </Link>
                    </div>
                    <div className={Styles.cart_header} onClick={() => setIsOpenCart(!isOpenCart)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={Styles.icon} viewBox="0 0 55 56" fill="#14433D" role="presentation">
                            <path fill-rule="evenodd" d="M53.851 28.943c0 .482-.331.872-.74.872h-29.81c-.353 0-.657-.293-.727-.701L18.876 7.325c-.098-.579.31-1.104.808-1.039l34.482 4.515c.375.049.659.423.659.867l-.974 17.275zM19.75 33.844h31.671c1.089 0 1.972.889 1.972 1.983 0 1.096-.883 1.983-1.972 1.983H19.75c-2.416 0-4.429-1.809-4.803-4.308L9.897 5.894c-.1-.548-.575-.945-1.128-.945H2.146c-1.089 0-1.971-.888-1.971-1.983 0-1.095.882-1.983 1.971-1.983h6.623c2.456 0 4.561 1.764 5.006 4.193l5.057 27.643.012.079c.077.54.466.946.906.946zm5.49 5.95c2.8 0 5.07 2.283 5.07 5.099 0 2.816-2.27 5.099-5.07 5.099-2.799 0-5.069-2.283-5.069-5.099 0-2.816 2.27-5.099 5.069-5.099zm20.278 0c2.8 0 5.069 2.283 5.069 5.099 0 2.816-2.269 5.099-5.069 5.099s-5.069-2.283-5.069-5.099c0-2.816 2.269-5.099 5.069-5.099z"></path>
                        </svg>
                    </div>
                </div>



                <div className={`${Styles.cart_header} ${isOpenCart ? Styles.open_cart_header : ''}`}>
                    <div className={Styles.cart_header_content}>

                    </div>
                </div>
            </nav>
        </div>
    </header>
    );
}