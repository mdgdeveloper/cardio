export type MeasureType = {
    id: string,
    date: string,
    time: string,
    dia1: number,
    sys1: number,
    pulse1: number,
    dia2: number,
    sys2: number,
    pulse2: number,
    dia3: number,
    sys3: number,
    pulse3: number,
    arm: string
}

export type MeasureLogType = {
    id: number,
    date: Date,
    dia: number[],
    sys: number[],
    pulse: number[]
}