const CallToAction = ({ icon, label, url, bg, text }) => {
  return (
    <a className="no-underline" href={url} target="_blank">
      <div className={"h-16 px-4 rounded-full flex items-center " + bg}>
        <img width="32" height="32" src={icon} aria-hidden />
        <span className={"font-bold ml-2 " + text}>{label}</span>
      </div>
    </a>
  );
}

export default CallToAction;
  