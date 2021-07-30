import React from "react";
import pure from "recompose/pure";
import SvgIcon from "@material-ui/core/SvgIcon";

let User = (props) => (
  <SvgIcon {...props}>
    <path d="M16.44 11A5.94 5.94 0 0 0 18 7 6 6 0 0 0 6 7a5.94 5.94 0 0 0 1.56 4A5 5 0 0 0 3 16v5a1 1 0 0 0 2 0v-5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v5a1 1 0 0 0 2 0v-5a5 5 0 0 0-4.56-5zM8 7a4 4 0 1 1 4 4 4 4 0 0 1-4-4z" />
  </SvgIcon>
);
User = pure(User);
User.displayName = "User";
User.muiName = "SvgIcon";

export default User;