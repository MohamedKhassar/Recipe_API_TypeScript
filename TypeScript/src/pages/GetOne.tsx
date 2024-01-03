import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const GetOne = () => {
    const { id } = useParams()
    interface Data{
        id:number,
        body:string
    }
    const [data,setData]=useState<Data>()
    useEffect(() => {
        const getOne = async () => {
            const res = await axios.get(`http://localhost:3000/comments/${id}`)
            setData(res.data)
        }
        getOne()
    })
    return (
        <div>
            {data?.id}
            {data?.body}
        </div>
    )
}

export default GetOne


