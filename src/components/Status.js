import React from "react";

export default function Status(props) {
  return (
    <p style={{ backgroundColor: props.bColor, color: props.color}} class="status">
      {props.status}
    </p>
  );
}
