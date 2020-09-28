import React from "react";
import "../css/Thankyou-page.css";

function ThankYoImg(props) {
  return (
    <>
      <div id="thankyou-img">
        <p>{props.message}</p>
        <span>
          <p>
            Image by&nbsp;
            <a href="https://pixabay.com/users/thewet_new-6254575/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5040992">
              thewet nonthachai
            </a>
            &nbsp; from&nbsp;
            <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5040992">
              &nbsp;Pixabay
            </a>
          </p>
        </span>
      </div>
    </>
  );
}

export default ThankYoImg;
