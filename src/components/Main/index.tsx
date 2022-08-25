import { CarrosselStors } from "./Carrossel Storys";
import './style.scss'

export function Main(){
    return(
        <main>
            <div className="main-container">
                <div className="storys-feed">
                    <CarrosselStors />
                </div>

                <div className="infos">
                    <h1>Hello World</h1>
                </div>
            </div>
        </main>
    )
}