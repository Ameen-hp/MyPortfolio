export const Card = ({ children, className = "" }) => (
  <div className={`rounded-xl shadow-lg overflow-hidden ${className}`}>{children}</div>
);

export const CardContent = ({ children, className = "" }) => (
  <div className={`p-4 sm:p-6 ${className}`}>{children}</div>
);
