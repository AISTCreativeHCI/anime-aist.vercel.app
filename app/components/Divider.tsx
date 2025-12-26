import { FC } from "react";

interface DividerProps {
  signature: "A" | "B" | "C" | "D";
}

export const Divider: FC<DividerProps> = ({ signature }) => (
  <div className="image">
    <img src={`/animare_signature-stroke_${signature}.svg`} alt="---" />
  </div>
);
