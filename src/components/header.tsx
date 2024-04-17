import { MoveRight } from "lucide-react";
import nlwUniteIcon from "../assets/nlw-unite-icon.svg";
import NavLink from "./nav-link";
export default function Header() {
  return (
    <div
      className="flex items-center gap-5 py-2 
    "
    >
      <NavLink href="/">
        <img src={nlwUniteIcon} alt="nlwUniteIcon" />
      </NavLink>
      <nav className="middle flex items-center gap-5">
        <NavLink>Eventos</NavLink>
        <MoveRight className="mt-1 size-6 " />
        <NavLink>Participantes</NavLink>
      </nav>
    </div>
  );
}
