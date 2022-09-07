import { CaretDown, PlusCircle, Heart, PaperPlaneTilt, House, Compass, User, MagnifyingGlass } from 'phosphor-react'
import { Link } from 'react-router-dom'
import './style.scss'

export function Header(){
    return(
        <header>
            <div className="container-header">
                <div className="img-Instagram">
                    <img src="https://www.svgrepo.com/show/353903/instagram.svg" alt="Instagram picture written" />
                    <CaretDown size={16} weight="bold"/>
                </div>

                <div className='search-container desktop' id="search-container">
                    <div className='search'>
                        <MagnifyingGlass size={24} weight="bold" />
                        <input type="text" name="search" id="search" placeholder='Search' />
                    </div>
                </div>

                <nav>
                    <ul>
                        <House size={24} weight="bold" className="desktop page-current" />
                        <Link to="/direct">
                            <PaperPlaneTilt size={24} weight="bold" />
                        </Link>
                        <PlusCircle size={24} weight="bold" />
                        <Compass size={24} weight="bold" className="desktop" />
                        <Heart size={24} weight="bold" />
                        <User size={24} weight="bold" className="desktop" />
                    </ul>
                </nav>
            </div>
        </header>
    )
}