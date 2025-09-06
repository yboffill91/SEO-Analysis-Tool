import { LucideIcon } from "lucide-react";

interface Props {
  label: string;
  icon: LucideIcon;
  value: string;
}

export const InfoPanel = ({ label, icon: Icon, value }: Props) => {
  return (
    <div className="flex items-center gap-2 px-2  ">
      <Icon className=" rounded-lg bg-primary/10 text-primary p-1" />{" "}
      <p>
        <span className="font-semibold">{label}</span> {value}
      </p>
    </div>
  );
};
