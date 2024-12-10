import { query } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;

    if (!id || isNaN(Number(id))) {
        return NextResponse.json(
            { error: "Invalid ID provided" },
            { status: 400 }
        );
    }

    try {
        const result = await query(
            `SELECT  
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
      WHERE id = $1
      ORDER BY date DESC, time DESC;`,
            [id]
        );

        if (result.rows.length === 0) {
            return NextResponse.json(
                { error: "Record not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(result.rows[0], { status: 200 });
    } catch (error) {
        console.error("Error executing query", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
