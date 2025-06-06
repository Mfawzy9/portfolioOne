const Firebase = ({ className, ...rest }: { className?: string }) => {
  return (
    <div title="Firebase" className="p-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={144}
        height={144}
        viewBox="0 0 48 48"
        {...rest}
        className={` ${className}`}
      >
        <path
          fill="#ff8f00"
          d="M8,37L23.234,8.436c0.321-0.602,1.189-0.591,1.494,0.02L30,19L8,37z"
        />
        <path
          fill="#ffa000"
          d="M8,36.992l5.546-34.199c0.145-0.895,1.347-1.089,1.767-0.285L26,22.992L8,36.992z"
        />
        <path
          fill="#ff6f00"
          d="M8.008 36.986L8.208 36.829 25.737 22.488 20.793 13.012z"
        />
        <path
          fill="#ffc400"
          d="M8,37l26.666-25.713c0.559-0.539,1.492-0.221,1.606,0.547L40,37l-15,8.743 c-0.609,0.342-1.352,0.342-1.961,0L8,37z"
        />
      </svg>
    </div>
  );
};

export default Firebase;
