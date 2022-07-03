import { useEffect, useState } from "react"

const useFetch = (url, option) => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const loadData = async () => {
      setLoading(true)

      try {
        const res = await fetch(url, option)
        const json = await res.json()

        setData(json)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }
    loadData()
  // eslint-disable-next-line
  }, [url]) 
  return { loading, error, data } 
}

export default useFetch

  