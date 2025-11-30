import type { MemberGroup } from "../../types/members";

type MemberGroupsProps = {
  groups: MemberGroup[];
};

const MemberGroups = ({ groups }: MemberGroupsProps) => (
  <section id="members">
    <h2>メンバー</h2>
    {groups.map(({ title, members }) => (
      <div key={title}>
        <h3>{title}</h3>
        <ul>
          {members.map(({ name, url, affiliation, role }) => (
            <li key={name}>
              <strong>{url ? <a href={url}>{name}</a> : name}</strong>
              （{affiliation} {role}）
            </li>
          ))}
        </ul>
      </div>
    ))}
  </section>
);

export default MemberGroups;
