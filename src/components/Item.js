import React from "react";
import date from "date-and-time";
import Status from "./Status";
import { useDispatch } from "react-redux";
import { removeItem } from "../actions/iteamAddActions";

export default function Item(props) {
  const { item } = props;
  const dispatch = useDispatch();
  const now = new Date();
  const today = date.format(now, "YYYY-MM-DD");
  const beforOneMonth = date.addMonths(
    date.parse(item.expiry, "YYYY-MM-DD"),
    1
  );

  const removeFromItemHandler = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div key={item._id} class="row">
      <div class="leftItem">
        <p class="item">{item.title}</p>
        <p class="expireDate">{item.expiry}</p>
      </div>
      <div class="rightItem">
        {today > item.expiry ? (
          <Status color={"green"} bColor={"#0080003d"} status={"Healthy"} />
        ) : beforOneMonth > item.expiry ? (
          <Status
            color={"brown"}
            bColor={"#0080003d"}
            status={"Expired Soon"}
          />
        ) : (
          <Status color={"red"} bColor={"#ff00006b"} status={"Expired"} />
        )}
        <i
          class="fa fa-trash deleteIcon"
          aria-hidden="true"
          onClick={() => {
            removeFromItemHandler(item._id);
          }}
          style={{ color: item.color }}
        ></i>
      </div>
    </div>
  );
}
