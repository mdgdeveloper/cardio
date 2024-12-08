import ButtonLink from "@/components/ui/ButtonLink";
import { normalizeDate } from "@/lib/data";
import { MeasureType } from "@/types/measure";

export default async function Home() {

  // Get all measures from /api/getAll
  const getMeasures = async () => {
    const response = await fetch('http://localhost:3000/api/getAll')
    const data = await response.json()
    return data
  }

  const measures: MeasureType[] = await getMeasures()


  return (
    <main className="h-screen bg-gray-50 p-10">
      <div className="flex flex-col gap-3">
        <ButtonLink label="Añadir nueva medida" link="/add" image="add.png" />
        <ButtonLink label="Generar informe" link="/logs" image="report.png" color="bg-green-600" />
      </div>
      <div className="text-xl font-semibold mt-3 mb-1 border-b border-b-gray-400">Últimas medidas</div>
      <div>{measures.map((measure, key) => (<div key={key}>{normalizeDate(measure.date)}</div>))}</div>
    </main>
  );
}
