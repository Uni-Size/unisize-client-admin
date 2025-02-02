import { NextResponse } from "next/server";

export type School = {
  id: number;
  school: string;
  createdAt: string;
  updatedAt: string;
  stock: string;
};

const dummyData: School[] = [
  {
    id: 1,
    school: `TITLE-1 입니다.`,
    createdAt: "2019-02-15 17:54",
    updatedAt: "2019-02-15 17:54",
    stock: `DESCRIPTION-1 입니다.`,
  },
  {
    id: 2,
    school: `TITLE-1 입니다.`,
    createdAt: "2019-02-15 17:54",
    updatedAt: "2019-02-15 17:54",
    stock: `DESCRIPTION-1 입니다.`,
  },
  {
    id: 3,
    school: `TITLE-1 입니다.`,
    createdAt: "2019-02-15 17:54",
    updatedAt: "2019-02-15 17:54",
    stock: `DESCRIPTION-1 입니다.`,
  },
  {
    id: 4,
    school: `TITLE-1 입니다.`,
    createdAt: "2019-02-15 17:54",
    updatedAt: "2019-02-15 17:54",
    stock: `DESCRIPTION-1 입니다.`,
  },
  {
    id: 5,
    school: `TITLE-1 입니다.`,
    createdAt: "2019-02-15 17:54",
    updatedAt: "2019-02-15 17:54",
    stock: `DESCRIPTION-1 입니다.`,
  },
];
export async function GET() {
  return NextResponse.json(dummyData);
}
