import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: readonly string[], offset = 110) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const update = () => {
      let current = "";
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= offset)
          current = id;
      }
      const atBottom =
        window.scrollY > 0 &&
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 4;
      if (atBottom) current = sectionIds[sectionIds.length - 1] ?? "";
      setActiveSection(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [sectionIds, offset]);

  return activeSection;
}
