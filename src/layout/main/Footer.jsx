import React from "react";
import { useLocation } from "react-router-dom";
import SocialIcons from "../../components/ui/SocialIcons";

export default function Footer() {
  const { pathname } = useLocation();

  return (
    <footer className={`${pathname === "/" && "mt-32"}`}>
      <div className="bg-third py-24 ">
        <div className="max_container mx-auto px-6 flex flex-col lg:flex-row justify-between gap-y-14">
          <div className="flex flex-col gap-7">
            <h3 className="font-bold text-3xl">
              <span className="text-blue-600">J</span>obster
            </h3>
            <p className="text-base font-semibold leading-5">Call us</p>
            <p className="text-[22px] font-medium leading-8 text-primary">
              (123) 456-7890
            </p>
            <div>
              <ul className="text-sm font-light leading-6">
                <li>90 Fifth Avenue, 3rd Floor </li>
                <li>San Francisco, CA 1980 </li>
                <li>San Francisco, CA 1980</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap gap-20 lg:justify-end">
            {[1, 2, 3, 4, 5].map((el) => (
              <div key={el}>
                <h3 className="text-base font-semibold leading-5 mb-6">
                  For Candidates
                </h3>
                <ul className="text-sm font-light leading-7">
                  <li>Find Jobs</li>
                  <li>Candidate Dashboard</li>
                  <li>My Applications</li>
                  <li>Favourite Jobs</li>
                  <li>My Inbox</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-fourth py-[70px]">
        <div className="max_container mx-auto px-6 flex justify-between">
          <p className="font-light text-sm text-accent">
            © 2022 Jobster. All Right Reserved.
          </p>
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
}
