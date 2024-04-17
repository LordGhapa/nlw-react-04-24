import nlwUniteIcon from "../assets/nlw-unite-icon.svg";
import NavLink from "./nav-link";
export default function Header() {
  return (
    <div
      className="flex items-center gap-5 py-2 
    "
    >
      <img src={nlwUniteIcon} alt="nlwUniteIcon" />
      <nav className="flex items-center gap-5">
        <NavLink href="/Eventos">Eventos</NavLink>
        <NavLink  href="/Participantes">Participantes</NavLink>
      </nav>
    </div>
  );
}
