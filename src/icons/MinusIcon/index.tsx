type MinusIconProps = {
  onClick: () => void;
};

const MinusIcon = ({ onClick }: MinusIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      onClick={onClick}
    >
      <path
        d="M4.53812 10.2231H16.3843"
        stroke="#9F9F9F"
        stroke-width="2"
        stroke-linecap="square"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default MinusIcon;
