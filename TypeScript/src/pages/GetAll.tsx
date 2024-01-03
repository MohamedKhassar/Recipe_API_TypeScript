import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function GetAll() {
  interface Data {
    body: string,
    id:number
  }
  const [data, setData] = useState<Data []>()

  useEffect(() => {
    const getAll = async () => {
      const res = await axios.get("http://localhost:3000/comments")
      setData(res?.data)
    }
    getAll()
  }, [])

  return (
    <>
      {data?.map(d => {
        return (
          <div>
            <h1>{d.body}</h1>
            <Link to={`/${d.id}`}>{d.body}</Link>
          </div>
        )
      })}
    </>
  )
}

export default GetAll
