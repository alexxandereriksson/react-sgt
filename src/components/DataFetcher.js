import React, { useState, useEffect } from 'react'
import DataInfo from './DataInfo'

const DataFetcher = ({ children }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/data.json')
            const data = await response.json()
            setData(data)
        }

        fetchData()
    }, [])

    return(
    <DataInfo.Provider
        value={data}>
        {children}
    </DataInfo.Provider>
    )
}

export default DataFetcher
