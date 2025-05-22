import { cn } from "@/lib/utils";

const Title = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2
      className={cn(
        "text-3xl font-bold text-shop_dark_blue capitalize tracking-wide font-poppins",
        className
      )}
    >
      {children}
    </h2>
  );
};

const SubText = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={cn("text-gray-600 text-sm font-poppins", className)}>
      {children}
    </p>
  );
};

const SubTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3 className={cn("font-semibold text-gray-900 font-poppins", className)}>
      {children}
    </h3>
  );
};

export { Title, SubText, SubTitle };
