"use server";
import { redirect } from 'next/navigation'
import { query } from "@/lib/db";
// Server Actions

// Create a Server action to handle the form submission. This action will be called when the user submits the form. The action will receive the form data and will send it to the server.
export const addMeasure = async (formData: FormData) => {
    // Send the form data to the server

    // Get the form data
    // Get date
    const date1 = formData.get("date1") as string

    // Get time
    const time1 = formData.get("time1") as string

    // Get values for measure 1 (dia, sys, pulse)
    const dia1 = formData.get("dia1") as string
    const sys1 = formData.get("sys1") as string
    const pulse1 = formData.get("pulse1") as string

    // Get values for measure 2 (dia, sys, pulse)
    const dia2 = parseInt(formData.get("dia2") as string)
    const sys2 = parseInt(formData.get("sys2") as string)
    const pulse2 = parseInt(formData.get("pulse2") as string)

    // Get values for measure 3 (dia, sys, pulse)
    const dia3 = parseInt(formData.get("dia3") as string)
    const sys3 = parseInt(formData.get("sys3") as string)
    const pulse3 = parseInt(formData.get("pulse3") as string)

    // Insert the data into the PostgreSQL database

    const SQLQUERY = `INSERT INTO measures (date, time, dia1, sys1, pulse1, dia2, sys2, pulse2, dia3, sys3, pulse3) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`

    const result = await query(SQLQUERY, [date1, time1, dia1, sys1, pulse1, dia2, sys2, pulse2, dia3, sys3, pulse3])

    // Move to the main page using NextJs
    redirect('/')

    // Return the result
    return result

}