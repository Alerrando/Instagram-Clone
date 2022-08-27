import { CarrosselStories } from './Carrossel Stories'
import './style.scss'

export function Main(){
    return(
        <main>
            <div className="main-container">
                <div className="stories-feed">
                    <CarrosselStories />
                </div>

                <div className="infos">
                    <h1>Hello World</h1>
                </div>
            </div>
        </main>
    )
}