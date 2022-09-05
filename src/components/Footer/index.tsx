import { MagnifyingGlass, House, MonitorPlay, Bag } from 'phosphor-react'
import './style.scss';

export function Footer(){
    return(
        <footer className='footer-princ'>
            <div className="container-princ-footer">
                <House weight="bold" />
                <MagnifyingGlass weight="bold" />
                <MonitorPlay weight="bold" />
                <Bag weight="bold" />
                <House weight="bold" />
            </div>
        </footer>
    )
}