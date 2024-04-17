import { ComponentProps } from "react";

interface TableCellProps extends ComponentProps<"td"> {}

export default function TableCell(props: TableCellProps) {
  return <td {...props} className="px-4 py-3  text-sm text-zinc-300" />;
}
