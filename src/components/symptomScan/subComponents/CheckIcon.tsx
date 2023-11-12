type CheckIconProps = {
  className?: string;
};

const CheckIcon = (props: CheckIconProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    width="1em"
    className={props.className ? props.className : ""}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default CheckIcon;
