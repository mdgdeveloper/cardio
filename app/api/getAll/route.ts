import { query } from "@/lib/db";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        const result = await query(`SELECT  
  id,  
  date::TEXT AS date,  
  time,  
  dia1,  
  sys1,  
  pulse1,  
  dia2,  
  sys2,  
  pulse2,  
  dia3,  
  sys3,  
  pulse3,  
  arm  
FROM measures
ORDER BY date DESC, time DESC;
; `);
        return NextResponse.json(result.rows, { status: 200 });
    } catch (error) {
        console.error('Error executing query', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}  