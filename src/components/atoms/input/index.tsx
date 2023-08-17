export default function Input(props: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value?: any;
  onChange?: (e: any) => void;
  error?: string;
  optional?: boolean;
  onKeyDown?: any;
}) {
  return (
    <div>
      <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
        {props.label} {props.optional ? "(opsional)" : ""}
      </label>
      <input
        type={props.type || "text"}
        onKeyDown={props.onKeyDown}
        name={props.name}
        autoComplete="off"
        value={props.value}
        onChange={props.onChange}
        className={`bg-gray-50 border ${
          props.error ? "border-red-500" : "border-gray-300"
        } text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
        placeholder={props.placeholder}
      />
      {props.error && (
        <span className="text-red-500 text-sm">{props.error}</span>
      )}
    </div>
  );
}
