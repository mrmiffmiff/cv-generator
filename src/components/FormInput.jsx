export default function FormInput({ type, labelText, name, val, updateMethod }) {
    const commonProps = {
        name,
        value: val,
        onChange: updateMethod
    };

    if (type === 'textarea') {
        return (
            <label>
                {labelText}:
                <br />
                <textarea {...commonProps} />
            </label>
        )
    }

    return (
        <label>
            {labelText}:&nbsp;
            <input
                type={type}
                placeholder={labelText}
                {...commonProps}
            />
        </label>
    );
}