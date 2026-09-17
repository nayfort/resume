import type { ComponentPropsWithoutRef } from "react";

type ExternalLinkProps = Omit<
  ComponentPropsWithoutRef<"a">,
  "target" | "rel"
> & {
  href: string;
};

export default function ExternalLink(props: ExternalLinkProps) {
  return <a {...props} target="_blank" rel="noopener noreferrer" />;
}
