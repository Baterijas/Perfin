import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Playground = (props) => {
  return (<>
    <div className="playground-container1">
      <Head>
        <title>Playground - Perfin</title>
        <meta
          name="description"
          content="Perfin.ai – A full range AI financial advisor for helping you make your investment choices or any other finance related endeavors."
        />
        <meta property="og:title" content="Playground - Perfin" />
        <meta
          property="og:description"
          content="Perfin.ai – A full range AI financial advisor for helping you make your investment choices or any other finance related endeavors."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/6e10cd04-6e77-419d-8673-6c88d9fe7a09/39d37e51-6b96-45fe-8def-6831534794a1?org_if_sml=1&amp;force_format=original"
        />
      </Head>
      <div className="playground-desktop1">
        <div className="playground-frame1">
          <div className="playground-frame2">
            <Link href="/" legacyBehavior>
              <a className="playground-link1">
                <img
                  alt="Frame1379"
                  src="/external/frame1379-q8dp.svg"
                  className="playground-frame4"
                />
              </a>
            </Link>
            <div className="playground-frame6">
              <span className="playground-text1">Roadmap</span>
              <span className="playground-text2">Privacy &amp; Terms</span>
              <span className="playground-text3">Get in touch</span>
            </div>
          </div>
          <div className="playground-frame3">
            <span className="playground-text4">
              <span>
                Coming
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="playground-text6">soon...</span>
            </span>
            <div className="playground-frame8"></div>
          </div>
          <div className="playground-container2"></div>
          <img
            alt="Line11386"
            src="/external/line11386-qy8n.svg"
            className="playground-line1"
          />
          <div className="playground-frame5">
            <a
              href="https://twitter.com/perfintool"
              target="_blank"
              rel="noreferrer noopener"
              className="playground-link2"
            >
              <img
                alt="logoblack11376"
                src="/external/logoblack11376-sryq-200w.png"
                className="playground-logoblack1"
              />
            </a>
            <Link href="/" legacyBehavior>
              <a className="playground-link3">
                <img
                  alt="Frame1378"
                  src="/external/frame1378-lof8.svg"
                  className="playground-frame7"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <style jsx>
      {`
        .playground-container1 {
          width: 100%;
          display: flex;
          min-height: 100vh;
          align-items: center;
          flex-direction: column;
        }
        .playground-desktop1 {
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
        .playground-frame1 {
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
        .playground-frame2 {
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
        .playground-link1 {
          display: contents;
        }
        .playground-frame4 {
          width: 102px;
          height: 33px;
          text-decoration: none;
        }
        .playground-frame6 {
          gap: 22px;
          display: flex;
          overflow: hidden;
          align-items: center;
          justify-content: center;
        }
        .playground-text1 {
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
        .playground-text2 {
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
        .playground-text3 {
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
        .playground-frame3 {
          gap: 15px;
          height: 130px;
          display: flex;
          padding: 10px 47px;
          overflow: hidden;
          align-self: stretch;
          align-items: flex-start;
          padding-left: 54px;
          flex-direction: column;
        }
        .playground-text4 {
          color: rgb(0, 0, 0);
          height: auto;
          font-size: 90px;
          align-self: stretch;
          text-align: left;
          font-family: 'Inter';
          font-weight: 300;
          line-height: 0.9;
          font-stretch: normal;
          letter-spacing: -5px;
        }
        .playground-text6 {
          font-style: italic;
          font-weight: 700;
          letter-spacing: -13px;
        }
        .playground-frame8 {
          gap: -5px;
          display: flex;
          overflow: hidden;
          align-items: flex-end;
        }
        .playground-container2 {
          width: 100%;
          height: 41px;
          display: flex;
          align-items: flex-start;
        }
        .playground-line1 {
          width: 1343px;
          height: 1px;
        }
        .playground-frame5 {
          gap: 10px;
          display: flex;
          padding: 10px 50px;
          overflow: hidden;
          align-self: stretch;
          align-items: center;
          flex-shrink: 0;
          justify-content: space-between;
        }
        .playground-link2 {
          display: contents;
        }
        .playground-logoblack1 {
          width: 28px;
          height: 29px;
          text-decoration: none;
        }
        .playground-link3 {
          display: contents;
        }
        .playground-frame7 {
          width: 102px;
          height: 33px;
          text-decoration: none;
        }
        @media (max-width: 991px) {
          .playground-frame3 {
            height: auto;
          }
          .playground-text4 {
            font-family: Inter;
          }
        }
        @media (max-width: 767px) {
          .playground-frame6 {
            width: 255px;
            height: 24px;
            display: none;
          }
          .playground-text2 {
            color: rgb(0, 0, 0);
            font-size: 15px;
            font-family: Inter;
            font-weight: 400;
            line-height: normal;
            text-decoration: none;
          }
          .playground-text3 {
            color: rgb(0, 0, 0);
            font-size: 15px;
            font-family: Inter;
            font-weight: 400;
            line-height: normal;
            text-decoration: none;
          }
          .playground-text4 {
            font-size: 95px;
          }
          .playground-text6 {
            font-style: italic;
            font-weight: 700;
            letter-spacing: -13px;
          }
        }
        @media (max-width: 479px) {
          .playground-frame6 {
            width: 257px;
            height: 21px;
            margin-right: 0px;
          }
          .playground-text1 {
            color: rgb(0, 0, 0);
            font-size: 15px;
            font-family: Inter;
            font-weight: 400;
            line-height: normal;
            text-decoration: none;
            background-color: rgb(0, 0, 0);
          }
          .playground-text2 {
            color: rgb(0, 0, 0);
            font-size: 10px;
            font-family: Inter;
            font-weight: 400;
            line-height: normal;
            text-decoration: none;
            background-color: rgb(0, 0, 0);
          }
          .playground-text3 {
            color: rgb(0, 0, 0);
            font-size: 15px;
            font-family: Inter;
            font-weight: 400;
            line-height: normal;
            text-decoration: none;
            background-color: rgb(0, 0, 0);
          }
          .playground-text4 {
            font-size: 63px;
            font-family: Inter;
          }
          .playground-container2 {
            height: 18px;
          }
        }
      `}
    </style>
  </>);
}

export default Playground
