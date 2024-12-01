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
        segment: "1/students",
        title: "생명중학교",
      },
      {
        segment: "산남중학교",
        title: "산남중학교",
      },
      {
        segment: "세광중학교",
        title: "세광중학교",
      },
      {
        segment: "가경중학교",
        title: "가경중학교",
      },
      {
        segment: "율량중학교",
        title: "율량중학교",
      },
      {
        segment: "복대중학교",
        title: "복대중학교",
      },
      {
        segment: "경덕중학교",
        title: "경덕중학교",
      },
      {
        segment: "용성중학교",
        title: "용성중학교",
      },
      {
        segment: "중앙여자중학교",
        title: "중앙여자중학교",
      },
      {
        segment: "대성여자중학교",
        title: "대성여자중학교",
      },
      {
        segment: "청주고등학교",
        title: "청주고등학교",
      },
      {
        segment: "세광고등학교",
        title: "세광고등학교",
      },
      {
        segment: "충북고등학교",
        title: "충북고등학교",
      },
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" data-toolpad-color-scheme="dark">
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
