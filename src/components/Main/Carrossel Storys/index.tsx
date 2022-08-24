import { useState } from "react"
import './style.scss'

const storysInfos = [
    {
        url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        name: "My Story",
    },

    {
        url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        name: "Sara Whild",
    },

    { 
        url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        name: "Sara Whild",
    },
    {
        url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        name: "Sara Whild",
    },
    
]


export function CarrosselStors(){

    return(
        <div className="storys-container">
            {storysInfos.map((story, index) => (
                <div className="storys">
                    <div className="storys-img">
                        <img src={storysInfos[index].url} alt="" />
                    </div>

                    <p className="name-story">{storysInfos[index].name}</p>
                </div>
            ))}
        </div>
    )
}