import {
  CreditCard,
  Earth,
  Landmark,
  LayoutList,
  Lock,
  Settings,
  Star,
  UserPen,
} from "lucide-react";

export const dataSidebarElements = [
  {
    title: "Elements",
    icon: LayoutList,
    children: [
      {
        item: "Favourites",
        href: "/favourites",
        icon: Star,
      },
      {
        item: "Logins",
        href: "/logins-elements",
        icon: Earth,
      },
      {
        item: "Credit Card",
        href: "/credit-card",
        icon: CreditCard,
      },
    ],
  },
];

export const dataSidebarConfiguration = [
  {
    title: "Configuration",
    icon: Settings,
    children: [
      {
        item: "Favourites",
        href: "/favourites",
        icon: UserPen,
        premium: false,
      },
      {
        item: "Security",
        href: "#",
        icon: Earth,
        premium: true,
      },
      {
        item: "Suscription",
        href: "#",
        icon: Landmark,
        premium: true,
      },
    ],
  },
];
