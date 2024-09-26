import type React from "preact/compat";

interface ArrowIconProps {
  color?: string;
  className?: string;
}

export function ArrowIcon(props: ArrowIconProps): React.ReactNode {
  const { color = "currentColor", className = "" } = props;

  return (
    <svg
      width="40"
      height="29"
      viewBox="0 0 40 29"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.2379 9.46643C25.963 6.35655 25.1035 2.65302 25.0013 0.167083L26.9996 0.0849609C27.0893 2.26569 27.8599 5.56216 29.8521 8.28562C31.8107 10.9631 34.9715 13.126 40.0005 13.126V15.126H40.0004V15.8741C34.9714 15.8741 31.8106 18.0371 29.852 20.7145C27.8598 23.438 27.0891 26.7344 26.9995 28.9152L25.0012 28.833C25.1034 26.3471 25.9629 22.6436 28.2378 19.5337C29.3998 17.9452 30.9252 16.522 32.8821 15.5001H0V13.5001H32.8822C30.9253 12.4781 29.3999 11.0549 28.2379 9.46643Z"
      />
    </svg>
  );
}
