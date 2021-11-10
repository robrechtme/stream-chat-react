import { useTheme } from '../hooks/useTheme';

export const ThemeIcon: React.FC = () => {
  const { mode, setMode } = useTheme();

  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      onClick={() => {
        const toogleMode = mode === 'light' ? 'dark' : 'light';
        setMode(toogleMode);
      }}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.8802 0.509041C12.0737 0.852424 12.0475 1.27745 11.8132 1.59442C10.7349 3.0532 10.216 4.85054 10.3509 6.65954C10.4858 8.46855 11.2655 10.169 12.5483 11.4518C13.831 12.7345 15.5315 13.5142 17.3405 13.6491C19.1495 13.784 20.9468 13.2651 22.4056 12.1868C22.7226 11.9526 23.1476 11.9263 23.491 12.1198C23.8344 12.3134 24.032 12.6905 23.9958 13.083C23.7856 15.3571 22.9322 17.5242 21.5353 19.3309C20.1384 21.1376 18.2559 22.5091 16.108 23.2849C13.9601 24.0608 11.6357 24.2088 9.40672 23.7118C7.17774 23.2148 5.1364 22.0933 3.52157 20.4784C1.90674 18.8636 0.7852 16.8223 0.288191 14.5933C-0.208818 12.3643 -0.0607429 10.0399 0.715091 7.892C1.49093 5.7441 2.86243 3.86158 4.66912 2.46472C6.47581 1.06785 8.64296 0.214409 10.917 0.00425972C11.3095 -0.0320113 11.6867 0.165658 11.8802 0.509041ZM9.07347 2.39716C7.92795 2.74992 6.84953 3.30697 5.89245 4.04695C4.38629 5.21146 3.24292 6.78084 2.59614 8.57144C1.94936 10.3621 1.82592 12.2998 2.24025 14.158C2.65459 16.0162 3.58957 17.718 4.93578 19.0642C6.282 20.4104 7.98377 21.3454 9.84198 21.7598C11.7002 22.1741 13.638 22.0507 15.4286 21.4039C17.2192 20.7571 18.7886 19.6137 19.9531 18.1076C20.693 17.1505 21.2501 16.0721 21.6029 14.9265C20.2194 15.5061 18.7088 15.7567 17.1917 15.6435C14.905 15.473 12.7555 14.4874 11.134 12.866C9.51261 11.2445 8.527 9.09498 8.35647 6.80827C8.24334 5.29119 8.49395 3.7806 9.07347 2.39716Z'
        fill='var(--text-low-emphasis)'
      />
    </svg>
  );
};
