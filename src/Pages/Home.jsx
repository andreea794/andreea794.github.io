import {
  Email,
  FormatQuote,
  GitHub,
  KeyboardArrowDown,
  LinkedIn,
  PhoneIphone as MobileIcon,
  Psychology as ResearchIcon,
  Palette as StyleIcon,
  Language as WebIcon,
  DesignServices as WireframeIcon,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Grid2 as Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Button from "../components/Button";
import { brand, neutral, text } from "../theme/colors";

// Import images
import argonautCover from "../assets/images/covers/Argonaut.webp";
import gardCover from "../assets/images/covers/Gard.webp";
import greenPulseCover from "../assets/images/covers/GreenPulse.webp";
import medpipeCover from "../assets/images/covers/Medpipe.webp";
import nextOnCover from "../assets/images/covers/NextOn.webp";
import picassoCover from "../assets/images/covers/Picasso.webp";
import spotifyCover from "../assets/images/covers/SpotifyParty.webp";
import teachTokCover from "../assets/images/covers/TeachTok.webp";
import timeRCover from "../assets/images/covers/TimeR.webp";
import heroImage from "../assets/images/heroSection/heroSectionPicture.svg";
import imagineImg from "../assets/images/heroSection/Imagine.svg";
import innovateImg from "../assets/images/heroSection/Innovate.svg";
import interfaceImg from "../assets/images/heroSection/Interface.svg";

// Hero Section
function HeroSection() {
  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        background: neutral.background,
        pt: { xs: 12, md: 0 },
        pb: { xs: 8, md: 0 },
        overflow: "hidden",
      }}
    >
      {/* Blurred green glow behind text */}
      <Box
        sx={{
          position: "absolute",
          top: "30%",
          left: "10%",
          width: { xs: 300, md: 500 },
          height: { xs: 300, md: 500 },
          background: brand.glow,
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="eyebrow"
              sx={{
                color: text.muted,
                display: "block",
                mb: 2,
              }}
            >
              <span style={{ color: brand.primary }}>ANDREEA BACANU</span>{" "}
              &nbsp;•&nbsp; RESEARCH-DRIVEN DESIGNER
            </Typography>

            {/* Stacked SVGs: Imagine, Innovate, Interface */}
            <Box
              sx={{
                position: "relative",
                height: { xs: 180, md: 220 },
                mb: 4,
                "@keyframes fadeInUp1": {
                  "0%": {
                    opacity: 0,
                    transform: "translateY(30px)",
                  },
                  "100%": {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                },
                "@keyframes fadeInUp2": {
                  "0%": {
                    opacity: 0,
                    transform: "translateY(30px)",
                  },
                  "100%": {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                },
                "@keyframes fadeInUp3": {
                  "0%": {
                    opacity: 0,
                    transform: "translateY(30px)",
                  },
                  "100%": {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                },
              }}
            >
              <Box
                component="img"
                src={imagineImg}
                alt="Imagine"
                sx={{
                  position: "absolute",
                  width: { xs: "85%", md: "90%" },
                  maxWidth: 500,
                  height: "auto",
                  top: 0,
                  left: 0,
                  animation: "fadeInUp1 0.8s ease-out 0s both",
                  zIndex: 1,
                }}
              />
              <Box
                component="img"
                src={innovateImg}
                alt="Innovate"
                sx={{
                  position: "absolute",
                  width: { xs: "85%", md: "90%" },
                  maxWidth: 500,
                  height: "auto",
                  top: { xs: 45, md: 65 },
                  left: 40,
                  animation: "fadeInUp2 0.8s ease-out 0.2s both",
                  zIndex: 3,
                }}
              />
              <Box
                component="img"
                src={interfaceImg}
                alt="Interface"
                sx={{
                  position: "absolute",
                  width: { xs: "85%", md: "90%" },
                  maxWidth: 500,
                  height: "auto",
                  top: { xs: 90, md: 110 },
                  left: 20,
                  animation: "fadeInUp3 0.8s ease-out 0.4s both",
                  zIndex: 2,
                }}
              />
            </Box>

            <Typography
              variant="lead"
              sx={{
                color: text.secondary,
                mb: 4,
                maxWidth: 500,
              }}
            >
              I create exceptional user experiences dictated by my commitment to{" "}
              <Box
                component="span"
                sx={{
                  fontStyle: "italic",
                  color: brand.primary,
                }}
              >
                people
              </Box>{" "}
              and their needs. Both mobile and web, and with a touch of user
              research, I can help your org reach their full potential.
            </Typography>

            <Box sx={{ mt: 3 }}>
              <Button variant="primary" href="#case-studies">
                Check out my work
              </Button>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                height: { xs: 350, md: 500 },
              }}
            >
              {/* Hero picture */}
              <Box
                component="img"
                src={heroImage}
                alt="Andreea Bacanu"
                sx={{
                  width: { xs: "90%", md: "100%" },
                  maxWidth: 500,
                  height: "auto",
                  transform: "scaleX(-1)",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      <IconButton
        href="#services"
        sx={{
          position: "absolute",
          bottom: 30,
          left: "50%",
          transform: "translateX(-50%)",
          color: text.disabled,
          animation: "bounce 2s infinite",
          "@keyframes bounce": {
            "0%, 100%": { transform: "translateX(-50%) translateY(0)" },
            "50%": { transform: "translateX(-50%) translateY(-8px)" },
          },
        }}
      >
        <KeyboardArrowDown />
      </IconButton>
    </Box>
  );
}

// Services Section
const services = [
  {
    icon: <WebIcon />,
    title: "Website Design",
    description:
      "Crafting digital experiences that seamlessly blend aesthetics with functionality to elevate your online presence.",
  },
  {
    icon: <MobileIcon />,
    title: "Mobile Design",
    description:
      "Designing intuitive and visually captivating mobile interfaces that engage users and enhance their interaction on the go.",
  },
  {
    icon: <ResearchIcon />,
    title: "UX Research",
    description:
      "Delving deep into user behaviors and preferences to inform design decisions, ensuring a user-centric and data-driven approach.",
  },
  {
    icon: <WireframeIcon />,
    title: "Wireframing & Prototyping",
    description:
      "Translating ideas into tangible and interactive prototypes, refining concepts and ensuring a smooth user journey from the outset.",
  },
  {
    icon: <StyleIcon />,
    title: "Style Guides & Design Systems",
    description:
      "Establishing design frameworks that maintain cross-platform consistency, fostering a unified and polished brand identity.",
  },
];

const skills = [
  "Hi-fi Prototyping",
  "Personas",
  "User Flows",
  "IA",
  "Design Workshops",
  "User Interviews",
  "User Testing",
];

function ServicesSection() {
  return (
    <Box
      id="services"
      sx={{
        py: { xs: 10, md: 12 },
        background: neutral.background,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="eyebrow"
          sx={{
            color: text.muted,
            mb: 2,
          }}
        >
          Services
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: text.primary,
            mb: 6,
          }}
        >
          Check out all the ways in which I can help you grow
        </Typography>

        <Grid container spacing={2.5}>
          {services.map((service, index) => (
            <Grid size={{ xs: 12, sm: 6, md: index < 3 ? 4 : 6 }} key={index}>
              <Card
                sx={{
                  height: "100%",
                  background: neutral.surfaceSubtle,
                  border: `1px solid ${neutral.border}`,
                  borderRadius: "16px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: neutral.surfaceHover,
                    borderColor: brand.primaryBorder,
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <CardContent sx={{ p: 3.5 }}>
                  <Box
                    sx={{
                      color: brand.primary,
                      mb: 2.5,
                      "& svg": { fontSize: 28 },
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: text.primary,
                      mb: 1.5,
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: text.tertiary,
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Stack direction="row" flexWrap="wrap" gap={1.5} sx={{ mt: 5 }}>
          {skills.map((skill, index) => (
            <Chip
              key={index}
              label={skill}
              sx={{
                background: brand.primaryLight,
                color: brand.primary,
                border: "none",
                fontSize: "0.8rem",
                fontWeight: 500,
                py: 2,
                px: 0.5,
                borderRadius: "100px",
              }}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

// Case Studies Section
const caseStudies = [
  { title: "TimeR", image: timeRCover, link: "/timesheet" },
  { title: "TeachTok", image: teachTokCover, link: "/teachtok" },
  { title: "GreenPulse", image: greenPulseCover, link: "/greenpulse" },
  { title: "NextOn", image: nextOnCover, link: "/nexton" },
  { title: "Argonaut", image: argonautCover, link: "/argonaut" },
  { title: "Gard", image: gardCover, link: "/gard" },
  { title: "Spotify Party", image: spotifyCover, link: "/spotify" },
  { title: "Medpipe", image: medpipeCover, link: "/medpipe" },
  { title: "Picasso", image: picassoCover, link: "/picasso" },
];

function CaseStudiesSection() {
  return (
    <Box
      id="case-studies"
      sx={{
        py: { xs: 10, md: 12 },
        background: neutral.background,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="eyebrow"
          sx={{
            color: text.muted,
            mb: 2,
          }}
        >
          Case studies
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: text.primary,
            mb: 6,
          }}
        >
          Recent UX escapades — where pixels tell the story
        </Typography>

        <Grid container spacing={2.5}>
          {caseStudies.map((study, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card
                component="a"
                href={study.link}
                sx={{
                  display: "block",
                  height: 240,
                  borderRadius: "16px",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                  border: `1px solid ${neutral.border}`,
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: `0 20px 40px ${neutral.shadow}`,
                    "& img": {
                      transform: "scale(1.03)",
                    },
                  },
                }}
              >
                <CardMedia
                  component="img"
                  src={study.image}
                  alt={study.title}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                  }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

// About Section
function AboutSection() {
  return (
    <Box
      id="about-me"
      sx={{
        py: { xs: 10, md: 12 },
        background: neutral.background,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="flex-start">
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ position: "relative" }}>
              <Box
                sx={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  background: `linear-gradient(135deg, ${brand.primary} 0%, ${brand.primaryDark} 100%)`,
                  aspectRatio: "4/5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  component="img"
                  src={heroImage}
                  alt="Andreea Bacanu"
                  sx={{
                    width: "85%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </Box>

              {/* Name card overlay */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: -16,
                  left: 16,
                  right: 16,
                  background: neutral.surfaceDark,
                  backdropFilter: "blur(20px)",
                  borderRadius: "14px",
                  p: 2.5,
                  border: `1px solid ${neutral.border}`,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: text.primary,
                    mb: 0.25,
                  }}
                >
                  Andreea Bacanu
                </Typography>
                <Typography
                  variant="bodySmall"
                  sx={{
                    color: brand.primary,
                    fontWeight: 500,
                  }}
                >
                  UX/UI Designer
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              variant="eyebrow"
              sx={{
                color: text.muted,
                mb: 2,
              }}
            >
              About me
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: text.secondary,
                lineHeight: 1.8,
                mb: 2.5,
              }}
            >
              I am a Computer Scientist turned UX Designer with a knack for
              understanding things at a deeper level—be it people or
              technologies. With a MSc in HCI and a BA in Computer Science, I
              blend my hard-earned technical skills with my curiosity for people
              and how they use technology every day.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: text.secondary,
                lineHeight: 1.8,
                mb: 2.5,
              }}
            >
              I am all about a well-defined design process, initiated with a
              strong discovery phase, to gain a deep understanding of the
              problem space via users' direct and indirect lived experiences.
              Further on, I am a huge fan of user personas. I see them as the
              building blocks to everything that us, designers, hope to achieve
              for our users. I am a highly empathic individual and love to
              relate my designs to a well-defined user typology.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: text.secondary,
                lineHeight: 1.8,
                mb: 4,
              }}
            >
              Personally, the words "positive" and "dynamic" describe me best.
              I've got a lifetime worth of stories I'd love to share over a cup
              of virtual coffee or tea!
            </Typography>

            <Button variant="secondary" href="#contact">
              Connect with me
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// Testimonials Section
const testimonials = [
  {
    quote:
      "Andreea was a pleasure to work with during her time at Cloudflare supporting User Research efforts on the Product Design team. She's details oriented, thorough and super proactive. I was continually impressed to see her drive to solve problems, structure research findings and create and deliver insightful presentations for stakeholders.",
    name: "Peter Thomas",
    role: "Senior Product Design Manager",
  },
  {
    quote:
      "…a key trait that comes to mind is her attention to detail. She understands how to prioritize & focus on getting correct what matters most. This has resulted in increasing the work quality of the whole team around her. Andreea is a great communicator, not only from a research perspective but also in collaborating and working across teams.",
    name: "Damitha Gunawardena",
    role: "Product Manager",
  },
  {
    quote:
      "…an extraordinary professional who blends exceptional organizational skills, efficient time management, and a can-do attitude. What stands out most is her positivity and determination to approach challenges, creating a collaborative and motivating work environment.",
    name: "Timea Udvarhelyi",
    role: "Experience Designer",
  },
  {
    quote:
      "…it's clear that she brings a unique blend of creativity, intelligence, and hard work to everything she does. Not only is Andreea an exceptional team player, but her innovative approach and dedication to excellence have consistently led to successful outcomes.",
    name: "Katerina Batziakoudi",
    role: "UX Researcher & Research Engineer",
  },
];

function TestimonialsSection() {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 12 },
        background: neutral.background,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2.5}>
          {testimonials.map((testimonial, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Card
                sx={{
                  height: "100%",
                  background: neutral.surfaceSubtle,
                  border: `1px solid ${neutral.border}`,
                  borderRadius: "16px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: brand.primaryBorderLight,
                  },
                }}
              >
                <CardContent sx={{ p: 3.5 }}>
                  <FormatQuote
                    sx={{
                      fontSize: 32,
                      color: brand.primaryFaded,
                      mb: 2,
                      transform: "rotate(180deg)",
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      color: text.secondary,
                      lineHeight: 1.8,
                      mb: 3,
                      fontStyle: "italic",
                    }}
                  >
                    "{testimonial.quote}"
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Avatar
                      sx={{
                        width: 44,
                        height: 44,
                        background: `linear-gradient(135deg, ${brand.primary} 0%, ${brand.primaryDark} 100%)`,
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        color: neutral.background,
                      }}
                    >
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </Avatar>
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{
                          color: text.primary,
                          fontWeight: 600,
                        }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: text.muted,
                        }}
                      >
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

// Contact Section
function ContactSection() {
  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 10, md: 12 },
        background: neutral.background,
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography
            variant="h2"
            sx={{
              color: text.primary,
              fontWeight: 500,
              fontSize: { xs: "1.8rem", md: "2.4rem" },
              letterSpacing: "-0.02em",
              mb: 2,
            }}
          >
            Let's chat!
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: text.tertiary,
            }}
          >
            Looking for a collaboration or just want to say a quick hello? Don't
            hesitate to reach out!
          </Typography>
        </Box>

        <Stack
          direction="row"
          justifyContent="center"
          spacing={1.5}
          sx={{ mb: 5 }}
        >
          <IconButton
            href="https://www.linkedin.com/in/aebacanu"
            target="_blank"
            sx={{
              color: text.tertiary,
              width: 46,
              height: 46,
              border: `1px solid ${neutral.borderLight}`,
              background: neutral.surfaceSubtle,
              transition: "all 0.2s ease",
              "&:hover": {
                color: brand.primary,
                borderColor: brand.primary,
                background: brand.primaryLight,
              },
            }}
          >
            <LinkedIn sx={{ fontSize: 20 }} />
          </IconButton>
          <IconButton
            href="mailto:andreeaelena794@gmail.com"
            sx={{
              color: text.tertiary,
              width: 46,
              height: 46,
              border: `1px solid ${neutral.borderLight}`,
              background: neutral.surfaceSubtle,
              transition: "all 0.2s ease",
              "&:hover": {
                color: brand.primary,
                borderColor: brand.primary,
                background: brand.primaryLight,
              },
            }}
          >
            <Email sx={{ fontSize: 20 }} />
          </IconButton>
          <IconButton
            href="https://www.github.com/andreea794"
            target="_blank"
            sx={{
              color: text.tertiary,
              width: 46,
              height: 46,
              border: `1px solid ${neutral.borderLight}`,
              background: neutral.surfaceSubtle,
              transition: "all 0.2s ease",
              "&:hover": {
                color: brand.primary,
                borderColor: brand.primary,
                background: brand.primaryLight,
              },
            }}
          >
            <GitHub sx={{ fontSize: 20 }} />
          </IconButton>
        </Stack>

        <Card
          sx={{
            background: neutral.surfaceSubtle,
            border: `1px solid ${neutral.border}`,
            borderRadius: "20px",
          }}
        >
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Grid container spacing={2.5}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      color: text.primary,
                      borderRadius: "12px",
                      "& fieldset": {
                        borderColor: neutral.borderLight,
                      },
                      "&:hover fieldset": {
                        borderColor: brand.primaryBorderMedium,
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: brand.primary,
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: text.disabled,
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: brand.primary,
                    },
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      color: text.primary,
                      borderRadius: "12px",
                      "& fieldset": {
                        borderColor: neutral.borderLight,
                      },
                      "&:hover fieldset": {
                        borderColor: brand.primaryBorderMedium,
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: brand.primary,
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: text.disabled,
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: brand.primary,
                    },
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  label="Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      color: text.primary,
                      borderRadius: "12px",
                      "& fieldset": {
                        borderColor: neutral.borderLight,
                      },
                      "&:hover fieldset": {
                        borderColor: brand.primaryBorderMedium,
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: brand.primary,
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: text.disabled,
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: brand.primary,
                    },
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Button fullWidth variant="primary">
                  Send message
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

// Main Home Component
export default function Home() {
  return (
    <Box>
      <HeroSection />
      <ServicesSection />
      <CaseStudiesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </Box>
  );
}
