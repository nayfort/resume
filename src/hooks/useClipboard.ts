import { useCallback, useEffect, useRef, useState } from "react";

type CopyStatus = "idle" | "copied" | "error";

export function useClipboard(resetAfter = 3000) {
  const [status, setStatus] = useState<CopyStatus>("idle");
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const request = useRef(0);

  useEffect(
    () => () => {
      request.current += 1;
      clearTimeout(timer.current);
    },
    [],
  );

  const copy = useCallback(
    async (text: string) => {
      const currentRequest = ++request.current;
      clearTimeout(timer.current);
      setStatus("idle");

      try {
        await navigator.clipboard.writeText(text);
        // Ignore stale requests and completions after unmount.
        if (currentRequest !== request.current) return;
        setStatus("copied");
        timer.current = setTimeout(() => setStatus("idle"), resetAfter);
      } catch {
        if (currentRequest === request.current) setStatus("error");
      }
    },
    [resetAfter],
  );

  return { copy, status };
}
