import Search from "@/assets/icons/search-icon.svg";
import React from "react";

const SearchIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <Search {...props} />
));

SearchIcon.displayName = "SearchIcon";
export default SearchIcon;
