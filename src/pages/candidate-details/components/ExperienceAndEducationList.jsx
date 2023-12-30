import React from "react";
import { FaDotCircle } from "react-icons/fa";
import Badge from "@/components/ui/Badge";

const ExperienceAndEducationList = ({ title, data, type }) => {
  return (
    <div className="mb-6 lg:mb-12">
      <h1 className="page_section_header">{title}</h1>
      {data.map((item, index) => (
        <div key={index} className="flex gap-3 relative">
          <div
            className={`exp_disk mt-1 ${
              index + 1 === data.length ? "after:border-r-0" : "after:border-r"
            }`}
          >
            <FaDotCircle className="text-xs text-primary" />
          </div>
          <div className="pl-5 pb-6">
            <Badge className={"py-[1.5px]"}>{item.timePeriod}</Badge>
            <h5 className="text-base font-semibold leading-6 mt-2 mb-1">
              {type === "work" ? item.position : item.degreeName}
            </h5>
            <div className="text_graish mb-2">
              {type === "work" ? item.companyName : item.institution}
            </div>
            <p className="text_accent">
              {type === "work" ? item.details : null}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceAndEducationList;