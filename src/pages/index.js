import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Head from "next/head";
import ProfileImage from "@/components/ProfileImage/ProfileImage";
import PersonalInfo from "@/components/PersonalInfo/PersonalInfo";
import ContactIcons from "@/components/ContactIcons/ContactIcons";
import SocialMediaIcons from "@/components/SocialMediaIcons/SocialMediaIcons";
import Layout from "@/components/Layout/Layout";
import { motion } from "framer-motion";
import PaymentInfo from "@/components/PaymentInfo/PaymentInfo";
import EducationAndCertifications from "@/components/EducationAndCertification/EducationAndCertification";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import QRCodeComponent from "@/components/QrCodeComponent/QrCodeComponent";
import Footer from "@/components/Footer/Footer";
import CustomNavbar from "@/components/Navbar/Navbar";
import styles from "../styles/variants/variant1.module.scss";
import ImageCarousel from "@/components/Caroussel/Caroussel";
import WorkExperience from "@/components/WorkExperience/WorkExperience";
import Services from "@/components/Services/Services";

export default function Modelo2() {
  

  const carouselImages = [
    {
      full: "/images/users/galeria_columna.jpg",
      alt: "Columna imagen",
      description: "Cirugía de Columna",
      experience: [
        "Especialista en cirugía de columna",
        "Seguridad y confianza en cada procedimiento",
      ],
    },
    {
      full: "/images/users/galeria_hombro.jpg",
      alt: "Hombro imagen",
      description: "Cirugía de Hombro",
      experience: ["Especialista en cirugía de hombro", "Tu salud en buenas manos"],
    },
    {
      full: "/images/users/galeria_mano.jpg",
      alt: "Mano imagen",
      description: "Cirugía de Mano",
      experience: ["Especialista en cirugía de mano", "Garantía de resultados óptimos"],
    },
    {
      full: "/images/users/galeria_pie.jpg",
      alt: "Pie imagen",
      description: "Cirugía de Pie",
      experience: ["Especialista en cirugía de pie", "Resultados satisfactorios garantizados"],
    },
    {
      full: "/images/users/galeria_rodilla.jpg",
      alt: "Rodilla imagen",
      description: "Cirugía de Rodilla",
      experience: ["Especialista en cirugía de rodilla", "Recuperación rápida y efectiva"],
    },
  ];

  const service = [
    {
      service: "Consulta Médica",
      description: "Consulta médica especializada en traumatología y ortopedia.",
      imageUrl: "/images/users/traumatologo_iess.jpg",
    },
    {
      service: "Hospitalización",
      description: "Hospitalización en la Clínica MET para una atención integral.",
      imageUrl: "/images/users/traumatologo_met.jpg",
    },
    {
      service: "Cirugía",
      description: "Cirugía ortopédica y traumatológica de alta calidad.",
      imageUrl: "/images/users/hero.jpg",
    },
  ];

  return (
    <>
      <Head>
        <title>Eva Doe</title>
        <meta name="description" content="Eva Doe Digital Card" />
        <link rel="icon" href="/icons/logo.ico" />

        {/* Open Graph */}
        <meta property="og:url" content="https://drnelsontinocov.businessdigicards.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Business digital card Dr. Nelson Tinoco V." />
        <meta property="og:description" content="Tarjeta de presentación digital" />
        <meta
          property="og:image"
          content="https://drnelsontinocov.businessdigicards.com/images/shared_image.png"
        />
      </Head>

      <Layout>
        <CustomNavbar
          logoSrc="/images/logo.png"
          logoClassName={styles.navbarLogo}
          navClassName={styles.nav}
          navLinkClassName={styles.navLink}
        />
        <Container fluid className={styles.mainContainer}>
          <Row className={styles.mainRow}>
            <Col xs={12} className={styles.infoCol}>

          

              <section className={styles.imageSection}>
                <Image
                  src="/images/users/clinica_met.jpg"
                  alt="Profesional de la salud"
                  width={100}
                  height={100}
                  layout="responsive"
                  className={styles.backgroundImage}
                />
              </section>
              

              <section>
                <PersonalInfo
                  name="Clinica MET"
                  title="Clínica de Especialidades Médicas y Traumatología"
                  description="Centro Médicos Especializado en Ortopedia y Traumatología "
                  nameClassName={styles.personalInfoName}
                  titleClassName={styles.personalInfoTitle}
                  descriptionClassName={styles.personalInfoDescription}
                />
              </section>
              <section className={styles.socialMediaSection}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <SocialMediaIcons
                    facebook="https://www.facebook.com/nelson.tinocovaca?locale=es_LA"
                    facebookIcon="/icons/green_gb/facebook_gb.png"
                    twitter="https://twitter.com/NelsinhoTV"
                    twitterIcon="/icons/green_gb/xtwitter_gb.png"
                    instagram="https://www.instagram.com/nelsontinoco/"
                    instagramIcon="/icons/green_gb/instagram_gb.png"
                    // linkedin="https://www.linkedin.com/userlinkedin"
                    // linkedinIcon="/icons/green_gb/linkedin_gb.png"
                    //  youtube="https://www.youtube.com/useryoutube"
                    //  youtubeIcon="/icons/black/youtube_b.png"
                    //pinterest="https://www.pinterest.com/userpinterest"
                    //pinterestIcon="/icons/black/pinterest_b.png"
                    //   snapchat="https://www.snapchat.com/usersnapchat"
                    //   snapchatIcon="/icons/black/snapchat_b.png"
                    //   reddit="https://www.reddit.com/userreddit"
                    //   redditIcon="/icons/black/reddit_b.png"
                    //   tumblr="https://www.tumblr.com/usertumblr"
                    //   tumblrIcon="/icons/black/tumblr_b.png"
                    //  tiktok="https://www.tiktok.com/usertiktok"
                    //  tiktokIcon="/icons/green_gb/tiktok_gb.png"
                  />

                  {/* Columna con información de contacto */}

                  <section>
                    <ContactIcons
                      phone="+593984377272"
                      phoneIcon="/icons/green_gb/call_gb.png"
                      email="nelsinho-1@hotmail.com"
                      emailIcon="/icons/green_gb/email_gb.png"
                      whatsapp="+593984377272"
                      whatsappIcon="/icons/green_gb/whatsapp_gb.png"
                      telegram="+593984377272"
                      telegramIcon="/icons/green_gb/telegram_gb.png"
                      location={"El Vagon del Arte, Quito, Ecuador"}
                      locationIcon="/icons/green_gb/location_gb.png"
                    />
                  </section>
                </motion.div>
              </section>
              
            </Col>
          </Row>

          {/* Componente de servicios */}

          <Row>
            <Col className={styles.educationSection}>
              <section id="education">
                <div className={styles.educationText}>
                  <h2 className={styles.educationTitle}>Nuestros Servicios</h2>
                  <span className={styles.educationInstructions}>
                    Haz clic en el item para ver la información
                  </span>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <div className={styles.educationInfo}>
                    <Services services={service} />
                  </div>
                </motion.div>
              </section>
            </Col>
          </Row>


          {/* Componente Carruseles de imágenes */}

          <Row>
            <Col className={styles.imageCarousel}>
              <div className={styles.imageCarouselContainer}>
                <h2 className={styles.imageCarouselTitle}>Especialidades</h2>
                <span className={styles.imageCarouselInstructions}>Experiencia y Calidad</span>
                <ImageCarousel images={carouselImages} />
              </div>
            </Col>
          </Row>

          {/* Componente de video player */}

          <Row>
            <Col className={styles.videoPlayer}>
              <VideoPlayer videoUrl="/video/users/video_traumato.mp4" />
            </Col>
          </Row>

          {/* Componente de información de pago */}

          <Row>
            <Col className={styles.paymentSection}>
              <section id="payment" className={styles.paymentInfo}>
                <div className={styles.paymentText}>
                  <h2 className={styles.paymentTitle}>Información de Pago</h2>
                  <span className={styles.paymentInstructions}>
                    Haz clic en el logo para acceder a los datos de la cuenta
                  </span>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <div className={styles.bankInfo}>
                    <PaymentInfo
                      bankName="Banco Pichincha"
                      accountNumber="2207185861"
                      accountType="Cuenta de ahorros"
                      identification="1723644009"
                      email="nelsinho-1@hotmail.com"
                      bankLogo="/images/banksLogos/logoB_pichincha.png"
                    />
                    <PaymentInfo
                      bankName="Banco Produbanco"
                      accountNumber="12095144167"
                      accountType="Cuenta de ahorros"
                      identification="1723644009"
                      email="nelsinho-1@hotmail.com"
                      bankLogo="/images/banksLogos/logoB_produbanco.png"
                    />
                  </div>
                </motion.div>
              </section>
            </Col>
          </Row>

          {/* Componente de QR Code */}
          <Row>
            <Col className={styles.qrCode}>
              <section>
                <QRCodeComponent
                  qrCodeImageUrl="images/qrcode-nelsontinocov.png"
                  altText="QR Code"
                />
              </section>
              <p className={styles.scanText}>Escanea tu código</p>
            </Col>
          </Row>

          {/* Componente de footer */}
          <Row>
            <Col className={styles.footerCol}>
              <Footer
                footerClassName={styles.footerClassName}
                containerFooterClassName={styles.containerFooterClassName}
                textFooterClassName={styles.textFooterClassName}
                linkFooterClassName={styles.linkFooterClassName}
              />
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}
