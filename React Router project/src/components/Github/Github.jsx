import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    let data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/mohitpandeycode')
    //    .then(response => response.json())
    //    .then(data =>{
    //        setData(data)
    //    })

    // }, [])
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl '>Github Followers: {data.followers}
        <img src={data.avatar_url} alt="picture" width={300}/>
        </div>
    )
}

export default Github
export const GetUserData = async()=>{
    let response = await fetch('https://api.github.com/users/mohitpandeycode')
    return response.json()

}