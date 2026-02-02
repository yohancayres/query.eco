interface EcoScoreBadgeProps {
  score: number;
  size?: "sm" | "md" | "lg";
}

function getScoreGrade(score: number): { label: string; color: string } {
  if (score >= 90) return { label: "A+", color: "bg-green-600 text-white" };
  if (score >= 80) return { label: "A", color: "bg-green-500 text-white" };
  if (score >= 70) return { label: "B", color: "bg-lime-500 text-white" };
  if (score >= 60) return { label: "C", color: "bg-yellow-500 text-white" };
  if (score >= 50) return { label: "D", color: "bg-orange-500 text-white" };
  return { label: "E", color: "bg-red-500 text-white" };
}

const sizes = {
  sm: "w-10 h-10 text-sm",
  md: "w-14 h-14 text-lg",
  lg: "w-20 h-20 text-2xl",
};

export default function EcoScoreBadge({
  score,
  size = "md",
}: EcoScoreBadgeProps) {
  const grade = getScoreGrade(score);
  return (
    <div
      className={`${sizes[size]} ${grade.color} rounded-full flex items-center justify-center font-bold shadow-md`}
      title={`Eco Score: ${score}/100 (${grade.label})`}
    >
      {grade.label}
    </div>
  );
}
