const Footer = () => {
  return (
    <footer
      style={{
        bottom: 0,
        left: 0,
        position: "absolute",
        backgroundColor: "red",
        width: "100vw",
      }}
    >
      <div>
        <div>
          <ul
            style={{
              listStyle: "none",
              textAlign: "center",
            }}
            className="footer-list"
          >
            <li>
              <a href="/#">ホーム</a>
            </li>
            <li>
              <a href="/#">利用規約</a>
            </li>
            <li>
              <a href="/#"> QA・異議</a>
            </li>
          </ul>
        </div>
        <div
          style={{
            borderTop: "thick double black",
          }}
        >
          <p
            style={{
              fontWeight: "bold",
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            ©️ ProjectX, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
