import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const StyledFooter = styled.footer`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #111;
  color: white;
  border-top: 1px solid #212121;

  .footer {
    &__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__link {
      color: white;
      margin-right: 20px;
      transition: 0.2s;

      &:hover {
        color: #02d463;
        transition: 0.2s;
      }

      svg {
        width: 20px;
        height: 20px;
        filter: drop-shadow(0px 0px 3px black);
      }
    }

    &__copy {
      font-size: 14px;
    }

    &__credit {
      font-size: 12px;
      color: #333;
    }
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <div className="container container--secondary">
        <div className="footer__container container--primary">
          <div className="footer__links">
            <OutboundLink
              href="https://www.instagram.com/sieroniekuggy/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
              title="Instagram"
            >
              <FontAwesomeIcon
                data-sal="fade"
                data-sal-easing="ease"
                icon={["fab", "instagram"]}
                className="about__icon"
              />
            </OutboundLink>
            <OutboundLink
              href="https://www.instagram.com/sieroniekuggyofficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
              title="Facebook"
            >
              <FontAwesomeIcon
                data-sal="fade"
                data-sal-easing="ease"
                icon={["fab", "facebook"]}
                className="about__icon"
              />
            </OutboundLink>
            <OutboundLink
              href="https://github.com/sieroniekuggy"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
              title="GitHub"
            >
              <FontAwesomeIcon
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease"
                icon={["fab", "github"]}
                className="about__icon"
              />
            </OutboundLink>
            <OutboundLink
              href="https://www.twitter.com/in/sieroniekuggy/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
              title="LinkedIn"
            >
              <FontAwesomeIcon
                data-sal="fade"
                data-sal-delay="200"
                data-sal-easing="ease"
                icon={["fab", "twitter"]}
                className="about__icon"
              />
            </OutboundLink>
            <a
              href="https://wa.me/8615653242335"
              className="footer__link"
              title="Email"
            >
              <FontAwesomeIcon
                data-sal="fade"
                data-sal-delay="300"
                data-sal-easing="ease"
                icon="envelope"
              />
            </a>
            <OutboundLink
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
              title="Resume"
            >
              <FontAwesomeIcon
                data-sal="fade"
                data-sal-delay="400"
                data-sal-easing="ease"
                icon="paperclip"
              />
            </OutboundLink>
          </div>
          <div className="footer__desc section__desc">
            <p
              data-sal="fade"
              data-sal-delay="500"
              data-sal-easing="ease"
              className="footer__copy"
            >
              Copyright {new Date().getFullYear()} &copy; Sieroniekuggy
            </p>
            <p
              data-sal="fade"
              data-sal-delay="600"
              data-sal-easing="ease"
              className="footer__credit"
            >
              Created by{" "}
              <a
                href="https://tawk.to/codetrojans"
                target="_blank"
                rel="noopener noreferrer"
                title="Silence Ronald | Full-Stack Developer"
              >
                Silence Ronald Kugotsi
              </a>
            </p>
          </div>
        </div>
      </div>
    </StyledFooter>
  )
}

export default Footer
