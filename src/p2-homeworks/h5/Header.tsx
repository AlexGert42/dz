import React, {useState} from 'react'
import headerStyle from './stylesForH5.module.scss'
import {NavLink} from 'react-router-dom'
import {PATH} from './Routes'

type typeMenu = {
    menuClass: string,
    burgerClass: string
}

function Header() {
    const [menu, setMenu] = useState<typeMenu>({
        menuClass: headerStyle.header__burger_menu,
        burgerClass: headerStyle.header__burger
    })

    const showMemu = () => {
        if (menu.burgerClass === headerStyle.header__burger) {
            setMenu({
                menuClass: `${headerStyle.header__burger_menu} ${headerStyle.active}`,
                burgerClass: `${headerStyle.header__burger} ${headerStyle.active}`
            })
        } else {
            setMenu({
                menuClass: headerStyle.header__burger_menu,
                burgerClass: headerStyle.header__burger
            })
        }
    }
    return (
        <header className={headerStyle.header}>
            <div className={headerStyle.header__inner}>
                <h1 className={headerStyle.header__title}>dz for ignat</h1>
                <div className={headerStyle.header__menu}>

                    <nav className={menu.menuClass}>
                        <li className={headerStyle.header__item}>
                            <NavLink to={PATH.PRE_JUNIOR}>PRE JUNIOR</NavLink>
                        </li>
                        <li className={headerStyle.header__item}>
                            <NavLink to={PATH.JUNIOR}>JUNIOR</NavLink>
                        </li>
                        <li className={headerStyle.header__item}>
                            <NavLink to={PATH.JUNIOR_PLUS}>JUNIOR PLUS</NavLink>
                        </li>
                    </nav>
                    <button className={menu.burgerClass} onClick={showMemu}><span></span></button>
                </div>
            </div>
        </header>
    )
}

export default Header
//