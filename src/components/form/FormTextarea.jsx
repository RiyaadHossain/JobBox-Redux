export default function FormTextarea({
  id,
  rows,
  name,
  value,
  label,
  placeholder,
  divClass,
  inputClass,
}) {
  return (
    <div className={`flex flex-col items-start mb-4 ${divClass}`}>
      <label
        htmlFor={id}
        className="text-[13px] font-medium leading-5 ml-2 mb-2"
      >
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        placeholder={placeholder}
        className={`w-full ${inputClass}`}
      />
    </div>
  );
}
