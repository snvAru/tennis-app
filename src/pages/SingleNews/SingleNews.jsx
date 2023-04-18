import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import s from "./SingleNews.module.scss"

const endpoint = process.env.REACT_APP_ENDPOINT || "";


function SingleNews () {
    const [oneNews, setOneNews] = useState({})

    //it is a new hook, firts step is destructurization to get id (u can check why it is called so in Router)
    const {newsId} = useParams()

    useEffect( () => {
        const getData = async () => {
            const response = await fetch(`${endpoint}/cards/${newsId}`)
            const data = await response.json()
            setOneNews(data)
        }
        getData()
    }, [newsId])


    return (
        <div>
            {oneNews?.content && <div className={s.content}> {oneNews.content} </div>}
        </div>
    )
}
export default SingleNews