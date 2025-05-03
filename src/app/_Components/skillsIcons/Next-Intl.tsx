const NextIntl = ({ className, ...rest }: { className?: string }) => {
  return (
    <div title="Next-Intl" className="p-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width="200"
        height="200"
        {...rest}
        className={` ${className}`}
      >
        <g fill="none" stroke="#6DD6FF" strokeWidth="20">
          <circle cx="256" cy="256" r="200" />
          <ellipse cx="256" cy="256" rx="200" ry="80" />
          <path d="M56 256h400" />
          <path d="M256 56c53 0 96 89 96 200s-43 200-96 200-96-89-96-200 43-200 96-200z" />
          <path d="M100 116h312" />
          <path d="M100 396h312" />
        </g>

        <g>
          <circle cx="370" cy="370" r="90" fill="black" />
          <text
            x="320"
            y="390"
            fill="white"
            fontSize="100"
            fontFamily="Arial, sans-serif"
            fontWeight="bold"
          >
            inl
          </text>
        </g>
      </svg>
    </div>
  );
};

export default NextIntl;
