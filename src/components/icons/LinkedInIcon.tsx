import type React from "preact/compat";

interface LinkedInIconProps {
  color?: string;
  className?: string;
}

export function LinkedInIcon(props: LinkedInIconProps): React.ReactNode {
  const { color = "currentColor", className = "" } = props;

  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M25.3333 0H6.66667C2.98533 0 0 2.98533 0 6.66667V25.3333C0 29.0147 2.98533 32 6.66667 32H25.3333C29.016 32 32 29.0147 32 25.3333V6.66667C32 2.98533 29.016 0 25.3333 0ZM10.6667 25.3333H6.66667V10.6667H10.6667V25.3333ZM8.66667 8.976C7.37867 8.976 6.33333 7.92267 6.33333 6.624C6.33333 5.32533 7.37867 4.272 8.66667 4.272C9.95467 4.272 11 5.32533 11 6.624C11 7.92267 9.956 8.976 8.66667 8.976ZM26.6667 25.3333H22.6667V17.8613C22.6667 13.3707 17.3333 13.7107 17.3333 17.8613V25.3333H13.3333V10.6667H17.3333V13.02C19.1947 9.572 26.6667 9.31733 26.6667 16.3213V25.3333Z" />
    </svg>
  );
}
