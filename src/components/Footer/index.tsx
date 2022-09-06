import { MagnifyingGlass, House, MonitorPlay, Bag } from 'phosphor-react'
import './style.scss';

export function Footer(){
    return(
        <footer className='footer-princ'>
            <div className="container-princ-footer">
                <House className='page-current' weight="bold" />
                <MagnifyingGlass weight="bold" />
                <MonitorPlay weight="bold" />
                <Bag weight="bold" />
                <img src="https://avatars.githubusercontent.com/u/90356500?v=4" alt="icon de perfil" />
            </div>
        </footer>
    )
}