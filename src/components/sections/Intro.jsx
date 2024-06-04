import Section from "../Section";
import { basics } from "../../../cv";
import { WorldMap } from "../../icons/WorldMap";
import { Mail } from "../../icons/Mail";
import { Phone } from "../../icons/Phone";
import { Github } from "../../icons/Github";
import { LinkedIn } from "../../icons/LinkedIn";
import { X } from "../../icons/X";
import image from "../../icons/foto.webp";
import "../../assets/Intro.css";

const Intro = () => {
  const { name, label, location, profiles, phone, email } = basics;
  const { city, region } = location;
  

  const SOCIAL_ICONS = {
    Github,
    LinkedIn,
    X,
  }

  const linkedInfo = profiles.find(({ network }) => network === "LinkedIn");
  const linkedUrl = linkedInfo?.url;
  const printInfo = [email, phone, linkedUrl].filter(Boolean).join(" • ");
  return (
    <Section>
      <div className="container">
        <div className="info">
          <h1>{name}</h1>
          <h2>{label}</h2>
          <span>
            <WorldMap />
            {city} {region}
          </span>
          <footer className="print">{printInfo}</footer>
          <footer className="no-print">
            {email && (
              <a
                href={`mailto:${email}`}
                title={`Enviar un correo electrónico a ${name} al correo ${email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail />
              </a>
            )}
            {phone && (
              <a
                href={`tel:${phone}`}
                title={`Llamar por teléfono a ${name} al número ${phone}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone />
              </a>
            )}
            {
          profiles.map(({ network, url, username }) => {
            const Icon = SOCIAL_ICONS[network]
            if (!Icon) return null;
            return (
              <a
                href={url}
                title={`Visitar el perfil de ${name} en ${network}`}
                target="_blank"
                rel="noopener noreferrer"
                key={network}
              >
               <Icon /> 
              </a>
            )
          })
        }
          </footer>
        </div>
        <figure>
          <img src={image} alt={name} />
        </figure>
      </div>
    </Section>
  );
};

export default Intro;
