import { profile } from "../../data/profile";
import ExternalLink from "../ui/ExternalLink";
import React, { useEffect, useState } from "react";
import Photo from "../../assets/photo.png";
import { About, Skills, Experience, Education, Langs } from "../index.tsx";
import "./styles.css";
import "../styles.css";
import "../print.css";
import { useTranslation } from "react-i18next";
import { Card, Row, Col, Typography } from "antd";

const { Title } = Typography;

const Resume: React.FC = () => {
  const { t } = useTranslation();
  const [showBackToTop, setShowBackToTop] = useState(false);
  useEffect(() => {
    const updateScroll = () => setShowBackToTop(window.scrollY > 600);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <main className="mainContainer" id="main-content">
      <div className="contentContainer">
        <Card className="headerCvComponent" id="hero">
          <Row gutter={[28, 24]} align="middle">
            <Col>
              <img
                src={Photo}
                alt={t("name")}
                width={120}
                height={120}
                className="cvLogo"
              />
            </Col>
            <Col flex="1" className="heroCopy">
              <p className="heroEyebrow">{"<HelloWorld />"}</p>
              <Title level={1} className="headerTextElement heroName">
                {t("name")}
              </Title>
              <p className="heroRole">{t("frontend-dev")}</p>
              <Typography.Paragraph className="heroDescription">
                {t("introduce")}
              </Typography.Paragraph>
              <Typography.Paragraph className="heroLocation">
                {t("location")}
              </Typography.Paragraph>
              <div className="heroActions">
                <ExternalLink
                  className="actionButton primaryAction"
                  href={`mailto:${profile.email}`}
                >
                  {t("contactAction")} <span aria-hidden="true">↗</span>
                </ExternalLink>
                <ExternalLink className="actionButton" href={profile.github}>
                  GitHub <span aria-hidden="true">↗</span>
                </ExternalLink>
                <button
                  className="actionButton"
                  type="button"
                  onClick={() => window.print()}
                >
                  {t("printAction")}
                </button>
              </div>
            </Col>
          </Row>
        </Card>

        <Experience />
        <Skills />
        <Education />
        <Langs />
        <About />
      </div>
      {showBackToTop && (
        <a
          href="#hero"
          className="backToTop"
          aria-label={t("backToTop")}
          title={t("backToTop")}
        >
          <span aria-hidden="true">↑</span>
        </a>
      )}
    </main>
  );
};

export default Resume;
