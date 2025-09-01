import { Avatar, AvatarFallback } from "@/modules/ui/athoms";
import { useUserStore } from "@/store/userStore";

export const UserAvatar = () => {
  const user = useUserStore((state) => state.userName);
  return (
    <Avatar>
      <AvatarFallback>
        <h3 className="capitalize">{user.slice(0, 2)}</h3>
      </AvatarFallback>
    </Avatar>
  );
};
