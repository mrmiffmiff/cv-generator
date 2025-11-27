import FormInput from "./FormInput";

export default function EducationInstanceInput({ eduObj, setDataFunction, closeFunction }) {
    function setDataForField(e) {
        const field = e.target.name;
        const newObj = { ...eduObj, [field]: e.target.value };
        setDataFunction(eduObj.id, newObj);
    }

    return (
        <>
            <FormInput
                type='text'
                labelText='School Name'
                name='schoolName'
                val={eduObj['schoolName']}
                updateMethod={setDataForField}
            />
            <FormInput
                type='text'
                labelText='Degree Type'
                name='degree'
                val={eduObj['degree']}
                updateMethod={setDataForField}
            />
            <FormInput
                type='text'
                labelText='Focus/Major'
                name='focus'
                val={eduObj['focus']}
                updateMethod={setDataForField}
            />
            <FormInput
                type='date'
                labelText='Start Date'
                name='startDate'
                val={eduObj['startDate']}
                updateMethod={setDataForField}
            />
            <FormInput
                type='date'
                labelText='End Date'
                name='endDate'
                val={eduObj['endDate']}
                updateMethod={setDataForField}
            />
            <button
                type="button"
                onClick={closeFunction}
            >
                Save
            </button>
        </>
    );
}