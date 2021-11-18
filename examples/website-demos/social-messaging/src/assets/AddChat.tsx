type Props = {
  createChannel: () => void;
};
export const AddChat: React.FC<Props> = (props) => {
  const { createChannel } = props;

  return (
    <svg
      width='24'
      height='21'
      viewBox='0 0 25 22'
      fill='none'
      style={{ cursor: 'pointer' }}
      onClick={createChannel}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.0004 10C10.2404 10 8.00044 7.76 8.00044 5C8.00044 2.24 10.2404 0 13.0004 0C15.7604 0 18.0004 2.24 18.0004 5C18.0004 7.76 15.7604 10 13.0004 10ZM13.0004 2C11.3504 2 10.0004 3.35 10.0004 5C10.0004 6.65 11.3504 8 13.0004 8C14.6504 8 16.0004 6.65 16.0004 5C16.0004 3.35 14.6504 2 13.0004 2ZM2.00049 21H1.89049C1.34049 20.94 0.950488 20.45 1.00049 19.9C1.00093 19.8978 1.00195 19.8907 1.00363 19.879C1.0771 19.3673 2.42198 11 13.0004 11C14.8304 11 16.5104 11.29 17.9904 11.85C18.5104 12.05 18.7604 12.62 18.5704 13.14C18.3704 13.66 17.7904 13.91 17.2804 13.72C16.0204 13.24 14.5804 13 13.0004 13C4.01042 13 3.03049 19.78 2.99049 20.11C2.94049 20.62 2.50049 21 2.00049 21ZM20.4004 13.98H22.4004V16.58H25.0004V18.58H22.4004V21.18H20.4004V18.58H17.8004V16.58H20.4004V13.98Z'
        fill='var(--text-low-emphasis)'
      />
    </svg>
  );
};