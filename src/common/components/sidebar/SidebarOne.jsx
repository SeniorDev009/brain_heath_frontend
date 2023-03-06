import WidgetCategory from "./WidgetCategory";
import WidgetInstagramPost from "./WidgetInstagramPost";
import WidgetPostList from "./WidgetPostList";
import WidgetSearch from "./WidgetSearch";
import WidgetSocialShare from "./WidgetSocialShare";

const SidebarOne = ({ dataPost }) => {
  return (
    <div className="sidebar-inner">
      <WidgetCategory catData={null} />
      {/* <WidgetSearch /> */}
      <br />
      {/* <WidgetPostList postData={null} /> */}
      {/* <WidgetSocialShare /> */}
      {/* <WidgetInstagramPost /> */}
    </div>
  );
};

export default SidebarOne;
