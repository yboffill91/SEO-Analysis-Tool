import { cn } from "@/lib/utils";

interface CircularProgressProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
  showValue?: boolean;
  fontSize?: "xs" | "sm" | "md" | "lg" | "xl";
}

export function CircularProgress({
  value,
  size = 120,
  strokeWidth = 8,
  className,
  showValue = true,
  fontSize = "md",
}: CircularProgressProps) {
  // Asegurar que el valor esté entre 0 y 1
  const clampedValue = Math.max(0, Math.min(1, value));

  // Determinar los colores según el valor
  const getColorClasses = (value: number) => {
    if (value >= 0.9) {
      return {
        background: "bg-success/10",
        stroke: "stroke-success",
        text: "text-success",
      };
    } else if (value >= 0.5) {
      return {
        background: "bg-warning/10",
        stroke: "stroke-warning",
        text: "text-warning",
      };
    } else {
      return {
        background: "bg-destructive/10",
        stroke: "stroke-destructive",
        text: "text-destructive",
      };
    }
  };

  const colors = getColorClasses(clampedValue);

  // Cálculos para el SVG
  const center = size / 2;
  const radius = center - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - clampedValue * circumference;
  const finalValue = value === 1 ? value : value.toFixed(2);

  // Formatear el valor para mostrar

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center rounded-full",
        colors.background,
        className
      )}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Círculo de fondo */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="transparent"
          strokeWidth={strokeWidth}
          className="text-muted-foreground/20"
        />

        {/* Círculo de progreso */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          className={cn(
            colors.stroke,
            "transition-all duration-500 ease-in-out"
          )}
        />
      </svg>

      {/* Valor en el centro */}
      {showValue && (
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center",
            colors.text,
            "font-normal",
            fontSize === "xs" && "text-xs",
            fontSize === "sm" && "text-sm",
            fontSize === "md" && "text-md",
            fontSize === "lg" && "text-lg",
            fontSize === "xl" && "text-3xl"
          )}
        >
          {finalValue}
        </div>
      )}
    </div>
  );
}
