"use client";

import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Paper,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { skipToken } from "@reduxjs/toolkit/query";
import { useParams } from "next/navigation";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import CategoryIcon from "@mui/icons-material/Category";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import { useGetCampaignDetailsQuery } from "@/state/services/publicService/campaignsService";
import { useState } from "react";
import DonateModal from "./DonateModal";

const InfoRow = ({ label, value }: { label: string; value?: string }) => (
  <Box display="flex" alignItems="center" gap={1}>
    <ArrowRightIcon sx={{ fontSize: 16, color: "text.secondary" }} />
    <Typography fontSize={13} fontWeight={500}>
      {label}:
    </Typography>
    <Typography fontSize={13} color="text.secondary">
      {value || "-"}
    </Typography>
  </Box>
);

const CampaignDetails = () => {
  // Modal State
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // id query
  const { id } = useParams();

  // Campaign Details Data
  const { data, isLoading } = useGetCampaignDetailsQuery(
    id ? String(id) : skipToken,
  );
  // divided data
  const details = data?.data;

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      <Box
        display="grid"
        gridTemplateColumns={{ xs: "1fr", lg: "1.2fr 0.8fr" }}
        gap={4}
      >
        {/* ================= LEFT: IMAGE SLIDER ================= */}
        <Paper
          elevation={4}
          sx={{
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          {isLoading ? (
            <Skeleton variant="rectangular" height={420} />
          ) : (
            <Swiper pagination={{ clickable: true }} modules={[Pagination]}>
              {details?.image?.map((img: string, i: number) => (
                <SwiperSlide key={i}>
                  <Box
                    component="img"
                    src={img}
                    alt="campaign"
                    sx={{
                      width: "100%",
                      height: { xs: 260, md: 420 },
                      objectFit: "cover",
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </Paper>

        {/* ================= RIGHT: DETAILS ================= */}
        <Paper
          elevation={2}
          sx={{
            p: 3,
            borderRadius: 4,
            position: { lg: "sticky" },
            top: { lg: 100 },
            height: "fit-content",
          }}
        >
          {isLoading ? (
            <Stack spacing={2}>
              <Skeleton height={40} />
              <Skeleton height={80} />
              <Skeleton height={30} width="50%" />
              <Skeleton height={120} />
              <Skeleton height={45} />
            </Stack>
          ) : (
            <Stack spacing={2.5}>
              {/* Title */}
              <Typography variant="h5" fontWeight={700}>
                {details?.title}
              </Typography>

              {/* Category */}
              <Chip
                icon={<CategoryIcon />}
                label={details?.category}
                sx={{
                  width: "fit-content",
                  bgcolor: "#f1f5f9",
                }}
              />

              <Divider />

              {/* Description */}
              <Typography fontSize={14} color="text.secondary" lineHeight={1.7}>
                {details?.description}
              </Typography>

              {/* Location */}
              {details?.location && (
                <Box>
                  <Box display="flex" alignItems="center" gap={1} mb={1}>
                    <LocationOnIcon color="error" />
                    <Typography fontWeight={600}>Location</Typography>
                  </Box>

                  <Paper
                    variant="outlined"
                    sx={{
                      p: 2,
                      borderRadius: 3,
                      bgcolor: "#fafafa",
                    }}
                  >
                    <Stack spacing={1}>
                      <InfoRow
                        label="Division"
                        value={details.location.division}
                      />
                      <InfoRow
                        label="District"
                        value={details.location.district}
                      />
                      <InfoRow
                        label="Upazila"
                        value={details.location.upazila}
                      />
                      <InfoRow
                        label="Address"
                        value={details.location.address}
                      />
                    </Stack>
                  </Paper>
                </Box>
              )}

              {/* CTA */}
              <Button
                onClick={handleOpen}
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  mt: 2,
                  py: 1.3,
                  fontWeight: 600,
                  borderRadius: 2,
                  bgcolor: "#fb8500",
                  boxShadow: "0 8px 20px rgba(251,133,0,0.3)",
                  "&:hover": {
                    bgcolor: "#e67600",
                  },
                }}
              >
                Donate Now
              </Button>
            </Stack>
          )}
        </Paper>
      </Box>
      <DonateModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
    </Container>
  );
};

export default CampaignDetails;
