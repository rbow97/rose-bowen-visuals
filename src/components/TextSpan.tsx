export function TextSpan({ text, format }: { text: string; format: string }) {
  if (format === "bold") return <strong>{text}</strong>;
  if (format === "highlight") return <span class="text-[#0F1010]">{text}</span>;
  return <>{text}</>;
}
