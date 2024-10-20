interface ITitleProps {
  primary: string;
  secondary: string;
  span: string;
  className?: string;
  spanClassName?: string;
}

const Title = ({
  primary,
  secondary,
  span,
  className,
  spanClassName,
}: ITitleProps) => {
  return (
    <div
      className={`relative ${className ?? ""} sm:h-32 flex items-center justify-center mt-5 `}
    >
      <h1 className="text-4xl sm:text-6xl font-extrabold text-center font-leagueSpartan uppercase">
        {primary} <span className="text-ring">{span}</span>
      </h1>
      <span
        className={`${spanClassName ?? ""} hidden sm:block absolute top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2 w-max uppercase -z-10 text-muted-foreground/15
          text-9xl font-bold text-center`}
      >
        {secondary}
      </span>
    </div>
  );
};

export default Title;
