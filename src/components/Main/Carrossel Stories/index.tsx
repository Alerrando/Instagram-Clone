import { useState } from "react"
import './style.scss'

export const storiesInfos = [
    {
        url: 'https://avatars.githubusercontent.com/u/90356500?v=4',
        name: "My Story",

        feed:{
            url: "https://images.unsplash.com/photo-1660856514115-3e6d43e51021?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            time: Math.floor(Math.random() * (31 - 0 + 1)) + 0,
        }
    },

    {
        url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        name: "sara_wild",

        feed:{
            url: "https://images.unsplash.com/photo-1660856514115-3e6d43e51021?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            time: Math.floor(Math.random() * (31 - 0 + 1)) + 0,
        },
    },

    { 
        url: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        name: "gailharris",

        feed:{
            url: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            time: Math.floor(Math.random() * (31 - 0 + 1)) + 0,
        },
    },

    {
        url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        name: "jessia_Hansen",

        feed:{
            url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            time: Math.floor(Math.random() * (31 - 0 + 1)) + 0,
        },
    },

    {
        url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        name: "Kimberly@Robi",

        feed:{
            url: "https://images.unsplash.com/photo-1660856514115-3e6d43e51021?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            time: Math.floor(Math.random() * (31 - 0 + 1)) + 0,
        },
    },

    {
        url: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        name: "smithJermaine",

        feed:{
            url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            time: Math.floor(Math.random() * (31 - 0 + 1)) + 0,
        },
    },
    
    {
        url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        name: "jessicamoore",

        feed:{
            url: "https://images.unsplash.com/photo-1660856514115-3e6d43e51021?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            time: Math.floor(Math.random() * (31 - 0 + 1)) + 0,
        },
    },

    
]


export function CarrosselStories(){

    return(
        <div className="stories-container">
            {storiesInfos.map((storie, index) => (
                <div className="stories" key={index}>
                    <div className="stories-img">
                        <div className="storie-open"></div>
                        <img src={storiesInfos[index].url} alt="" />
                    </div>

                    <p translate="no" className="name-storie">{storiesInfos[index].name}</p>
                </div>
            ))}
        </div>
    )
}