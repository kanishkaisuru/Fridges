import React, { useEffect } from "react";
import Item from "./Item";
import MessageBox from "./MessageBox";
import LoadingBox from "./LoadingBox";
import { useDispatch, useSelector } from "react-redux";
import { listItems } from "../actions/itemAction";

export default function Footer() {
  const dispatch = useDispatch();
  const itemList = useSelector((state) => state.itemList);
  const { loading, error, items } = itemList;

  useEffect(() => {
    dispatch(listItems());
  }, [dispatch]);

  return (
    <footer>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          <div className="totolItems">
            <p>Total Items -- {items.length}</p>
          </div>
          {items.map((item) => (
            <Item key={item._id} item={item}></Item>
          ))}
        </>
      )}
    </footer>
  );
}
