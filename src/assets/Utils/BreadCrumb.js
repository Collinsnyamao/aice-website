import React from "react";
import { Breadcrumbs } from "@material-tailwind/react";

const BreadCrumb = () => {
  return (
    // <div>BreadCrumb</div>
    <Breadcrumbs>
      <a href="#" className="">
        Docs
      </a>
      <a href="#" className="">
        Components
      </a>
      <a href="#">Breadcrumbs</a>
    </Breadcrumbs>
  );
};

export default BreadCrumb;
