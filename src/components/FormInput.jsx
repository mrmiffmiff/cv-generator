import '../styles/FormInput.css'

export default function FormInput({ type, labelText, name, val, updateMethod, className = '' }) {
    const commonProps = {
        name,
        value: val,
        onChange: updateMethod
    };

    const isTextArea = type === 'textarea';

    return (
        <label className={`form-field ${className}`}>
            <span className="form-label">{labelText}: </span>
            {isTextArea ? (
                <textarea className="form-control" {...commonProps} />
            ) : (
                <input
                    className="form-control"
                    type={type}
                    placeholder={labelText}
                    {...commonProps}
                />
            )}
        </label>
    );
}