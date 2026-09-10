import { cn } from "@/lib/cn";

export default function Card({ as: Tag = "div", className, children, ...props }) {
  return (
    <Tag
      className={cn(
        "rounded-2xl border-2 border-transparent bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-mid-green hover:shadow-card-hover",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
