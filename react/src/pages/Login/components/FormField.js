const FormField = ({ id, label, type, value, onChange, error, required, minLength }) => {
    return <>
        <label htmlFor={id}>{label}</label>
        <input
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            required={required}
            minLength={minLength}
        />

        {error && (<div className="error-message">{error}</div>)}
    </>
};

export default FormField;