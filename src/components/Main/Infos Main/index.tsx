import { User } from "phosphor-react";
import './style.scss'

export function InfosMain(){
    return(
        <header>
            <div className="user">
                <div className="outline"></div>
                <User weight="bold" />
            </div>

            <div className="header-info">
                <p>alerrandob</p>
                <p>Alerrando Breno</p>
            </div>

            <a href="#">Mudar</a>
        </header>
    )
}