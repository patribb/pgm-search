'use client'
import { useState, useEffect } from "react"
import {GiWorld} from 'react-icons/gi'

const CountryLookup = () => {
    const [country, setCountry] = useState('Spain')

    useEffect(() => {
        fetch('http://ip-api.com/json/')
        .then(res => res.json()).then(data => setCountry(data.country))
    },[country])

  return (
    <div className="flex items-center space-x-2">
        <GiWorld className="fill-zinc-600" /> 
        <p>{country}</p>
    </div>
  )
}
export default CountryLookup