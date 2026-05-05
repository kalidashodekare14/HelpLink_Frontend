"use client";
import HomeIcon from "@mui/icons-material/Home";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import PinDropIcon from "@mui/icons-material/PinDrop";
import {
  Box,
  Card,
  Container,
  Pagination,
  Skeleton,
  Typography,
} from "@mui/material";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const MotionCard = motion(Card);
const MotionTypography = motion(Typography);
const MotionBox = motion(Box);
const MotionImage = motion(Image);

const CampaignsComponent = ({
  totalCampaign,
  campaignLoading,
  setPage,
}: any) => {
  const loadingCard: any = 10;

  console.log("campaigns data", totalCampaign);

  return (
    <Container>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
            lg: "1fr 1fr 1fr 1fr",
          },
          gap: "10px",
          my: "20px",
        }}
      >
        {campaignLoading ? (
          <>
            {[...Array(loadingCard)].map((_, index) => (
              <Card key={index} sx={{ border: "1px solid #bbbb" }}>
                <Skeleton
                  variant="rectangular"
                  sx={{
                    width: "100%",
                    height: "200px",
                  }}
                />
                <Box sx={{ mx: "20px", my: "20px" }}>
                  <Skeleton
                    variant="rectangular"
                    sx={{
                      width: "100%",
                      height: "30px",
                      my: "10px",
                    }}
                  />
                  <Skeleton
                    variant="rectangular"
                    sx={{
                      width: "100%",
                      height: "60px",
                      my: "10px",
                    }}
                  />
                  <Box>
                    <Skeleton
                      variant="rectangular"
                      sx={{
                        width: "90%",
                        height: "20px",
                        my: "10px",
                      }}
                    />
                    <Skeleton
                      variant="rectangular"
                      sx={{
                        width: "80%",
                        height: "20px",
                        my: "10px",
                      }}
                    />
                    <Skeleton
                      variant="rectangular"
                      sx={{
                        width: "80%",
                        height: "20px",
                        my: "10px",
                      }}
                    />
                    <Skeleton
                      variant="rectangular"
                      sx={{
                        width: "80%",
                        height: "20px",
                        my: "10px",
                      }}
                    />
                  </Box>
                  <Skeleton
                    variant="rectangular"
                    sx={{
                      width: "100%",
                      height: "50px",
                      my: "10px",
                      borderRadius: "5px",
                    }}
                  />
                </Box>
              </Card>
            ))}
          </>
        ) : (
          totalCampaign?.data?.data &&
          totalCampaign?.data?.data.map((campaign: any) => (
            <MotionCard
              whileHover={{ y: -5 }}
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: "0 8px 25px rgba(0,0,0,0.06)",
                bgcolor: "#fff",
                transition: "0.3s",
              }}
            >
              {/* IMAGE */}
              <Box sx={{ position: "relative" }}>
                <Box sx={{ overflow: "hidden" }}>
                  <MotionImage
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    src={campaign?.image[0]}
                    alt={campaign?.title}
                    width={500}
                    height={300}
                    className="h-52 w-full object-cover"
                  />
                </Box>

                {/* Severity Badge */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 10,
                    right: 10,
                    bgcolor: "rgba(251,133,0,0.9)",
                    color: "#fff",
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 2,
                    fontSize: 13,
                    fontWeight: 500,
                    backdropFilter: "blur(4px)",
                  }}
                >
                  {campaign?.situation?.severity}
                </Box>
              </Box>

              {/* CONTENT */}
              <Box sx={{ p: 2 }}>
                {/* Title */}
                <Typography fontWeight={600} fontSize={17} mb={0.5}>
                  {campaign?.title}
                </Typography>

                {/* Description */}
                <Typography fontSize={14} color="text.secondary" mb={1.5}>
                  {campaign?.description.slice(0, 80)}...
                </Typography>

                {/* Location */}
                <Box sx={{ fontSize: 14, color: "text.secondary", mb: 2 }}>
                  <Typography
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    <LocationPinIcon sx={{ fontSize: 18 }} />
                    {campaign.location.division}
                  </Typography>

                  <Typography
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    <PinDropIcon sx={{ fontSize: 18 }} />
                    {campaign.location.district}, {campaign.location.upazila}
                  </Typography>

                  <Typography
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    <HomeIcon sx={{ fontSize: 18 }} />
                    {campaign.location.address}
                  </Typography>
                </Box>

                {/* Button */}
                <Link href={`/campaigns/${campaign?._id}`}>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full bg-[#fb8500] text-white py-2.5 rounded-xl font-medium"
                  >
                    Donate Now
                  </motion.button>
                </Link>
              </Box>
            </MotionCard>
          ))
        )}
      </Box>
      {!totalCampaign?.data?.data && !campaignLoading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "400px",
          }}
        >
          <Box>
            <Typography sx={{ fontSize: "30px" }}>Data not found.</Typography>
            <img className="w-60" src="/Campaign/no_data.png" alt="" />
          </Box>
        </Box>
      )}
      {totalCampaign?.data?.data.length < 1 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "400px",
          }}
        >
          <Box>
            <Typography sx={{ fontSize: "30px" }}>Data not found.</Typography>
            <img className="w-60" src="/Campaign/no_data.png" alt="" />
          </Box>
        </Box>
      )}
      {/* Pagination */}
      {totalCampaign?.data?.data && totalCampaign?.data?.data.length > 0 && (
        <Box
          sx={{
            my: 5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Pagination
            count={totalCampaign?.data.totalPages}
            onChange={(e, value) => setPage(value)}
            variant="outlined"
            shape="rounded"
            size="large"
            sx={{
              "& .MuiPaginationItem-root": {
                // backgroundColor: '#e0e0e0',
                color: "#333",
                border: "1px solid #fb8500",
                "&:hover": {
                  backgroundColor: "#C2833C",
                  color: "#333",
                },
              },
              "& .Mui-selected": {
                backgroundColor: "#fb8500 !important",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#a37b27 !important",
                },
              },
            }}
          />
        </Box>
      )}
    </Container>
  );
};

export default CampaignsComponent;
