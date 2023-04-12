import { Fragment, useState } from "react";
import classes from "./ChatPopup.module.css";
import { BsMessenger } from "react-icons/bs";
import { FcCustomerSupport } from "react-icons/fc";
import { HiOutlinePaperClip } from "react-icons/hi";
import { FiSmile } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
// Là con của components/HomePage.js
// Phần này chỉ xuất hiện ở trong HomePage. Có 1 icon xuất hiện, khi click vào sẽ hiển thị ra ô chat.

const ChatPopup = () => {
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <Fragment>
      <div>
        <div onClick={toggleChat} className={classes.chatIcon}>
          <BsMessenger className={classes.iconChat} />
        </div>

        {showChat && (
          <div className={classes.chatPopup}>
            <div className={classes.chatTop}>
              <h5>Customer Support</h5>
              <div className={classes.top2}>Let's Chat App</div>
            </div>
            <div className={classes.chatBody}>
              <div className={classes.user}>Xin chào</div>
              <div className={classes.user}>
                Làm thế nào để xem các sản phẩm
              </div>
              <div className={classes.bodyflex}>
                <FcCustomerSupport className={classes.iconcus} />
                <div className={classes.admin}>ADMIN: Chào bạn</div>
              </div>
              <div className={classes.bodyflex}>
                <FcCustomerSupport className={classes.iconcus} />
                <div className={classes.admin}>
                  ADMIN: Bạn có thể vào mục Shop để xem các sản phẩm
                </div>
              </div>
            </div>
            <div className={classes.chatBottom}>
              <FcCustomerSupport className={classes.iconcus} />
              <input type="text" placeholder="Enter Message!" />
              <HiOutlinePaperClip className={classes.iconbtm} />
              <FiSmile className={classes.iconbtm} />
              <FaTelegramPlane className={classes.iconbtm3} />
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default ChatPopup;
