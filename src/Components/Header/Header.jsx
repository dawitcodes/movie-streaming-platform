import { useState, useEffect, React } from 'react'
import logo from "../../assets/image/logo.png"
import { Link } from "react-router-dom"
import { Search, Bell, User, ChevronDown } from "lucide-react"
import styles from "./Header.module.css"
function Header() {
    const [isSearchOpen, setisSearchOpen] = useState(false)
    const [isProfileOpen, setisProfileOpen] = useState(false)
    //for blur 
    const [isScrolled, setisScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setisScrolled(true)
            } else {
                setisScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
            <div className={styles.container}>
                {/* logo */}
                <img className={styles.logo} src={logo} alt="" />
                {/* navigation links */}
                <nav className={styles.nav}>
                    <Link className={styles.navLink} className={styles.navLink} href="">Home</Link>
                    <Link className={styles.navLink} href="">Tv shows</Link>
                    <Link className={styles.navLink} href="">Movies</Link>
                    <Link className={styles.navLink} href="">New and Popular</Link>
                    <Link className={styles.navLink} href="">My list</Link>
                    <Link className={styles.navLink} href="">Browse by Language</Link>
                </nav >
                {/* rightsidesection */}
                < div className={styles.rightSection}>
                    {/* search */}
                    < div className={styles.searchContainer}>
                        <button
                            onClick={() => { setisSearchOpen(!isSearchOpen) }}
                            className={styles.searchButton}>
                            <Search size={20} />
                        </button>
                        {
                            isSearchOpen && (
                                <input type="text" placeholder="movie title" className={styles.searchInput} />
                            )
                        }
                    </div >
                    {/* notification */}
                    < button className={styles.iconButton} >
                        {/* notification icon */}
                        < Bell size={20} />
                        <span className={styles.notificationBagde}>4</span>
                    </button >
                    {/* profile */}
                    < div className={styles.profileContainer}>
                        <button onClick={() => { setisProfileOpen(!isProfileOpen) }}
                            className={styles.profileButton}>
                            {/* user icon */}
                            <div className={styles.profileAvator}>
                                <User size={20} />
                            </div>
                            {/* dropdown icon */}
                            <ChevronDown size={20} />
                        </button>
                        {
                            isProfileOpen && (
                                <div className={styles.profilemenu}>
                                    <Link className={styles.profileMenuItem}>Account</Link>
                                    <Link className={styles.profileMenuItem}>help Center</Link>
                                    <hr className={styles.profileMenuDivider} />
                                    <button className={styles.profileMenuItem}>Signout</button>
                                </div>
                            )
                        }
                    </div >
                </div >
            </div >
        </header >
    )
}

export default Header