interface TagListProps {
  items: readonly string[];
  label?: string;
}

export default function TagList({ items, label }: TagListProps) {
  return (
    <ul className="tagList" aria-label={label}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
