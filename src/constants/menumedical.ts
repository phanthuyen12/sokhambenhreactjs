export interface MenuItemTypes {
  key: string;
  label: string;
  isTitle?: boolean;
  icon?: string;
  url?: string;
  badge?: {
    variant: string;
    text: string;
  };
  parentKey?: string;
  target?: string;
  children?: MenuItemTypes[];
}

const MENU_ITEMS: MenuItemTypes[] = [
  { key: "MAIN", label: "MAIN", isTitle: true },
  {
    key: "dashboard-1",
    label: "Home",
    isTitle: false,
    icon: "calendar",
    url: "/medical/dashboard-1",
  },
  {
    key: "Profile medical",
    label: "Profile medical",
    isTitle: false,
    icon: "calendar",
    url: "/medical/profile-medical",
  },
  {
    key: "appointment schedule",
    label: "Appointment schedule",
    isTitle: false,
    icon: "calendar",
    url: "/medical/medical-examination",
  },
  {
    key: "examination history",
    label: "Examination history",
    isTitle: false,
    icon: "calendar",
    url: "/medical/examination-history",
  },
];

const HORIZONTAL_MENU_ITEMS: MenuItemTypes[] = [
  {
    key: "dashboard",
    icon: "home",
    label: "Dashboard",
    isTitle: true,
    children: [
      {
        key: "ds-dashboard-1",
        label: "Dashboard 1",
        url: "/medical/dashboard-1",
        parentKey: "dashboard",
      },
    ]
  },
];

const TWO_COl_MENU_ITEMS: MenuItemTypes[] = [
  {
    key: "dashboard",
    icon: "home",
    label: "Dashboard",
    isTitle: true,
    children: [
      {
        key: "ds-dashboard-1",
        label: "Dashboard 1",
        url: "/dashboard-1",
        parentKey: "dashboard",
      },
      {
        key: "ds-dashboard-2",
        label: "Dashboard 2",
        url: "/dashboard-2",
        parentKey: "dashboard",
      },
      {
        key: "ds-dashboard-3",
        label: "Dashboard 3",
        url: "/dashboard-3",
        parentKey: "dashboard",
      },
      {
        key: "ds-dashboard-4",
        label: "Dashboard 4",
        url: "/dashboard-4",
        parentKey: "dashboard",
      },
    ],
  },
  
     
  {
    isTitle: true,
    key: "widgets",
    label: "Other page",
    icon: "gift",
    url: "/ui/widgets",
    children: [
      {
        key: "widgets1",
        label: "Widgets",
        url: "/ui/widgets",
        parentKey: "widgets",
      },
    ],
  },
  // {
  //     key: 'widgets',
  //     label: 'Widgets',
  //     isTitle: false,
  //     icon: 'gift',
  //     url: '/ui/widgets',
  // },
];

export { MENU_ITEMS, TWO_COl_MENU_ITEMS, HORIZONTAL_MENU_ITEMS };
