type BadgeProps = {
  label: string;
  tone: "info" | "success" | "warning";
};

export function Badge({ label, tone }: BadgeProps) {
  return (
    <span>
      {label} ({tone})
    </span>
  );
}