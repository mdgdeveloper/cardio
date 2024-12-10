import { MeasureLogType, MeasureType } from "@/types/measure"

export const normalizeMainData = (measure: MeasureType): MeasureLogType => {
    // Function to generate the data normalized 
    const dia = [measure.dia1, measure.dia2, measure.dia3]
    const sys = [measure.sys1, measure.sys2, measure.sys3]
    const pulse = [measure.pulse1, measure.pulse2, measure.pulse3]

    return {
        id: parseInt(measure.id),
        date: new Date(measure.date),
        dia,
        sys,
        pulse
    }
}

export const normalizeDate = (currentDate: string): string => {

    const date = new Date(currentDate)
    // Extract day, month, and year 
    const day = String(date.getUTCDate()).padStart(2, '0'); const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    // Months are 0-based 
    const year = date.getUTCFullYear();
    // Format as DD/MM/YYYY 
    return `${day}/${month}/${year}`;
}


export const getColor = (dia: number, sys: number): string => {
    // Function to return bg color in Tailwindcss: 
    // If diastolic and systolic values are considered normal, green, otherwise yellow or red
    if (dia < 80 && sys < 120) return 'bg-green-500'
    if (dia < 90 && sys < 130) return 'bg-green-300'
    if (dia < 100 && sys < 140) return 'bg-yellow-500'
    if (dia < 120 && sys < 180) return 'bg-orange-500'
    return 'bg-red-500'

}