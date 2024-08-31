import { Link } from "react-router-dom";
import logo from "/weconnect-no-bg.svg";

export default function Footer() {
  return (
    <>
      <footer className="footer mt-20 bg-dark text-light p-10 flex justify-around">
        <nav>
          <h6 className="footer-title text-lg opacity-100">Prestations</h6>
          <Link className="link link-hover text-muted">Barber</Link>
          <Link className="link link-hover text-muted">Estheticienne</Link>
          <Link className="link link-hover text-muted">Tresseuse</Link>
          <Link className="link link-hover text-muted">Maquilleuse</Link>
        </nav>
        <nav>
          <h6 className="footer-title text-lg opacity-100">Contact</h6>
          <Link className="link link-hover text-muted">À propos</Link>
          <Link className="link link-hover text-muted">Nous contacter</Link>
          <Link className="link link-hover text-muted">
            Devenir prestataire
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title text-lg opacity-100">Mentions légales</h6>
          <Link className="link link-hover text-muted">
            Conditions d'utilisation
          </Link>
          <Link className="link link-hover text-muted">
            Politique de confidentialité
          </Link>
          <Link className="link link-hover text-muted">Cookie policy</Link>
        </nav>
      </footer>
      <footer className="footer bg-dark text-light border-light border-t px-10 py-4">
        <aside className="grid-flow-col items-center">
          <img src={logo} alt="logo weconnect" className="w-12 invert" />
          <p>
            Copyright © {new Date().getFullYear()} - Tous droits reservés 
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <Link className="flex items-center gap-2">
              Suivez-nous sur
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </Link>
          </div>
        </nav>
      </footer>
    </>
  );
}
