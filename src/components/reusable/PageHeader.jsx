export default function PageHeader({ title, subtitle, className }) {
  return (
    <div className={`${className} py-14 `}>
      <div className="max_container">
        <h2 className="section_title">{title}</h2>
        <p className="section_subtitle">{subtitle}</p>
      </div>
    </div>
  );
}
