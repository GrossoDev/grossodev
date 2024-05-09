import React from "react";

const CallToAction = ({ icon, label, url }) => {
  return (
    <a className="no-underline" href={url} target="_blank">
      <div className="h-16 px-4 rounded-full bg-[#1300FA] flex items-center">
        <img width="32" height="32" src={icon} aria-hidden />
        <span className="font-bold ml-1 text-white">{label}</span>
      </div>
    </a>
  );
}

export default CallToAction;
  