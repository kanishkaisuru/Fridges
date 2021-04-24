import React from "react";

export default function Header() {
  const today = new Date();
  const curHr = today.getHours();
  let wish = "";
  let icon = "";

  if (curHr < 12) {
    wish = "Good Morning";
    icon = "em em-barely_sunny";
  } else if (curHr < 18) {
    wish = "Good Afternoon";
    icon = "em em-mostly_sunny";
  } else {
    wish = "Good Evening";
    icon = "em em-first_quarter_moon_with_face";
  }

  return (
    <header class="colum">
      <div class="main-title">
        <h1>{wish}, Johny!</h1>
      </div>
      <div class="sub-title">
        <h5>
          <span style={{ fontSize: "15px" }}><i class={icon} aria-role="presentation" aria-label=""></i></span> It's better to go
          shopping before this friday
        </h5>
      </div>
    </header>
  );
}
