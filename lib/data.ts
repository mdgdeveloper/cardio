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