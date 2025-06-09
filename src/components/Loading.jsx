import "../styles/App.css";

export const Loading = () => {
  return (
    <div className="animation">
      <svg
        width="200"
        height="200"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse className="spinner_rXNP" cx="12" cy="5" rx="4" ry="4" />
      </svg>
    </div>
  );
};
