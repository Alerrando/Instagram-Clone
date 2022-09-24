import { User } from "phosphor-react";
import './style.scss'

export function InfosMain(){
    return(
        <header>
            <div className="user">
                <img src="https://avatars.githubusercontent.com/u/90356500?v=4" alt="photo of alerrando" />
            </div>

            <div className="header-info">
                <p>alerrandob</p>
                <p>Alerrando Breno</p>
            </div>

            <a href="#" className="change">Change</a>
        </header>
    )
}