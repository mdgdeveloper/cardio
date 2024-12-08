import { query } from "@/lib/db";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        const result = await query('SELECT * FROM measures');
        return NextResponse.json(result.rows, { status: 200 });
    } catch (error) {
        console.error('Error executing query', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}  