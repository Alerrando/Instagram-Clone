import { CarrosselStories } from './Carrossel Stories'
import { InfosMain } from './Infos Main'
import './style.scss'
import { Suggestion } from './Suggestion'

export function Main(){
    return(
        <main>
            <div className="main-container">
                <div className="stories-feed">
                    <CarrosselStories />
                </div>

                <div className="container-infos">
                    <InfosMain />
                    <Suggestion />
                </div>
            </div>
        </main>
    )
}