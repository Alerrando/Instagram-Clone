import { CaretDown, PlusCircle, Heart, PaperPlaneTilt } from 'phosphor-react'
import './style.scss'

export function Header(){
    return(
        <header>
            <div className="container-header">
                <div className="img-Instagram">
                    <img src="https://www.svgrepo.com/show/353903/instagram.svg" alt="Instagram picture written" />
                    <CaretDown size={16} weight="bold" />
                </div>

                <nav>
                    <PlusCircle size={24} weight="bold" />
                    <Heart size={24} weight="bold" />
                    <PaperPlaneTilt size={24} weight="bold" />
                </nav>
            </div>
        </header>
    )
}