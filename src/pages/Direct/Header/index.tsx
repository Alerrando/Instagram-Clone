import { CaretDown, PlusCircle, Heart, PaperPlaneTilt, House, Compass, User, MagnifyingGlass, ArrowLeft, Plus } from 'phosphor-react'
import { Link } from 'react-router-dom'
import './style.scss'

export function Header(){
    return(
        <header className='header-princ direct'>
            <div className="container-header">
                <div className="img-Instagram desktop direct">
                    <img src="https://www.svgrepo.com/show/353903/instagram.svg" alt="Instagram picture written" />
                    <CaretDown size={16} weight="bold"/>
                </div>

                <div className='search-container desktop' id="search-container">
                    <div className='search'>
                        <MagnifyingGlass size={24} weight="bold" />
                        <input type="text" name="search" id="search" placeholder='Search' />
                    </div>
                </div>

                <div className='mobile'>
                    <header>
                        <Link to="/">
                            <ArrowLeft size={24} weight="bold"/>
                        </Link>
                        <h2 translate='no'>alerrandob</h2>

                        <Link to="/direct/new-message">
                            <Plus size={32} weight="bold" />
                        </Link>
                        
                    </header>
                </div>

                <nav className='desktop nav-direct'>
                    <ul>
                        <Link to="/">
                            <House size={24} weight="bold" className="desktop" />
                        </Link>
                        <Link to="/direct">
                            <PaperPlaneTilt size={24} weight="bold" className='page-current' />
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