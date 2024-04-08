import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation"; // Import useRouter hook
import { useSession } from "next-auth/react"; // Import useSession hook
import useConversation from "./useConversation";
import { useMemo } from "react";
import { HiChat, HiUsers } from "react-icons/hi";
import { signOut } from "next-auth/react";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";

const useRoutes = () => {
  const pathname = usePathname();
  const { conversationId } = useConversation();
  const { data: session } = useSession();
  const router = useRouter();

  const routes = useMemo(() => {
    if (!session) {
      router.push("/login");
      return [];
    }

    return [
      {
        label: "Chat",
        href: "/conversations",
        icon: HiChat,
        active: pathname === "conversations" || !!conversationId,
      },
      {
        label: "Users",
        href: "/users",
        icon: HiUsers,
        active: pathname === "/users",
      },
      {
        label: "Logout",
        href: "#",
        onClick: async () => {
          // Sign out the user
          await signOut({ redirect: false });
          router.push("/"); // Redirect to home after logout
        },
        icon: HiArrowLeftOnRectangle,
      },
    ];
  }, [pathname, conversationId, session, router]);

  return routes;
};

export default useRoutes;
