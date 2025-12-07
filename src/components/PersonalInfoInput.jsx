import FormInput from "./FormInput";
import '../styles/InfoInputDetails.css';

export default function PersonalInfoInput({ piData, setDataFunction }) {
    function setDataForField(e) {
        const field = e.target.name;
        const newData = { ...piData, [field]: e.target.value };
        setDataFunction(newData);
    }

    return (
        <div className="infoDetails">
            <FormInput
                type='text'
                labelText='Full Name'
                name='name'
                val={piData['name']}
                updateMethod={setDataForField}
            />
            <FormInput
                type='text'
                labelText='Job Title'
                name='title'
                val={piData['title']}
                updateMethod={setDataForField}
            />
            <div className="internalFormGroup">
                <FormInput
                    type='email'
                    labelText='Email Address'
                    name='email'
                    val={piData['email']}
                    updateMethod={setDataForField}
                />
                <FormInput
                    type='tel'
                    labelText='Phone Number'
                    name='phone'
                    val={piData['phone']}
                    updateMethod={setDataForField}
                />
                <FormInput
                    type='url'
                    labelText='LinkedIn Profile'
                    name='linkedin'
                    val={piData['linkedin']}
                    updateMethod={setDataForField}
                />
            </div>
            <FormInput
                type='textarea'
                labelText='Professional Summary'
                name='summary'
                val={piData['summary']}
                updateMethod={setDataForField}
            />
        </div>
    );
}