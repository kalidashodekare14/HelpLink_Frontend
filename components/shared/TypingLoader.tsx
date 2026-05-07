import { Box } from "@mui/material";

const TypingLoader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "4px",
        backgroundColor: "#e5e7eb",
        px: 1.5,
        py: 1,
        borderRadius: "999px",
        width: "fit-content",
      }}
    >
      {[0, 1, 2].map((item) => (
        <Box
          key={item}
          sx={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "#6b7280",
            animation: "bounce 1.4s infinite ease-in-out",
            animationDelay: `${item * 0.2}s`,
          }}
        />
      ))}

      <style>
        {`
          @keyframes bounce {
            0%, 80%, 100% {
              transform: scale(0);
              opacity: 0.5;
            }
            40% {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}
      </style>
    </Box>
  );
};

export default TypingLoader;
