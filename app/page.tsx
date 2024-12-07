import ButtonLink from "@/components/ui/ButtonLink";

export default function Home() {
  return (
    <main className="h-screen bg-gray-50 p-10">
      <div className="flex flex-col gap-3">
        <ButtonLink label="Añadir nueva medida" link="/add" image="add.png" />
        <ButtonLink label="Generar informe" link="/logs" image="report.png" color="bg-green-600" />
      </div>

    </main>
  );
}
