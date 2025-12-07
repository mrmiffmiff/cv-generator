import '../styles/FormInput.css'

export default function FormInput({ type, labelText, name, val, updateMethod, className = '', disabled = false }) {
    const baseProps = { name, onChange: updateMethod, disabled };

    if (type === 'checkbox') {
        return (
            <label className={`form-field ${className}`}>
                <span className='form-label'>{labelText}</span>
                <input type='checkbox' checked={!!val} {...baseProps} />
            </label>
        );
    }

    const commonProps = { ...baseProps, value: val };
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