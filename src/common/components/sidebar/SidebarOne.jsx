import Link from "next/link";

const SidebarOne = ({ categories }) => {
  return (
    <div className="sidebar-inner">
      <h4>Categories</h4>
      <hr className="text-dark bg-dark" />
      {categories.map((item) => (
        <div key={item.attributes.slug}>
          {'> '}<Link href={`/category/${item.attributes.slug}`}>{item.attributes.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default SidebarOne;
