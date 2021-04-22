import React from "react";
import Css from "./index.module.scss";

interface Props {
  className?: string;
}
const Loading: React.FunctionComponent<Props> = (props: Props) => {
  const { className } = props;
  return <div className={`${Css.main} ${className}`}>Loading...</div>;
};

Loading.defaultProps = {
  className: "",
};
export default Loading;
