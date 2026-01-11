import { portfolio } from "../data/portfolio";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function SocialLinks() {
  const btn =
    "w-10 h-10 rounded-md border border-green-500/30 bg-black/40 flex items-center justify-center " +
    "text-green-300 hover:text-green-200 hover:border-green-400 transition " +
    "shadow-[0_0_18px_rgba(34,197,94,0.12)]";

  return (
    <div className="flex flex-wrap gap-3">
      <a className={btn} href={portfolio.resume} download title="Resume (PDF)">
        <FaFilePdf className="text-lg" />
      </a>

      <a className={btn} href={portfolio.links.linkedin} target="_blank" title="LinkedIn">
        <FaLinkedin className="text-lg" />
      </a>

      <a className={btn} href={portfolio.links.github} target="_blank" title="GitHub">
        <FaGithub className="text-lg" />
      </a>

      <a className={btn} href={portfolio.links.leetcode} target="_blank" title="LeetCode">
        <SiLeetcode className="text-lg" />
      </a>
    </div>
  );
}
