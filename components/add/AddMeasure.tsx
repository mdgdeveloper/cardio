"use client";
import Link from 'next/link';
import React, { useEffect } from 'react'
import { useState } from 'react'

type Props = {
    num: number
}

const AddMeasure = ({ num }: Props) => {
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")

    const currentDate = React.useMemo(() => new Date(), [])
    const currentTime = React.useMemo(() => currentDate.getHours() + ":" + currentDate.getMinutes(), [currentDate])

    useEffect(() => {
        setDate(currentDate.toISOString().split("T")[0])
        setTime(currentTime)
    }, [currentDate, currentTime])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        if (name === `date${num}`) setDate(value)
        if (name === `time${num}`) setTime(value)
    }

    const inputClassName = "h-10 rounded border-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
    const inputNumClassName = "h-10 w-4/12 text-xl px-2 rounded border-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
    return (
        <div className="flex flex-col p-10 h-screen" id={`measure-${num}`}>
            <label className="m-0 p-0" htmlFor='date'>Fecha</label>
            <input type="date" name={`date${num}`} className={inputClassName} value={date} onChange={handleChange} />
            <label>Hora</label>
            <input type="time" name={`time${num}`} className={inputClassName} value={time} onChange={handleChange} />
            <label>Diastolica</label>
            <input type="number" name={`dia${num}`} className={inputNumClassName} />
            <label>Sistolica</label>
            <input type="number" name={`sys${num}`} className={inputNumClassName} />
            <label>Pulso</label>
            <input type="number" name={`pulse${num}`} className={inputNumClassName} />
            {num < 3 ? <Link href={`#measure-${num + 1}`}><div className="bg-blue-600 rounded shadow p-3 text-white font-semibold text-center">Siguiente medida</div></Link> : <button type="submit" className="bg-slate-700 text-white font-semibold rounded shadow w-full p-3 mb-5">Añadir medida</button>}

        </div>
    )
}

export default AddMeasure