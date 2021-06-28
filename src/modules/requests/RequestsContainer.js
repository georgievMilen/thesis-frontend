import React, { useEffect, useState } from "react";
import { Label, List } from "../../components/common";
import { DirReq, PostReq } from "../../components/composite";
import { GET_REQUESTS, UPDATE_DIR_REQ, UPDATE_POST_REQ } from "../../constants";
import { getAPI } from "../services";
import { authenticationService } from "../../utils";

const RequestsContainer = () => {
  const [dirReqArr, setDirReqArr] = useState([]);
  const [postReqArr, setPostReqArr] = useState([]);

  useEffect(() => {
    const localStorageEmail = authenticationService.currentUserValue;

    getAPI({ url: GET_REQUESTS, params: localStorageEmail })
      .then((res) => {
        if (res.data !== "No requests.") {
          const data = { ...res.data };
          setDirReqArr(data.dirReq);
          setPostReqArr(data.postReq);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Label>Requests:</Label>
      <div className="search_result_list_wrapper">
        <List arr={dirReqArr} Element={DirReq} url={UPDATE_DIR_REQ} />
        <List arr={postReqArr} Element={PostReq} url={UPDATE_POST_REQ} />
      </div>
    </>
  );
};

export { RequestsContainer };
