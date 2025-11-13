import FormInput from "./FormInput";

export default function PersonalInfoInput({ piData, setDataFunction }) {
    function setDataForField(e) {
        const field = e.target.name;
        const newData = { ...piData, [field]: e.target.value };
        setDataFunction(newData);
    }

    return (
        <FormInput
            type='text'
            labelText='Full Name'
            name='name'
            val={piData['name']}
            autoUpdate={true}
            updateMethod={setDataForField}
        />
    );
}