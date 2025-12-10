import FormInput from "./FormInput";
import '../styles/InfoInputDetails.css';

export default function ExperienceInstanceInput({ expObj, setDataFunction, closeFunction }) {
    function setDataForField(e) {
        const { name, type, value, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        const newObj = { ...expObj, [name]: newValue };

        if (name === 'current' && checked) {
            newObj.endDate = '';
        }

        setDataFunction(expObj.id, newObj);
    }

    return (
        <div className="infoDetails">
            <FormInput
                type='text'
                labelText='Company/Organization Name'
                name='orgName'
                val={expObj['orgName']}
                updateMethod={setDataForField}
            />
            <FormInput
                type='text'
                labelText='Job Title'
                name='title'
                val={expObj['title']}
                updateMethod={setDataForField}
            />
            <div className="internalFormGroup">
                <FormInput
                    type='date'
                    labelText='Start Date'
                    name='startDate'
                    val={expObj['startDate']}
                    updateMethod={setDataForField}
                />
                <FormInput
                    type='date'
                    labelText='End Date'
                    name='endDate'
                    val={expObj['endDate']}
                    updateMethod={setDataForField}
                    disabled={expObj['current']}
                />
                <div className="formCheckbox">
                    <FormInput
                        type='checkbox'
                        labelText='Current'
                        name='current'
                        val={expObj['current']}
                        updateMethod={setDataForField}
                    />
                </div>
            </div>
            <FormInput
                type='textarea'
                labelText='Description'
                name='description'
                val={expObj['description']}
                updateMethod={setDataForField}
            />
            <button
                type="button"
                onClick={closeFunction}
                className="form-save-button"
            >
                Save
            </button>
        </div>
    );
}