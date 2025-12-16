export default function Button({ children, className = '', ...props }) {
  return (
    <button
      className={"inline-flex items-center justify-center px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-500 " + className}
      {...props}
    >
      {children}
    </button>
  );
}
