import React from 'react'
import { Link } from 'react-router-dom'


const Nav = ({ items, selected, setChosenCom }) => {

    const selectOption = (e, label) => {
        e.preventDefault()
        setChosenCom(label)
    }
    return (
        <ul className='nav'>

            <div className='logo'>
                <img src="Freddys_Logo.svg" alt="" />
            </div>

            {
                items.map(item => {

                    return(
                        <li
                            className={item.key === selected ? 'active' : null}
                            key={item.key}
                        >
                            <Link
                                to="#"
                                onClick={e => selectOption(e, item.key)}
                            >
                                {item.label}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Nav