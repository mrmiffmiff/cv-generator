export default function FormInput({ type, labelText, name, val, autoUpdate, updateMethod }) {
    if (type === 'text') {
        return (
            <label>
                {labelText}:
                <input
                    type='text'
                    name={name}
                    value={val}
                    onChange={autoUpdate ? updateMethod : null}
                />
            </label>
        );
    }
}