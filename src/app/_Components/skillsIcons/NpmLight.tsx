const NpmLight = ({ className, ...rest }: { className?: string }) => {
  return (
    <div className="p-2" title="NPM">
      <svg
        viewBox="0 0 256 256"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...rest}
      >
        <g clipPath="url(#clip0_33_578)">
          <path
            d="M196 0H60C26.8629 0 0 26.8629 0 60V196C0 229.137 26.8629 256 60 256H196C229.137 256 256 229.137 256 196V60C256 26.8629 229.137 0 196 0Z"
            fill="#F4F2ED"
          />
          <g clipPath="url(#clip1_33_578)">
            <path
              d="M23 88H233V156.571H128V168H81.3333V156.571H23V88ZM34.6667 145.143H58V110.857H69.6667V145.143H81.3333V99.4286H34.6667V145.143ZM93 99.4286V156.571H116.333V145.143H139.667V99.4286H93ZM116.333 110.857H128V133.714H116.333V110.857ZM151.333 99.4286V145.143H174.667V110.857H186.333V145.143H198V110.857H209.667V145.143H221.333V99.4286H151.333Z"
              fill="#CB3837"
            />
            <path
              d="M34.6667 145.143H58V110.857H69.6667V145.143H81.3334V99.4286H34.6667V145.143Z"
              fill="white"
            />
            <path
              d="M93 99.4286V156.571H116.333V145.143H139.667V99.4286H93ZM128 133.714H116.333V110.857H128V133.714Z"
              fill="white"
            />
            <path
              d="M151.333 99.4286V145.143H174.667V110.857H186.333V145.143H198V110.857H209.667V145.143H221.333V99.4286H151.333Z"
              fill="white"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_33_578">
            <rect width={256} height={256} fill="white" />
          </clipPath>
          <clipPath id="clip1_33_578">
            <rect
              width={210}
              height={80}
              fill="white"
              transform="translate(23 88)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default NpmLight;
