import AddMeasure from "@/components/add/AddMeasure"
import { addMeasure } from "@/lib/actions"


const Add = () => {


    const addModifiedMeasure = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        try {
            await addMeasure(formData)

        } catch (e) {
            console.error(e)
        }
    }

    return (
        <div>
            <h2>Agregar nueva medida</h2>
            <div>
                <form action={addMeasure}>
                    <AddMeasure num={1} />
                    <AddMeasure num={2} />
                    <AddMeasure num={3} />
                </form>
            </div>
        </div>
    )
}

export default Add