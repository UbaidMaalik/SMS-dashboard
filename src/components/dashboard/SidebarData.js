export const SidebarData = [
  {
    id: 1,
    title: "Dashboard",
    path: "/dashboard",
    icon: "ri-bar-chart-grouped-line",
  },
  {
    id: 2,
    title: "Student",
    path: "/student",
    icon: "ri-group-fill",
  },
  {
    id: 3,
    title: "Academics",
    path: "/academics",
    icon: "ri-table-line",
  },
  {
    id: 4,
    title: "Human Resource",
    path: "/staff",
    icon: "ri-group-2-fill",
    children: [
      {
        id: 401,
        title: "Staff",
        path: "/staff",
        icon: "ri-group-fill",
      },

      {
        id: 402,
        title: "Staff Schedules",
        path: "/item1",
        icon: "ri-time-line",
      },
      {
        id: 403,
        title: "Employee",
        path: "/employee",
        icon: "ri-user-settings-line",
      },
    ],
  },
  {
    id: 5,
    title: "Finance",
    path: "/finance",
    icon: "ri-bank-fill",
    // children: [
    //   {
    //     id: 434,
    //     title: "Item 1",
    //     path: "/item1",
    //     icon: "ri-bank-fill",
    //   },

    //   {
    //     id: 2432,
    //     title: "Item 2",
    //     path: "/item1",
    //     icon: "ri-bank-fill",
    //   },
    // ],
  },

  {
    id: 6,
    title: "Exames",
    path: "/user",
    icon: "ri-user-fill",
  },
  {
    id: 7,
    title: "User Managment",
    path: "/user",
    icon: "ri-user-fill",
  },
  {
    id: 8,
    title: "Logout",
    path: "/logout",
    icon: "ri-logout-box-r-fill",
  },
];
