import FormInput from "./FormInput";

export default function PersonalInfoInput({ piData, setDataFunction }) {
    function setDataForField(e) {
        const field = e.target.name;
        const newData = { ...piData, [field]: e.target.value };
        setDataFunction(newData);
    }

    return (
        <>
            <FormInput
                type='text'
                labelText='Full Name'
                name='name'
                val={piData['name']}
                updateMethod={setDataForField}
            />
            <br />
            <FormInput
                type='text'
                labelText='Job Title'
                name='title'
                val={piData['title']}
                updateMethod={setDataForField}
            />
            <br />
            <FormInput
                type='email'
                labelText='Email Address'
                name='email'
                val={piData['email']}
                updateMethod={setDataForField}
            />
            <br />
            <FormInput
                type='tel'
                labelText='Phone Number'
                name='phone'
                val={piData['phone']}
                updateMethod={setDataForField}
            />
            <br />
            <FormInput
                type='url'
                labelText='LinkedIn Profile'
                name='linkedin'
                val={piData['linkedin']}
                updateMethod={setDataForField}
            />
            <br />
            <FormInput
                type='textarea'
                labelText='Professional Summary'
                name='summary'
                val={piData['summary']}
                updateMethod={setDataForField}
            />
        </>
    );
}