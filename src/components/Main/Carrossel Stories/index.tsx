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
            url: "https://images.unsplash.com/photo-1541497613813-0780960684f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            time: Math.floor(Math.random() * (31 - 0 + 1)) + 0,
        },
    },

    { 
        url: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        name: "gailharris",

        feed:{
            url: "https://images.unsplash.com/photo-1660656387375-ea1ccefb91f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExMHxGem8zenVPSE42d3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
            time: Math.floor(Math.random() * (31 - 0 + 1)) + 0,
        },
    },

    {
        url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        name: "jessia_Hansen",

        feed:{
            url: "https://images.unsplash.com/photo-1606593229618-5d6a0e9ce65a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHJpbyUyMGRlJTIwamFuZWlyb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            time: Math.floor(Math.random() * (31 - 0 + 1)) + 0,
        },
    },

    {
        url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        name: "Kimberly@Robi",

        feed:{
            url: "https://images.unsplash.com/photo-1661796428215-04fc2830aae6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
            time: Math.floor(Math.random() * (31 - 0 + 1)) + 0,
        },
    },

    {
        url: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        name: "smithJermaine",

        feed:{
            url: "https://images.unsplash.com/photo-1661861622628-e033af571c0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            time: Math.floor(Math.random() * (31 - 0 + 1)) + 0,
        },
    },
    
    {
        url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        name: "jessicamoore",

        feed:{
            url: "https://images.unsplash.com/photo-1661846141447-c39abc5ff583?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            time: Math.floor(Math.random() * (31 - 0 + 1)) + 0,
        },
    },

    {
        url: 'https://images.unsplash.com/photo-1628493771937-278b05b46b62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        name: "anaFondes",

        feed:{
            url: "https://images.unsplash.com/photo-1661638563864-7ade2d3ec500?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
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