import { MeasureLogType, MeasureType } from '@/types/measure'
import Link from 'next/link';
import React from 'react'

type Props = {
    measure: MeasureType;
}

const MeasureInfo = ({ measure }: Props) => {
    return (
        <Link href="/logs/[id]" as={`/logs/${measure.id}`}>
            <div className="flex gap-2 mb-3">
                <div className="w-2 bg-green-500"></div>
                <div>
                    <div>{measure.date}</div>
                    <div className="flex gap-1">
                        <div className="border-r-teal-500 border-r pr-2 mr-2">
                            <div className="text-2xl font-semibold">{measure.dia1}</div>
                            <div className="text-xl font-semibold">{measure.sys1}</div>
                        </div>
                        <div className="border-r-teal-500 border-r pr-2 mr-2">
                            <div className="text-2xl font-semibold">{measure.dia2}</div>
                            <div className="text-xl font-semibold">{measure.sys2}</div>
                        </div>
                        <div className="border-r-teal-500 border-r pr-2 mr-2">
                            <div className="text-2xl font-semibold">{measure.dia3}</div>
                            <div className="text-xl font-semibold">{measure.sys3}</div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default MeasureInfo