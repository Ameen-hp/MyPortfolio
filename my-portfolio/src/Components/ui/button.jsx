export const Button = ({ children, ...props }) => (
  <button
    className="px-4 py-2 rounded-lg font-medium bg-purple-600 text-white hover:bg-purple-700 transition"
    {...props}
  >
    {children}
  </button>
);
