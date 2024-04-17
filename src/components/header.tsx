import nlwUniteIcon from "../assets/nlw-unite-icon.svg";
export default function Header() {
  return (
    <div
      className="flex items-center gap-5 py-2 
    "
    >
      <img src={nlwUniteIcon} alt="nlwUniteIcon" />
      <nav className="flex items-center gap-5">
        <a href="" className="text-zing-400 text-sm font-medium ">
          Eventos
        </a>
        <a href="" className="text-sm font-medium ">
          Participantes
        </a>
      </nav>
    </div>
  );
}
