import FormInput from "./FormInput";
import '../styles/InfoInputDetails.css';

export default function EducationInstanceInput({ eduObj, setDataFunction, closeFunction }) {
    function setDataForField(e) {
        const { name, type, value, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        const newObj = { ...eduObj, [name]: newValue };

        if (name === 'current' && checked) {
            newObj.endDate = '';
        }

        setDataFunction(eduObj.id, newObj);
    }

    return (
        <div className="infoDetails">
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
            <div className="internalFormGroup">
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
                    disabled={eduObj['current']}
                />
                <div className="formCheckbox">
                    <FormInput
                        type='checkbox'
                        labelText='Current'
                        name='current'
                        val={eduObj['current']}
                        updateMethod={setDataForField}
                    />
                </div>
            </div>
            <button
                type="button"
                onClick={closeFunction}
                className="form-save-button"
            >
                Save
            </button>
        </div >
    );
}