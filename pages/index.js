import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Landing = (props) => {
  return (<>
    <div className="landing-container1">
      <Head>
        <title>Perfin</title>
        <meta
          name="description"
          content="Perfin.ai – A full range AI financial advisor for helping you make your investment choices or any other finance related endeavors."
        />
        <meta property="og:title" content="Perfin" />
        <meta
          property="og:description"
          content="Perfin.ai – A full range AI financial advisor for helping you make your investment choices or any other finance related endeavors."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/6e10cd04-6e77-419d-8673-6c88d9fe7a09/39d37e51-6b96-45fe-8def-6831534794a1?org_if_sml=1&amp;force_format=original"
        />
        <meta name="robots" content="noindex" />
      </Head>
      <div className="landing-desktop1">
        <div className="landing-frame1">
          <div className="landing-frame2">
            <Link href="/" legacyBehavior>
              <a className="landing-link1">
                <img
                  alt="Frame1379"
                  src="/external/frame1379-q8dp.svg"
                  className="landing-frame4"
                />
              </a>
            </Link>
            <div className="landing-frame6">
              <span className="landing-text1">Roadmap</span>
              <span className="landing-text2">Privacy &amp; Terms</span>
              <span className="landing-text3">Get in touch</span>
            </div>
          </div>
          <div className="landing-frame3">
            <span className="landing-text4">
              <span className="landing-text5">
                A new look for everything
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="landing-text6">Finance</span>
            </span>
            <span className="landing-text7">
              A full range AI financial advisor for helping you make your
              investment choices or any other finance related endeavours.
            </span>
            <div className="landing-frame8"></div>
            <Link href="/playground" legacyBehavior>
              <a className="landing-link2">
                <img
                  alt="pastedImage"
                  src="/external/pastedimage-sf8g-200h.png"
                  className="landing-pasted-image"
                />
              </a>
            </Link>
          </div>
          <div className="landing-container2"></div>
          <img
            alt="Line11386"
            src="/external/line11386-qy8n.svg"
            className="landing-line1"
          />
          <div className="landing-frame5">
            <a
              href="https://twitter.com/perfintool"
              target="_blank"
              rel="noreferrer noopener"
              className="landing-link3"
            >
              <img
                alt="logoblack11376"
                src="/external/logoblack11376-sryq-200w.png"
                className="landing-logoblack1"
              />
            </a>
            <Link href="/" legacyBehavior>
              <a className="landing-link4">
                <img
                  alt="Frame1378"
                  src="/external/frame1378-lof8.svg"
                  className="landing-frame7"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <style jsx>
      {`
        .landing-container1 {
          width: 100%;
          display: flex;
          overflow: auto;
          min-height: 100vh;
          align-items: center;
          flex-direction: column;
        }
        .landing-desktop1 {
          gap: 9px;
          flex: 1;
          width: 100%;
          height: auto;
          display: flex;
          overflow: hidden;
          align-items: center;
          flex-shrink: 0;
          flex-direction: column;
          justify-content: center;
          background-color: rgba(255, 255, 255, 1);
        }
        .landing-frame1 {
          gap: 15px;
          display: flex;
          overflow: hidden;
          flex-grow: 1;
          align-self: stretch;
          align-items: center;
          flex-direction: column;
          background-size: cover;
          background-image: url('/external/tq_doephojnw4-ef9s-1500w.png');
        }
        .landing-frame2 {
          gap: 10px;
          height: 92px;
          display: flex;
          padding: 10px 50px;
          overflow: hidden;
          align-self: stretch;
          align-items: center;
          flex-shrink: 0;
          justify-content: space-between;
        }
        .landing-link1 {
          display: contents;
        }
        .landing-frame4 {
          width: 102px;
          height: 33px;
          text-decoration: none;
        }
        .landing-frame6 {
          gap: 22px;
          display: flex;
          overflow: hidden;
          align-items: center;
          justify-content: center;
        }
        .landing-text1 {
          color: rgb(0, 0, 0);
          height: auto;
          opacity: 0.3;
          font-size: 15px;
          font-style: Regular;
          text-align: left;
          font-family: 'Inter';
          font-weight: 400;
          line-height: normal;
          font-stretch: normal;
          text-decoration: line-through;
        }
        .landing-text2 {
          color: rgb(0, 0, 0);
          height: auto;
          opacity: 0.3;
          font-size: 15px;
          font-style: Regular;
          text-align: left;
          font-family: 'Inter';
          font-weight: 400;
          line-height: normal;
          font-stretch: normal;
          text-decoration: line-through;
        }
        .landing-text3 {
          color: rgb(0, 0, 0);
          height: auto;
          opacity: 0.3;
          font-size: 15px;
          font-style: Regular;
          text-align: left;
          font-family: 'Inter';
          font-weight: 400;
          line-height: normal;
          font-stretch: normal;
          text-decoration: line-through;
        }
        .landing-frame3 {
          gap: 15px;
          height: 100%;
          display: flex;
          padding: 10px 47px;
          overflow: hidden;
          align-self: stretch;
          align-items: flex-start;
          padding-left: 54px;
          flex-direction: column;
        }
        .landing-text4 {
          color: rgb(0, 0, 0);
          height: auto;
          font-size: 128px;
          align-self: stretch;
          text-align: left;
          font-family: 'Inter';
          font-weight: 300;
          line-height: 0.9;
          font-stretch: normal;
          letter-spacing: -5px;
        }
        .landing-text5 {
          font-style: normal;
          text-decoration: none;
        }
        .landing-text6 {
          font-style: italic;
          font-weight: 700;
          letter-spacing: -13px;
        }
        .landing-text7 {
          color: rgba(0, 0, 0, 0.3);
          height: auto;
          font-size: 32px;
          align-self: stretch;
          font-style: Regular;
          text-align: left;
          font-family: 'Inter';
          font-weight: 400;
          line-height: normal;
          font-stretch: normal;
          text-decoration: none;
        }
        .landing-frame8 {
          gap: -5px;
          display: flex;
          overflow: hidden;
          align-items: flex-end;
        }
        .landing-link2 {
          display: contents;
        }
        .landing-pasted-image {
          width: 360px;
          height: 52px;
          text-decoration: none;
        }
        .landing-container2 {
          width: 100%;
          height: 41px;
          display: flex;
          align-items: flex-start;
        }
        .landing-line1 {
          width: 1343px;
          height: 1px;
        }
        .landing-frame5 {
          gap: 10px;
          display: flex;
          padding: 10px 50px;
          overflow: hidden;
          align-self: stretch;
          align-items: center;
          flex-shrink: 0;
          justify-content: space-between;
        }
        .landing-link3 {
          display: contents;
        }
        .landing-logoblack1 {
          width: 28px;
          height: 29px;
          text-decoration: none;
        }
        .landing-link4 {
          display: contents;
        }
        .landing-frame7 {
          width: 102px;
          height: 33px;
          text-decoration: none;
        }
        @media (max-width: 991px) {
          .landing-text4 {
            font-family: Inter;
          }
          .landing-text5 {
            font-style: normal;
            text-decoration: none;
          }
          .landing-text6 {
            font-style: italic;
            font-weight: 700;
            letter-spacing: -10px;
          }
        }
        @media (max-width: 767px) {
          .landing-frame6 {
            width: 255px;
            height: 24px;
            display: none;
          }
          .landing-text2 {
            color: rgb(0, 0, 0);
            font-size: 15px;
            font-family: Inter;
            font-weight: 400;
            line-height: normal;
            text-decoration: none;
          }
          .landing-text3 {
            color: rgb(0, 0, 0);
            font-size: 15px;
            font-family: Inter;
            font-weight: 400;
            line-height: normal;
            text-decoration: none;
          }
          .landing-text4 {
            font-size: 95px;
            font-family: Inter;
          }
          .landing-text5 {
            font-style: normal;
          }
          .landing-text6 {
            font-style: italic;
            font-family: Inter;
            font-weight: 700;
            letter-spacing: -10px;
          }
          .landing-text7 {
            color: rgba(0, 0, 0, 0.3);
            font-size: 26px;
            font-family: Inter;
            font-weight: 400;
            line-height: normal;
            text-decoration: none;
          }
          .landing-pasted-image {
            width: 283px;
            height: 40px;
          }
        }
        @media (max-width: 479px) {
          .landing-frame6 {
            width: 257px;
            height: 21px;
            margin-right: 0px;
          }
          .landing-text1 {
            color: rgb(0, 0, 0);
            font-size: 15px;
            font-family: Inter;
            font-weight: 400;
            line-height: normal;
            text-decoration: none;
            background-color: rgb(0, 0, 0);
          }
          .landing-text2 {
            color: rgb(0, 0, 0);
            font-size: 10px;
            font-family: Inter;
            font-weight: 400;
            line-height: normal;
            text-decoration: none;
            background-color: rgb(0, 0, 0);
          }
          .landing-text3 {
            color: rgb(0, 0, 0);
            font-size: 15px;
            font-family: Inter;
            font-weight: 400;
            line-height: normal;
            text-decoration: none;
            background-color: rgb(0, 0, 0);
          }
          .landing-text4 {
            font-size: 63px;
            font-family: Inter;
          }
          .landing-text5 {
            font-style: normal;
            text-decoration: none;
          }
          .landing-text6 {
            font-style: italic;
            font-family: Inter;
            font-weight: 700;
            letter-spacing: -6px;
          }
          .landing-text7 {
            color: rgba(0, 0, 0, 0.3);
            font-size: 20px;
            font-family: Inter;
            font-weight: 400;
            line-height: normal;
            text-decoration: none;
          }
          .landing-pasted-image {
            width: 264px;
            height: 37px;
          }
          .landing-container2 {
            height: 18px;
          }
        }
      `}
    </style>
  </>);
}

export default Landing
