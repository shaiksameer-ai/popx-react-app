function InputField({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
}) {
  return (
    <div className="input-group">

      <label>
        {label}
        {required && <span className="required">*</span>}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

    </div>
  );
}

export default InputField;