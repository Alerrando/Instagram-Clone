import { ArrowLeft } from "phosphor-react";
import './style.scss';

export function NewMessage(){
    return(
        <>
            <header className="newMessage-header">
                <div className="container-header">
                    <div className="title-newMessage">
                        <ArrowLeft size={32} weight="bold" />

                        <h2 className="h2">New Message</h2>
                    </div>

                    <span>Chat</span>
                </div>
            </header>
        </>
    )
}