"use client";

import {
  Box,
  Button,
  Container,
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

const InfoRow = ({ label, value }: { label: string; value?: string }) => (
  <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
    <ArrowRightIcon sx={{ fontSize: 18, color: "text.secondary" }} />
    <Typography fontSize={14} fontWeight={500}>
      {label}:
    </Typography>
    <Typography fontSize={14} color="text.secondary">
      {value || "-"}
    </Typography>
  </Box>
);

const CampaignDetails = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetCampaignDetailsQuery(
    id ? String(id) : skipToken,
  );

  const details = data?.data;

  return (
    <Container sx={{ py: 6 }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
          gap: 4,
        }}
      >
        {/* ================= LEFT: IMAGE ================= */}
        <Paper
          elevation={3}
          sx={{
            borderRadius: 3,
            overflow: "hidden",
            bgcolor: "white",
          }}
        >
          {isLoading ? (
            <Skeleton variant="rectangular" height={420} animation="wave" />
          ) : (
            <Swiper pagination modules={[Pagination]}>
              {details?.image?.map((img: string, i: number) => (
                <SwiperSlide key={i}>
                  <Box
                    component="img"
                    src={img}
                    alt="campaign"
                    sx={{
                      width: "100%",
                      height: { xs: 260, lg: 420 },
                      objectFit: "cover",
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </Paper>

        {/* ================= RIGHT: DETAILS ================= */}
        <Stack spacing={2.5}>
          {isLoading ? (
            <>
              <Skeleton height={40} />
              <Skeleton height={80} />
              <Skeleton height={25} width="60%" />
              <Skeleton height={120} />
              <Skeleton height={45} width={160} />
            </>
          ) : (
            <>
              {/* Title */}
              <Typography variant="h4" fontWeight={700}>
                {details?.title}
              </Typography>

              {/* Description */}
              <Typography color="text.secondary" fontSize={15}>
                {details?.description}
              </Typography>

              {/* Category */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <CategoryIcon fontSize="small" />
                <Typography fontSize={15}>{details?.category}</Typography>
              </Box>

              {/* Location */}
              {details?.location && (
                <Paper sx={{ p: 2, borderRadius: 2 }} variant="outlined">
                  <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
                    <LocationOnIcon />
                    <Typography fontWeight={600}>Location</Typography>
                  </Box>

                  <Stack spacing={1}>
                    <InfoRow
                      label="Division"
                      value={details.location.division}
                    />
                    <InfoRow
                      label="District"
                      value={details.location.district}
                    />
                    <InfoRow label="Upazila" value={details.location.upazila} />
                    <InfoRow label="Address" value={details.location.address} />
                  </Stack>
                </Paper>
              )}

              {/* Action */}
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#fb8500",
                  py: 1.2,
                  fontWeight: 600,
                  "&:hover": { bgcolor: "#e67600" },
                }}
              >
                Donate Now
              </Button>
            </>
          )}
        </Stack>
      </Box>
    </Container>
  );
};

export default CampaignDetails;
