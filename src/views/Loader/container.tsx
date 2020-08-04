import React from "react";
import { LoaderWrapper, LoaderImage } from "./styled";
import { useSelector } from "react-redux";
import loader from "./global_loader.gif";

function Container() {
  const isLoading = useSelector((state: any) => state.general.globalLoading);
  return (
    <LoaderWrapper isLoading={isLoading}>
      {isLoading && <LoaderImage src={loader} alt="" />}
    </LoaderWrapper>
  );
}
export default Container;
