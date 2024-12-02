import * as React from "react";
import { AppProvider } from "@toolpad/core/nextjs";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import type { Navigation } from "@toolpad/core/AppProvider";
import { Dashboard, CalendarToday } from "@mui/icons-material";

import theme from "../theme";
const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "스마트학생복 청주점",
  },
  {
    segment: "",
    title: "Dashboard",
    icon: <Dashboard />,
  },
  {
    segment: "2025",
    title: "2025",
    icon: <CalendarToday />,
    children: [
      {
        segment: "1",
        title: "생명중학교",
        pattern: ":schoolId{/:segment}*",
      },
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" data-toolpad-color-scheme="light">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <AppProvider theme={theme} navigation={NAVIGATION}>
            {children}
          </AppProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
