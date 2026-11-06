import reactIcon from "../../assets/icons/technologies/react.svg";
import typeScriptIcon from "../../assets/icons/technologies/typescript.svg";
import nodeIcon from "../../assets/icons/technologies/nodejs.svg";
import pythonIcon from "../../assets/icons/technologies/python.svg";
import supabaseIcon from "../../assets/icons/technologies/supabase.svg";
import mailIcon from "../../assets/icons/contact/mail.svg";
import linkedInIcon from "../../assets/icons/contact/linkedin.svg";
import gitHubIcon from "../../assets/icons/contact/github.svg";

const icons = {
  react: reactIcon,
  typescript: typeScriptIcon,
  nodejs: nodeIcon,
  python: pythonIcon,
  supabase: supabaseIcon,
  mail: mailIcon,
  linkedin: linkedInIcon,
  github: gitHubIcon,
} as const;

export function LocalIcon({ name }: { name: keyof typeof icons }) {
  const mask = `url("${icons[name]}")`;
  return (
    <span
      className="local-icon"
      aria-hidden="true"
      style={{ maskImage: mask, WebkitMaskImage: mask }}
    />
  );
}
