import React from "react";

const CallToAction = ({ icon, label, url, primary, color }) => {
  return (
    <a className="no-underline" href={url} target="_blank">
      <div className={"h-16 px-4 rounded-full flex items-center bg-" + (primary ? color : "white")}>
        <img width="32" height="32" src={icon} aria-hidden />
        <span className={"font-bold ml-2 text-" + (primary ? "white" : color )}>{label}</span>
      </div>
    </a>
  );
}

export default CallToAction;
  