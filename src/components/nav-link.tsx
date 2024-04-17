import { ComponentProps } from "react";

interface NavLinkProps extends ComponentProps<"a"> {
  children: React.ReactNode;
}
export default function NavLink(props: NavLinkProps) {
  return (
    <>
      <a {...props} className="text-sm font-medium ">
        {props.children}
      </a>
    </>
  );
}
