import React, { useState } from "react";
import "./styles.css";
import RegionMap from "./region_map";
import axios from "axios";

import RegionOnboardingTap from "./components/onboarding/tab";
import MobilityServiceCard from "./components/onboarding/service-card";
import AnalyticsCard from "./components/analytics/card/analytics-card";

export default function App() {
  const [activetab, setActivetab] = useState(1);

  const [regionName, setRegionName] = useState();
  const [amSidebarLeft, setamSidebarLeft] = useState("-260px");
  const [amSidebarToggle, setamSidebarToggle] = useState(0);
  const [siteID, setsideID] = useState(0);

  function regionNameSet() {
    axios
      .get(
        `https://stack-dispatcher.api.arrive-mobility.com/region/new/` +
          regionName
      )
      .then(res => {
        //const persons = res.data;
      });
    setActivetab(2);
  }

  function toggleSidebar() {
    if (amSidebarToggle === 0) {
      setamSidebarLeft("0px");
      setamSidebarToggle(1);
    }
    if (amSidebarToggle === 1) {
      setamSidebarLeft("-260px");
      setamSidebarToggle(0);
    }
  }
  return (
    <div>
      <div
        className="am_os_header_full  am_row "
        style={{ borderBottom: "1px solid rgb(245, 247, 250)" }}
      >
        <div className="am_logo_container" onClick={() => setsideID(0)}>
          <svg
            width={39}
            height={50}
            viewBox="0 0 27 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.9013 4.0442C18.4432 3.24839 17.621 2.77401 16.7025 2.77246H16.701C16.1614 2.77246 15.6544 2.93628 15.2344 3.23519L15.9355 4.44948C15.9929 4.39746 16.0566 4.35166 16.1234 4.31361C16.2949 4.21423 16.4929 4.15989 16.7018 4.15989C17.1187 4.15989 17.4929 4.37572 17.7018 4.7383L22.5046 13.0566C22.6335 13.2787 22.8672 13.4029 23.1063 13.4029C23.2227 13.4029 23.3431 13.3734 23.4526 13.3113C23.7841 13.1188 23.8974 12.6949 23.7057 12.3633L18.9013 4.0442Z"
              fill="#00F464"
            />
            <path
              d="M26.9067 12.3623L21.3034 2.65729C20.5006 1.26598 19.1357 0.323423 17.5588 0.0695406C16.1039 -0.164156 14.6489 0.196877 13.5029 1.06644C13.8725 1.34595 14.2071 1.67747 14.4967 2.05558C15.3158 1.49967 16.3259 1.27762 17.3391 1.43911C18.5192 1.62855 19.5014 2.30713 20.1031 3.35138L25.7064 13.0564C25.8353 13.2784 26.069 13.4027 26.3081 13.4027C26.4246 13.4027 26.5449 13.3732 26.6544 13.311C26.9851 13.1177 27.0992 12.6938 26.9067 12.3623Z"
              fill="#00F464"
            />
            <path
              d="M20.5031 12.3625L14.9006 2.65831C13.9402 0.994487 12.2197 0.00146484 10.2981 0.00146484C8.37728 0.00146484 6.656 0.994487 5.6956 2.65831L0.093096 12.3625C-0.0986747 12.6941 0.0154576 13.118 0.34698 13.3097C0.678503 13.5007 1.10242 13.3874 1.29419 13.0559L6.89669 3.35163C7.60632 2.12181 8.87806 1.38735 10.2981 1.38735C11.7181 1.38735 12.9899 2.12181 13.6995 3.35163L19.302 13.0559C19.4301 13.2779 19.663 13.4029 19.9029 13.4029C20.0202 13.4029 20.1397 13.3726 20.2492 13.3097C20.5807 13.118 20.6941 12.6941 20.5031 12.3625Z"
              fill="#00A88A"
            />
            <path
              d="M12.4995 4.04318C12.0398 3.24737 11.2168 2.77222 10.2984 2.77222C9.37989 2.77222 8.55691 3.24737 8.09728 4.04318L3.29525 12.3615C3.10347 12.6931 3.2176 13.117 3.54913 13.3087C3.6586 13.3716 3.77739 13.4019 3.8954 13.4019C4.13531 13.4019 4.36823 13.2777 4.49634 13.0549L9.29837 4.7365C9.50722 4.3747 9.88144 4.15887 10.2991 4.15887C10.7168 4.15887 11.0911 4.3747 11.2999 4.7365L16.102 13.0549C16.293 13.3864 16.7169 13.4997 17.0492 13.3087C17.3807 13.117 17.494 12.6931 17.303 12.3615L12.4995 4.04318Z"
              fill="#00A88A"
            />
            <path
              d="M10.2965 5.77686L6.49446 12.3623C6.30269 12.6938 6.41682 13.1177 6.74835 13.3095C6.85782 13.3724 6.97661 13.4027 7.09462 13.4027C7.33453 13.4027 7.56745 13.2784 7.69555 13.0556L10.2965 8.55016L12.8974 13.0556C13.0884 13.3871 13.5123 13.5005 13.8446 13.3095C14.1762 13.1177 14.2895 12.6938 14.0985 12.3623L10.2965 5.77686Z"
              fill="#00A88A"
            />
          </svg>
        </div>
        <div
          style={{
            lineHeight: "50px",
            marginLeft: "12px",
            display: "flex",
            flexDirection: "row"
          }}
        >
          <div
            style={{
              paddingLeft: "16px",
              paddingRight: "16px",
              color: "#4F4FED",
              borderBottom: "1px solid #4F4FED",
              fontWeight: 500
            }}
          >
            ArriveOS{" "}
          </div>
          <div
            style={{
              paddingLeft: "16px",
              paddingRight: "16px",
              color: "#0b113c",
              borderBottom: "1px solid #f5f7fa",
              fontWeight: 500
            }}
          >
            Shuttle{" "}
          </div>
          <div
            style={{
              paddingLeft: "6px",
              paddingRight: "6px",
              color: "#4e4fed",
              padding: "1px",
              background: "#4e4fed5c" /* fontWeight: 500, */,
              height: "18px",
              borderRadius: "12px",
              lineHeight: "18px",
              fontSize: "5px",
              marginTop: "15px",
              marginLeft: "-8px"
            }}
          >
            Comming soon{" "}
          </div>

          <div
            onClick={() => setsideID(4)}
            style={{
              paddingLeft: "16px",
              paddingRight: "16px",
              color: "#0b113c",
              borderBottom: "1px solid #f5f7fa",
              fontWeight: 500
            }}
          >
            Analytics{" "}
          </div>
        </div>

        <svg
          width={23}
          height={24}
          viewBox="0 0 23 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            marginTop: "12px",
            marginLeft: "8px",
            width: "12px",
            display: "none"
          }}
        >
          <path d="M0.461853 1.30566L22.0004 22.8442" stroke="#DFDFDF" />
          <path d="M21.9971 1.30566L0.458559 22.8442" stroke="#DFDFDF" />
        </svg>
        <div
          style={{
            width: "36px",
            height: "36px",
            backgroundColor: "rgb(33, 59, 150)",
            marginTop: "8px",
            borderRadius: "14px",
            marginLeft: "10px",
            display: "none"
          }}
        />
        <div
          style={{
            width: "30px",
            height: "30px",
            backgroundColor: "rgb(236, 238, 245)",
            marginTop: "10px",
            borderRadius: "10px",
            marginLeft: "18px",
            textAlign: "center",
            lineHeight: "33px",
            display: "none"
          }}
        >
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 15L8 8L1 1" stroke="#ADB8DA" strokeWidth="1.5" />
            <path d="M7 15L14 8L7 1" stroke="#ADB8DA" strokeWidth="1.5" />
          </svg>
        </div>
        <div
          onClick={() => setsideID(1)}
          className="am_region_switcher"
          style={{
            display: "none",
            lineHeight: "50px",
            fontFamily: "sans-serif",
            color: "rgb(0, 67, 193)"
          }}
        >
          Neue Region erstellen
        </div>

        <div
          style={{
            padding: "5px",
            paddingLeft: "14px",
            paddingRight: "14px",
            color: "rgb(255 255 255)",
            background: "#1da1f2",
            height: "18px",
            borderRadius: "22px",
            lineHeight: "18px",
            fontSize: "13px",
            marginTop: "12px",
            /* marginLeft: '22px', */ /* minWidth: '60px', */ marginLeft: "auto"
          }}
        >
          App Store
        </div>

        <div
          style={{
            padding: "7.5px",
            marginLeft: "12px",
            display: "flex",
            flexDirection: "row",
            /* width: '200px'}}><div style={{width: '32px', height: '32px', /* background: 'rgb(144, 147, 162)', */ borderRadius:
              "50%",
            lineHeight: "35px",
            textAlign: "center",
            marginRight: "18px",
            display: "flex"
          }}
        >
          <svg
            width={15}
            height={15}
            viewBox="0 0 11 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginTop: "10px", marginLeft: "4px" }}
          >
            <path
              d="M0 11.234V1.73445C0 0.964115 0.834372 0.483057 1.50104 0.869022L9.70517 5.61879C10.3705 6.00395 10.3705 6.96447 9.70517 7.34964L1.50104 12.0994C0.83437 12.4854 0 12.0043 0 11.234Z"
              fill="white"
              style={{ fill: "#4e4fed" }}
            />
          </svg>
          <svg
            width={10}
            height={15}
            viewBox="0 0 8 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginTop: "10px", marginLeft: "6px" }}
          >
            <path
              d="M1 1L4.27273 3.72727L7 1"
              stroke="#4F4FED"
              strokeLinecap="round"
            />
          </svg>

          <div
            style={{
              position: "absolute",
              top: "48px",
              background: "white",
              width: "140px",
              height: "140px",
              marginLeft: "-55px",
              borderRadius: "6px",
              boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.25)"
            }}
          />
        </div>
        <svg
          width={32}
          height={32}
          style={{ marginTop: 10, marginRight: 12 }}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <circle cx={16} cy={16} r={16} fill="#50DEE7" fillOpacity="0.42" />
        </svg>
      </div>
      <div
        className="am_os_header_full  am_row "
        style={{ borderBottom: "1px solid #f5f7fa", display: "none" }}
      >
        <div className="am_logo_container">
          <svg
            width={39}
            height={50}
            viewBox="0 0 27 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.9013 4.0442C18.4432 3.24839 17.621 2.77401 16.7025 2.77246H16.701C16.1614 2.77246 15.6544 2.93628 15.2344 3.23519L15.9355 4.44948C15.9929 4.39746 16.0566 4.35166 16.1234 4.31361C16.2949 4.21423 16.4929 4.15989 16.7018 4.15989C17.1187 4.15989 17.4929 4.37572 17.7018 4.7383L22.5046 13.0566C22.6335 13.2787 22.8672 13.4029 23.1063 13.4029C23.2227 13.4029 23.3431 13.3734 23.4526 13.3113C23.7841 13.1188 23.8974 12.6949 23.7057 12.3633L18.9013 4.0442Z"
              fill="#00F464"
            />
            <path
              d="M26.9067 12.3623L21.3034 2.65729C20.5006 1.26598 19.1357 0.323423 17.5588 0.0695406C16.1039 -0.164156 14.6489 0.196877 13.5029 1.06644C13.8725 1.34595 14.2071 1.67747 14.4967 2.05558C15.3158 1.49967 16.3259 1.27762 17.3391 1.43911C18.5192 1.62855 19.5014 2.30713 20.1031 3.35138L25.7064 13.0564C25.8353 13.2784 26.069 13.4027 26.3081 13.4027C26.4246 13.4027 26.5449 13.3732 26.6544 13.311C26.9851 13.1177 27.0992 12.6938 26.9067 12.3623Z"
              fill="#00F464"
            />
            <path
              d="M20.5031 12.3625L14.9006 2.65831C13.9402 0.994487 12.2197 0.00146484 10.2981 0.00146484C8.37728 0.00146484 6.656 0.994487 5.6956 2.65831L0.093096 12.3625C-0.0986747 12.6941 0.0154576 13.118 0.34698 13.3097C0.678503 13.5007 1.10242 13.3874 1.29419 13.0559L6.89669 3.35163C7.60632 2.12181 8.87806 1.38735 10.2981 1.38735C11.7181 1.38735 12.9899 2.12181 13.6995 3.35163L19.302 13.0559C19.4301 13.2779 19.663 13.4029 19.9029 13.4029C20.0202 13.4029 20.1397 13.3726 20.2492 13.3097C20.5807 13.118 20.6941 12.6941 20.5031 12.3625Z"
              fill="#00A88A"
            />
            <path
              d="M12.4995 4.04318C12.0398 3.24737 11.2168 2.77222 10.2984 2.77222C9.37989 2.77222 8.55691 3.24737 8.09728 4.04318L3.29525 12.3615C3.10347 12.6931 3.2176 13.117 3.54913 13.3087C3.6586 13.3716 3.77739 13.4019 3.8954 13.4019C4.13531 13.4019 4.36823 13.2777 4.49634 13.0549L9.29837 4.7365C9.50722 4.3747 9.88144 4.15887 10.2991 4.15887C10.7168 4.15887 11.0911 4.3747 11.2999 4.7365L16.102 13.0549C16.293 13.3864 16.7169 13.4997 17.0492 13.3087C17.3807 13.117 17.494 12.6931 17.303 12.3615L12.4995 4.04318Z"
              fill="#00A88A"
            />
            <path
              d="M10.2965 5.77686L6.49446 12.3623C6.30269 12.6938 6.41682 13.1177 6.74835 13.3095C6.85782 13.3724 6.97661 13.4027 7.09462 13.4027C7.33453 13.4027 7.56745 13.2784 7.69555 13.0556L10.2965 8.55016L12.8974 13.0556C13.0884 13.3871 13.5123 13.5005 13.8446 13.3095C14.1762 13.1177 14.2895 12.6938 14.0985 12.3623L10.2965 5.77686Z"
              fill="#00A88A"
            />
          </svg>
        </div>
        <svg
          width={23}
          height={24}
          viewBox="0 0 23 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            marginTop: "12px",
            marginLeft: "8px",
            width: "12px",
            display: "none"
          }}
        >
          <path d="M0.461853 1.30566L22.0004 22.8442" stroke="#DFDFDF" />
          <path d="M21.9971 1.30566L0.458559 22.8442" stroke="#DFDFDF" />
        </svg>
        <div
          style={{
            width: "36px",
            height: "36px",
            backgroundColor: "rgb(33, 59, 150)",
            marginTop: "8px",
            borderRadius: "14px",
            marginLeft: "10px",
            display: "none"
          }}
        />
        <div
          style={{
            width: "30px",
            height: "30px",
            backgroundColor: "rgb(236, 238, 245)",
            marginTop: "10px",
            borderRadius: "10px",
            marginLeft: "18px",
            textAlign: "center",
            lineHeight: "33px",
            display: "none"
          }}
          onClick={() => toggleSidebar()}
        >
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 15L8 8L1 1" stroke="#ADB8DA" strokeWidth="1.5" />
            <path d="M7 15L14 8L7 1" stroke="#ADB8DA" strokeWidth="1.5" />
          </svg>
        </div>
        <div
          style={{
            display: "none",
            lineHeight: "50px",
            fontFamily: "sans-serif",
            color: "rgb(0, 67, 193)"
          }}
          className="am_region_switcher"
        >
          Neue Region erstellen
        </div>
        <div
          style={{
            padding: "7.5px",
            marginLeft: "auto",
            display: "flex",
            flexDirection: "row",
            display: "none"
          }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              background: "rgb(144, 147, 162)",
              borderRadius: "50%",
              lineHeight: "35px",
              textAlign: "center"
            }}
          >
            <svg
              width={11}
              height={13}
              viewBox="0 0 11 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginTop: "10px", marginLeft: "4px" }}
            >
              <path
                d="M0 11.234V1.73445C0 0.964115 0.834372 0.483057 1.50104 0.869022L9.70517 5.61879C10.3705 6.00395 10.3705 6.96447 9.70517 7.34964L1.50104 12.0994C0.83437 12.4854 0 12.0043 0 11.234Z"
                fill="white"
              />
            </svg>
          </div>
          <div
            style={{
              width: "1px",
              height: "35px",
              background: "rgb(215, 225, 234)",
              marginLeft: "8px",
              marginRight: "8px"
            }}
          />
          <div
            style={{
              width: "32px",
              height: "32px",
              background: "rgb(0, 244, 100)",
              borderRadius: "50%",
              textAlign: "center"
            }}
          >
            <svg
              width={23}
              height={31}
              viewBox="0 0 23 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "14px" }}
            >
              <circle
                cx={11}
                cy={11}
                r={10}
                fill="white"
                stroke="#213A4B"
                strokeWidth={2}
                style={{ fill: "transparent", stroke: "rgb(4, 173, 69)" }}
              />
              <path
                d="M1 30.4C1 30.4 2.41609 25.7522 11.9747 26.0104C21.5333 26.2686 21.5333 30.4 21.5333 30.4"
                stroke="#213A4B"
                strokeWidth={2}
                style={{ stroke: "rgb(4, 173, 69)" }}
              />
            </svg>
          </div>
        </div>
      </div>

      <div class="am_row">
        <div
          style={{
            width: "260px",
            height: "100vh",
            background: "white",
            borderRight: "1px solid #ebeff5",
            marginLeft: amSidebarLeft
          }}
          className="am_sidebar"
        >
          <div style={{ padding: "12px" }}>
            <div style={{ color: "#aaa" }}>Operations</div>
            <div style={{ color: "#aaa", marginTop: "12px" }}>
              Schnittstellen
            </div>
            <div
              style={{
                color: "#555c6f",
                marginLeft: "20px",
                paddingTop: "4px"
              }}
            >
              {" "}
              <svg
                width={12}
                height={12}
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: "18px", height: "18px" }}
              >
                <circle cx={6} cy={6} r="5.5" fill="#FFFAFA" stroke="#253A41" />
                <path
                  d="M5.27591 5.31799L5.00386 4.89849L4.89898 4.9665L4.83845 5.07586L5.27591 5.31799ZM3.27927 8.92541L2.84181 8.68328L3.55133 9.34491L3.27927 8.92541ZM6.73862 6.68199L7.01067 7.1015L7.11555 7.03348L7.17608 6.92412L6.73862 6.68199ZM8.73526 3.07458L9.17272 3.3167L8.46321 2.65507L8.73526 3.07458ZM4.83845 5.07586L2.84181 8.68328L3.71674 9.16753L5.71338 5.56012L4.83845 5.07586ZM3.55133 9.34491L7.01067 7.1015L6.46657 6.26248L3.00722 8.5059L3.55133 9.34491ZM7.17608 6.92412L9.17272 3.3167L8.2978 2.83245L6.30116 6.43986L7.17608 6.92412ZM8.46321 2.65507L5.00386 4.89849L5.54797 5.7375L9.00731 3.49408L8.46321 2.65507Z"
                  fill="#253A41"
                />
              </svg>
              API Explorer{" "}
            </div>
            <div
              style={{
                color: "#555c6f",
                marginLeft: "20px",
                paddingTop: "4px"
              }}
            >
              Analytics{" "}
            </div>
          </div>
        </div>

        {siteID == 4 && (
          <div
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
              gridColumnGap: "12px",
              padding: "24px",
              gridTemplateRows: "min-content",
              gridRowGap: "22px"
            }}
          >
            <AnalyticsCard />
          </div>
        )}
        {siteID == 0 && (
          <div
            style={{
              display: "block",
              margin: "0 auto",
              width: "480px",
              marginTop: "124px"
            }}
          >
            <svg
              width={157}
              height={170}
              viewBox="0 0 157 170"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: "block", margin: "0 auto" }}
            >
              <circle cx="78.5" cy="78.5" r="78.5" fill="#DAE1ED" />
              <rect
                x="27.5806"
                y="50.9193"
                width="101.838"
                height="118.811"
                rx={3}
                fill="white"
              />
              <rect
                x="27.5806"
                width="101.838"
                height="42.4324"
                rx={3}
                fill="#636A81"
              />
              <rect
                x="33.9458"
                y="27.5806"
                width="4.24324"
                height="8.48648"
                rx={1}
                fill="#00F464"
              />
              <rect
                x="40.3115"
                y="27.5806"
                width="4.24324"
                height="8.48648"
                rx={1}
                fill="#00F464"
              />
              <rect
                x="46.6761"
                y="27.5806"
                width="4.24324"
                height="8.48648"
                rx={1}
                fill="#00F464"
              />
            </svg>
            <div
              style={{
                textAlign: "center",
                paddingTop: "22px",
                paddingBottom: "12px",
                fontWeight: 500,
                color: "#1b1b4a",
                fontSize: "18px"
              }}
            >
              Keine Region vorhanden
            </div>
            <div
              style={{
                textAlign: "center",
                paddingTop: "8px",
                paddingBottom: "24px",
                fontWeight: 500,
                color: "#1b1b4a",
                fontSize: "14px"
              }}
            >
              Erstelle eine Region, suche nach einer erstellten Region oder
              nutze eine unserer Beispielrregionen.
            </div>
            <div
              className="am_row"
              style={{ width: "320px", margin: "0 auto" }}
            >
              <div
                onClick={() => setsideID(1)}
                style={{
                  padding: "12px",
                  background: "#4F4FED",
                  color: "white",
                  borderRadius: "6px",
                  marginRight: "12px"
                }}
              >
                Region erstellen{" "}
              </div>
              <div
                style={{
                  padding: "12px",
                  background: "#4285F4",
                  color: "white",
                  borderRadius: "6px",
                  marginRight: "12px"
                }}
              >
                Region erstellen{" "}
              </div>
            </div>
          </div>
        )}
        {siteID == 1 && (
          <div
            className="am_region_onboarding_wrapper"
            style={{ marginTop: 42 }}
          >
            <div className="am_region_onboarding_tabmenu am_row">
              <RegionOnboardingTap
                expClick={at => setActivetab(at)}
                activeTab={activetab}
                StepNr={1}
                StepName="Basisdaten"
              />
              <RegionOnboardingTap
                expClick={at => setActivetab(at)}
                activeTab={activetab}
                StepNr={2}
                StepName="Region selektieren"
                style={{ width: "25%", height: 50, cursor: "pointer" }}
              />

              <RegionOnboardingTap
                expClick={at => setActivetab(at)}
                activeTab={activetab}
                StepNr={3}
                StepName="Services"
              />
              <RegionOnboardingTap
                expClick={at => setActivetab(at)}
                activeTab={activetab}
                StepNr={4}
                StepName="Go Live"
              />
            </div>

            {activetab == 1 && (
              <div
                style={{
                  padding: "12px",
                  width: "100%",
                  paddingTop: "60px",
                  paddingBottom: "60px"
                }}
              >
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    minHeight: "500px"
                  }}
                >
                  <div
                    style={{
                      width: "50%",
                      background: "#025B81",
                      marginRight: "22px"
                    }}
                  />
                  <div>
                    <div
                      style={{
                        display: "flex",
                        width: "600px",
                        margin: "0px auto"
                      }}
                    >
                      <input
                        type="text"
                        defaultValue
                        style={{
                          background: "rgb(236, 238, 245)",
                          border: "none",
                          borderRadius: "5px",
                          padding: "8px",
                          minWidth: "240px",
                          marginRight: "12px"
                        }}
                      />
                      <div
                        style={{
                          width: "180px",
                          lineHeight: "30px",
                          color: "rgb(86, 110, 113)"
                        }}
                      >
                        {" "}
                        os.arrive-mobility.com
                      </div>
                    </div>

                    <div
                      onClick={() => setActivetab(2)}
                      style={{
                        width: "120px",
                        height: "40px",
                        background: "#00F464",
                        borderRadius: "18px",
                        marginLeft: "auto",
                        marginTop: "auto",
                        marginBottom: "12px",
                        color: "white",
                        textAlign: "center",
                        lineHeight: "40px"
                      }}
                    >
                      weiter
                    </div>
                  </div>
                </div>

                <div
                  style={{ display: "flex", width: "600px", margin: "0 auto" }}
                >
                  <input
                    type="text"
                    onChange={e => setRegionName(e.target.value)}
                    value={regionName}
                    style={{
                      background: "#eceef5",
                      border: "none",
                      borderRadius: "5px",
                      padding: "8px",
                      minWidth: "240px",
                      marginRight: "12px"
                    }}
                  />
                  <div
                    style={{
                      width: "180px",
                      lineHeight: "30px",
                      color: "#566e71"
                    }}
                  >
                    {" "}
                    os.arrive-mobility.com
                  </div>
                  <div
                    onClick={() => regionNameSet()}
                    style={{
                      width: "130px",
                      height: "30px",
                      background: "#15e666",
                      borderRadius: "5px",
                      color: "white",
                      textAlign: "center",
                      lineHeight: "30px"
                    }}
                  >
                    festlegen
                  </div>
                </div>
              </div>
            )}
            {activetab == 3 && (
              <div>
                <div
                  className="am_integration_illustration_bx"
                  style={{ padding: "12px", height: "160px", display: "none" }}
                >
                  <svg
                    width={33}
                    height={39}
                    viewBox="0 0 33 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="16.5"
                      cy="16.5"
                      r="16.5"
                      fill="black"
                      fillOpacity="0.63"
                      style={{ fill: "white", fillOpacity: 1 }}
                    />
                    <rect
                      x={15}
                      y={24}
                      width={3}
                      height={15}
                      fill="#FFDB8E"
                      style={{ fill: "#192a31" }}
                    />
                    <path
                      d="M9 13H24V20C24 22.7614 21.7614 25 19 25H14C11.2386 25 9 22.7614 9 20V13Z"
                      fill="#FFDB8E"
                      style={{ fill: "#192a31" }}
                    />
                    <rect
                      x={12}
                      y={9}
                      width={2}
                      height={4}
                      fill="#FFDB8E"
                      style={{ fill: "#192a31" }}
                    />
                    <rect
                      x={12}
                      y={9}
                      width={2}
                      height={4}
                      fill="#FFDB8E"
                      style={{ fill: "#192a31" }}
                    />
                    <rect
                      x={19}
                      y={9}
                      width={2}
                      height={4}
                      fill="#FFDB8E"
                      style={{ fill: "#192a31" }}
                    />
                    <rect
                      x={19}
                      y={9}
                      width={2}
                      height={4}
                      fill="#FFDB8E"
                      style={{ fill: "#192a31" }}
                    />
                  </svg>
                </div>
                <div
                  style={{
                    paddingTop: "22px",
                    paddingBottom: "12px",
                    fontWeight: 600,
                    fontSize: "24px",
                    color: "#172f3e"
                  }}
                >
                  {" "}
                  Mobilitätsdienste auswählen{" "}
                </div>{" "}
                <div>
                  {" "}
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum.
                </div>
                <div style={{ paddingTop: 22, color: "#b5bdc1" }}>
                  {" "}
                  Verkehrsverbünde{" "}
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr 1fr ",
                    paddingTop: "22px"
                  }}
                >
                  {" "}
                  <MobilityServiceCard
                    brandColor="linear-gradient(180deg, #55AB26 0%, #007F32 100%)"
                    ServiceName="Verkehrsverbund Rhein-Ruhr"
                    secondLine="Bus, Bahn, Tram, U-Bahn"
                  />
                  <MobilityServiceCard
                    brandColor="#A2FAF0"
                    ServiceName="Verkehrsverbund Rhein-Sieg"
                  />
                  <MobilityServiceCard
                    brandColor="#FF6600"
                    ServiceName="Verkehrsverbund Stuttgart"
                  />
                  <MobilityServiceCard
                    brandColor="#E10A1D"
                    ServiceName="Verkehrsverbund Berlin-Brandenburg"
                  />
                </div>
                <div style={{ paddingTop: 22, color: "#b5bdc1" }}>
                  {" "}
                  Tretroller/ Scooter{" "}
                </div>{" "}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr 1fr ",
                    paddingTop: "22px"
                  }}
                >
                  <MobilityServiceCard
                    brandColor="#69D2AA"
                    ServiceName="Tier"
                  />
                  <MobilityServiceCard brandColor="#F46C63" ServiceName="Voi" />
                  <MobilityServiceCard
                    brandColor="#00ACE9"
                    ServiceName="Stella"
                  />

                  <MobilityServiceCard
                    brandColor="#E30613"
                    ServiceName="Rhingo"
                  />

                  <MobilityServiceCard
                    brandColor="#282828"
                    ServiceName="dott"
                  />
                </div>
                <div style={{ paddingTop: 22, color: "#b5bdc1" }}>
                  {" "}
                  Carsharing{" "}
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr 1fr ",
                    paddingTop: "22px"
                  }}
                >
                  <MobilityServiceCard brandColor="black" ServiceName="Miles" />
                </div>
                <div
                  onClick={() => setActivetab(4)}
                  style={{
                    width: "120px",
                    height: "40px",
                    background: "#00F464",
                    borderRadius: "18px",
                    marginLeft: "auto",
                    marginTop: "auto",
                    marginBottom: "12px",
                    color: "white",
                    textAlign: "center",
                    lineHeight: "40px"
                  }}
                >
                  weiter
                </div>
              </div>
            )}
            {activetab == 2 && (
              <RegionMap drawingDone={() => setActivetab(3)} />
            )}

            {activetab == 4 && (
              <div>
                <svg
                  style={{
                    display: "block",
                    margin: "0 auto",
                    marginTop: 22
                  }}
                  width={227}
                  height={175}
                  viewBox="0 0 227 150"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M117 109.887L73.2759 88.5L117 67.1132L160.724 88.5L117 109.887Z"
                    fill="white"
                    stroke="#02BC6D"
                    strokeWidth={2}
                  />
                  <g className="animated bounce">
                    <path
                      d="M79 55.3424L116.5 37L154 55.3424L116.5 73.6848L79 55.3424Z"
                      fill="#00EA60"
                    />
                    <path
                      d="M79 18.3424L116.5 0L154 18.3424L116.5 36.6848L79 18.3424Z"
                      fill="#0BFF6F"
                    />
                    <path
                      d="M79 18.5V55.5L116.5 73.5V36.5L79 18.5Z"
                      fill="#00F464"
                    />
                    <path d="M153.5 18V55L116 73V36L153.5 18Z" fill="#03E861" />
                  </g>
                  <path
                    d="M46 148.887L2.27591 127.5L46 106.113L89.7241 127.5L46 148.887Z"
                    fill="white"
                    stroke="#02BC6D"
                    strokeWidth={2}
                  />
                  <g className="animated bounce">
                    <path
                      d="M8 114.342L45.5 96L83 114.342L45.5 132.685L8 114.342Z"
                      fill="#00EA60"
                    />
                    <path
                      d="M8 77.3424L45.5 59L83 77.3424L45.5 95.6848L8 77.3424Z"
                      fill="#0BFF6F"
                    />
                    <path
                      d="M8 77.5V114.5L45.5 132.5V95.5L8 77.5Z"
                      fill="#00F464"
                    />
                    <path d="M82.5 77V114L45 132V95L82.5 77Z" fill="#03E861" />
                  </g>
                  <path
                    d="M181 139.887L137.276 118.5L181 97.1132L224.724 118.5L181 139.887Z"
                    fill="white"
                    stroke="#02BC6D"
                    strokeWidth={2}
                  />

                  <g className="animated bounce">
                    <path
                      d="M143 105.342L180.5 87L218 105.342L180.5 123.685L143 105.342Z"
                      fill="#00EA60"
                    />
                    <path
                      d="M143 68.3424L180.5 50L218 68.3424L180.5 86.6848L143 68.3424Z"
                      fill="#0BFF6F"
                    />
                    <path
                      d="M143 68.5V105.5L180.5 123.5V86.5L143 68.5Z"
                      fill="#00F464"
                    />
                    <path
                      d="M217.5 68V105L180 123V86L217.5 68Z"
                      fill="#03E861"
                    />
                  </g>
                </svg>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"https://" + regionName + ".os.arrive-mobility.com"}
                >
                  {regionName}
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
