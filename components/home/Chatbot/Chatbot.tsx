"use client";

import { useState } from "react";

import {
  Avatar,
  Box,
  Divider,
  Fab,
  IconButton,
  Paper,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";

import TypingLoader from "@/components/shared/TypingLoader";
import { useChatbotAIMutation } from "@/state/services/publicService/campaignsService";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import SmartToyIcon from "@mui/icons-material/SmartToy";

interface ChatItem {
  send: string;
  message: string;
}

const Chatbot = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [messsage, setMessage] = useState<string>("");
  const [chatData, setChatData] = useState<ChatItem[]>([
    {
      send: "ai",
      message: "Hello sir, How can i help you",
    },
  ]);

  //
  const [chatbotAI, { isLoading: chatLoading, error: chatError }] =
    useChatbotAIMutation();

  // Handle Chat Function
  const handleChat = async () => {
    // Message
    const userMessage = {
      send: "user",
      message: messsage,
    };
    setChatData((prev) => [...prev, userMessage]);
    setMessage("");
    try {
      const response = await chatbotAI(userMessage);
      const aiMessage = {
        send: response.data?.data?.send,
        message: response.data?.data?.replay,
      };
      setChatData((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.log(error);
      setMessage("");
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!open && (
        <Tooltip
          title="Chatbot"
          describeChild
          placement="left"
          slotProps={{
            tooltip: {
              sx: {
                fontSize: "0.8rem",
                bgcolor: "#fef3e6",
                color: "black",
                p: 1,
                border: "1px solid #FB8500",
              },
            },
          }}
        >
          <Fab
            onClick={() => setOpen(true)}
            sx={{
              position: "fixed",
              right: 25,
              bottom: "50%",
              transform: "translateY(50%)",
              bgcolor: "#FB8500",
              color: "white",
              zIndex: 9999,
              width: 65,
              height: 65,
              boxShadow: "0px 10px 30px rgba(251,133,0,0.4)",
              "&:hover": {
                bgcolor: "#e97700",
              },
            }}
          >
            <SmartToyIcon sx={{ fontSize: 40 }} />
          </Fab>
        </Tooltip>
      )}

      {/* Chat Box */}
      {open && (
        <Paper
          elevation={0}
          sx={{
            position: "fixed",
            right: 25,
            bottom: {
              xs: 0,
              sm: 50,
            },
            width: { xs: "90%", sm: 380 },
            height: "500px",
            borderRadius: "24px",
            overflow: "hidden",
            zIndex: 9999,
            border: "1px solid #ececec",
            boxShadow: "0px 20px 60px rgba(0,0,0,0.15)",
            display: "flex",
            flexDirection: "column",
            background: "linear-gradient(to bottom, #ffffff 0%, #fffaf3 100%)",
          }}
        >
          {/* Header */}
          <Box
            sx={{
              px: 2,
              py: 2,
              background: "linear-gradient(135deg,#FB8500,#FFB703)",
              color: "white",
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Avatar
                  sx={{
                    bgcolor: "white",
                    color: "#FB8500",
                    width: 45,
                    height: 45,
                  }}
                >
                  <SmartToyIcon />
                </Avatar>

                <Box>
                  <Typography fontWeight={700} fontSize={17}>
                    AI Assistant
                  </Typography>

                  <Typography fontSize={12}>Online • Ready to help</Typography>
                </Box>
              </Stack>

              <IconButton onClick={() => setOpen(false)}>
                <CloseIcon sx={{ color: "white" }} />
              </IconButton>
            </Stack>
          </Box>

          {/* Messages */}
          <Box
            sx={{
              flex: 1,
              overflowY: "auto",
              px: 2,
              py: 2,
              bgcolor: "#fafafa",
            }}
          >
            {chatData.map((data) => (
              <Stack spacing={2}>
                {/* Ai Message */}
                {data.send === "ai" && (
                  <Stack direction="row" spacing={1}>
                    <Avatar
                      sx={{
                        bgcolor: "#FB8500",
                        width: 35,
                        height: 35,
                      }}
                    >
                      <SmartToyIcon sx={{ fontSize: 18 }} />
                    </Avatar>

                    <Box
                      sx={{
                        maxWidth: "80%",
                        bgcolor: "white",
                        p: 1.5,
                        borderRadius: "16px 16px 16px 4px",
                        boxShadow: "0px 2px 10px rgba(0,0,0,0.05)",
                      }}
                    >
                      <Typography fontSize={14}>{data.message}</Typography>
                    </Box>
                  </Stack>
                )}
                {/* User Message */}
                {data.send === "user" && (
                  <>
                    {/* User Message */}
                    <Stack
                      direction="row"
                      spacing={2}
                      justifyContent="flex-end"
                    >
                      <Box
                        sx={{
                          maxWidth: "80%",
                          bgcolor: "#FB8500",
                          color: "white",
                          p: 1.5,
                          borderRadius: "16px 16px 4px 16px",
                        }}
                      >
                        <Typography fontSize={14}>{data.message}</Typography>
                      </Box>
                    </Stack>
                  </>
                )}
                {/* Loading... */}
              </Stack>
            ))}
            {chatLoading && (
              <Stack direction="row" spacing={1}>
                <Avatar
                  sx={{
                    bgcolor: "#FB8500",
                    width: 35,
                    height: 35,
                  }}
                >
                  <SmartToyIcon sx={{ fontSize: 18 }} />
                </Avatar>

                <Box
                  sx={{
                    maxWidth: "80%",
                    bgcolor: "white",
                    p: 1.5,
                    borderRadius: "16px 16px 16px 4px",
                    boxShadow: "0px 2px 10px rgba(0,0,0,0.05)",
                  }}
                >
                  <TypingLoader />
                </Box>
              </Stack>
            )}
          </Box>
          <Divider />

          {/* Input */}
          <Box
            sx={{
              p: 2,
              bgcolor: "white",
            }}
          >
            <Stack direction="row" spacing={1}>
              <TextField
                onChange={(event) => setMessage(event.target.value)}
                value={messsage}
                fullWidth
                size="small"
                placeholder="Ask something..."
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "14px",
                    bgcolor: "#f7f7f7",
                  },
                }}
              />

              <IconButton
                onClick={handleChat}
                sx={{
                  bgcolor: "#FB8500",
                  color: "white",
                  width: 45,
                  height: 45,
                  "&:hover": {
                    bgcolor: "#e97700",
                  },
                }}
              >
                <SendIcon />
              </IconButton>
            </Stack>
          </Box>
        </Paper>
      )}
    </>
  );
};

export default Chatbot;
