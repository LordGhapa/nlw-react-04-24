import { ComponentProps } from "react";

interface TableProps extends ComponentProps<"table"> {}

export default function Table(props: TableProps) {
  return (
    <div className="w-full rounded-lg border  border-white/10 ">
      <table {...props} className="w-full  " />
    </div>
  );
}
