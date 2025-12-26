"use client";

import type { MemberGroup } from "../../types/members";
import { useLanguage } from "./LanguageProvider";

type MemberGroupsSectionProps = {
  groups: MemberGroup[];
};

const Affiliation = ({ affiliation }: { affiliation: string }) => {
  const match = /^(.+)\s*\((.+)\)$/.exec(affiliation);
  return match ? <abbr title={match[1]}>{match[2]}</abbr> : <>{affiliation}</>;
};

const MemberGroupsSection = ({ groups }: MemberGroupsSectionProps) => {
  const { language } = useLanguage();

  return (
    <section id="members">
      <h2>{language === "ja" ? "メンバー" : "Members"}</h2>
      {groups.map(({ title, members, en }) => (
        <div key={title}>
          <h3>{language === "ja" || !en ? title : en.title}</h3>
          <ul>
            {members.map(({ name, pi, affiliation, role, url, en }) => (
              <li key={name}>
                {language === "ja" ? (
                  <strong>{url ? <a href={url}>{name}</a> : name}</strong>
                ) : (
                  <strong>
                    {en?.url ? (
                      <a href={en.url}>{en.name ?? name}</a>
                    ) : (
                      en?.name ?? name
                    )}
                  </strong>
                )}
                {language === "ja" ? (
                  <>
                    （{pi ? `${pi}; ` : ""}
                    {affiliation} {role}）
                  </>
                ) : (
                  <>
                    {" "}
                    ({en?.pi ? `${en.pi}; ` : ""}
                    {en?.role ? en.role : role},{" "}
                    {en?.affiliation ? (
                      <Affiliation affiliation={en.affiliation} />
                    ) : (
                      affiliation
                    )}
                    )
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default MemberGroupsSection;
