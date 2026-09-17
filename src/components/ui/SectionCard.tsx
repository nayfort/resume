import type { ReactNode } from "react";
import { Card } from "antd";
import type { SectionId } from "../../data/profile";

interface SectionCardProps {
  id: SectionId;
  title: string;
  className?: string;
  children: ReactNode;
}

export default function SectionCard({
  id,
  title,
  className,
  children,
}: SectionCardProps) {
  const titleId = `${id}-title`;
  return (
    <section id={id} aria-labelledby={titleId}>
      <Card title={<h2 id={titleId}>{title}</h2>} className={className}>
        {children}
      </Card>
    </section>
  );
}
