import { CarrosselStories } from './Carrossel Stories'
import { InfosMain } from './Infos Main'
import './style.scss'

export function Main(){
    return(
        <main>
            <div className="main-container">
                <div className="stories-feed">
                    <CarrosselStories />
                </div>

                <div className="container-infos">
                    <InfosMain />
                </div>
            </div>
        </main>
    )
}