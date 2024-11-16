import adminInfo from "../dumy/adminInfo.json";
import schoolList from "../dumy/schoolList.json";
import { VscAdd } from "react-icons/vsc";
import logo from "/logo.png";
import { Link } from "react-router-dom";
import useSidebarStorage from "../customHook/useSidebarStorage";
import { useState } from "react";

export default function Sidebar() {
  const newDate = new Date();
  const { selectMenu, handleSelectMenu } = useSidebarStorage();
  const [selectYear, setSelectYear] = useState<string>(
    newDate.getFullYear().toString()
  );
  return (
    <aside className="w-64 h-full bg-neutral-300 p-9">
      <Link to="/admin">
        <div className="h4">{adminInfo.adminInfo.companyName}</div>
      </Link>
      <div className="flex items-center gap-2 my-2">
        <img
          alt="logo"
          className="inline-block w-12 aspect-square"
          src={logo}
        />
        <div>
          <p className="s1">{adminInfo.adminInfo.name}</p>
          <p className="mt-2 s2 text-neutral-500">
            {adminInfo.adminInfo.address}
          </p>
        </div>
      </div>
      <div>
        {schoolList &&
          schoolList.map((school) => (
            <div key={school.year} onClick={() => setSelectYear(school.year)}>
              <div className="py-2 h5">{school.year}년</div>
              <div
                className={`${
                  selectYear === school.year
                    ? "translate-y-0 opacity-100 "
                    : "max-h-0 -translate-y-4 opacity-0"
                } transition overflow-hidden`}
              >
                <p className="p-1 h6">중학교</p>
                <ul className="s1">
                  {school.middleSchools.map((middleSchool) => (
                    <Link
                      key={middleSchool.id}
                      to={`admin/school/${middleSchool.id}`}
                      onClick={() =>
                        handleSelectMenu(middleSchool.name.toString())
                      }
                    >
                      <li
                        className={`px-1 py-2 text-neutral-700 ${
                          selectMenu === middleSchool.name.toString()
                            ? "text-neutral-900 font-bold"
                            : ""
                        }`}
                      >
                        {middleSchool.name}
                      </li>
                    </Link>
                  ))}
                </ul>

                <p className="p-1 mt-3 h6">고등학교</p>
                <ul className="s1">
                  {school.highSchools.map((highSchool) => (
                    <Link
                      key={highSchool.id}
                      to={`admin/school/${highSchool.id}`}
                      onClick={() =>
                        handleSelectMenu(highSchool.name.toString())
                      }
                    >
                      <li
                        className={`px-1 py-2 text-neutral-700 ${
                          selectMenu === highSchool.name.toString()
                            ? "text-neutral-900 font-bold"
                            : ""
                        }`}
                      >
                        {highSchool.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          ))}
      </div>
      <button className="mt-9">
        학교 추가하기
        <VscAdd />
      </button>
    </aside>
  );
}
