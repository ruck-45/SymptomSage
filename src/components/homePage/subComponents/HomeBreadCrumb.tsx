// Dependencies
import { Link } from "react-router-dom";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

// Local Files
import "./HomeBreadCrumb.css";
import { directory } from "../../symptomScan/utils/customTypes";

type HomeBreadCrumbProps = {
  directories: directory;
};

const HomeBreadCrumb = (props: HomeBreadCrumbProps) => {
  return (
    <div className="HomeBreadCrumb flex items-center ps-[7%]">
      {props.directories ? (
        <Breadcrumbs size="lg" className="font-semibold">
          {props.directories.map((ob) => {
            return (
              <BreadcrumbItem key={ob.name}>
                <Link to={ob.path}>{ob.name}</Link>
              </BreadcrumbItem>
            );
          })}
        </Breadcrumbs>
      ) : (
        ""
      )}
    </div>
  );
};

export default HomeBreadCrumb;
