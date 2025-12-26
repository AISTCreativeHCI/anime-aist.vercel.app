import { FC } from "react";
import eventItemsData from "../../data/events.json";
import type { EventItem } from "../../types/event";
import Link from "next/link";

const eventItems: EventItem[] = eventItemsData;

interface EventSectionProps {
  language?: "en" | "ja";
}

const EventSection: FC<EventSectionProps> = ({ language }) => (
  <section id="event">
    <h2>{language === "ja" ? "イベント" : "Events"}</h2>
    <ul>
      {eventItems.map(({ date, time, description, venue, link, en }, index) => (
        <li key={`${index}_${date}`}>
          <strong>
            {language === "ja"
              ? date
              : new Date(date).toLocaleDateString("en-US")}
          </strong>
          {time && <> {time}</>}{" "}
          {language === "ja" || !en ? description : en.description}
          {language === "ja" || !en ? ` 📍${venue}` : `, ${en.venue}`}
          {link && (
            <>
              {" "}
              [<Link href={link}>{language === "ja" ? "リンク" : "Link"}</Link>]
            </>
          )}
        </li>
      ))}
    </ul>
  </section>
);

export default EventSection;
