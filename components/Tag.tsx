type TagColor = "purple" | "pink" | "amber" | "gray";

type Props = {
  label: string;
  color?: TagColor;
  size?: "sm" | "md";
};

const colorMap: Record<TagColor, string> = {
  purple: "tag-purple",
  pink: "tag-pink",
  amber: "tag-amber",
  gray: "tag-gray",
};

export default function Tag({ label, color = "gray", size = "sm" }: Props) {
  return (
    <span
      className={`inline-block rounded-full font-medium ${colorMap[color]} ${
        size === "sm" ? "text-xs px-3 py-0.5" : "text-sm px-4 py-1"
      }`}
    >
      {label}
    </span>
  );
}
