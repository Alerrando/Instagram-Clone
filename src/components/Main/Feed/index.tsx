import './style.scss'
import { storiesInfos } from '../Carrossel Stories';
import { DotsThree } from 'phosphor-react';

export function Feed(){
    return (
        <div className='main-container-feed'>
            <header>
                <div className="header-info">
                    <div className="feed-img">
                        <img src={storiesInfos[1].url} alt="" />
                    </div>

                    <p>Sara Wild</p>
                </div>
                <DotsThree size={32} weight="bold" />
            </header>
        </div>
    )
}