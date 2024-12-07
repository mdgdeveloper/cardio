import AddMeasure from "@/components/add/AddMeasure"
import { addMeasure } from "@/lib/actions"

const Add = () => {
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