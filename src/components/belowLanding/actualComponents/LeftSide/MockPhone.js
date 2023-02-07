import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

import theUser from "../../assets/unregUser.png";

const MockPhone = () => {
  return (
    <div className="mockPhoneCasing">
      <Typography
        className="mockPhoneNotif"
        sx={{ fontWeight: 700, color: "rgb(80, 80, 80)" }}
      >
        Leon's Notifications
      </Typography>
      <Stack spacing={1} className="mockPhoneSkladniki">
        <Skeleton variant="text" sx={{ fontSize: "1rem", width: "75%" }} />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={60} />
        <Stack
          className="youNotification"
          sx={{
            display: "flex",
            flexDirection: "row",
            width: 210,
          }}
        >
          <Stack
            sx={{
              borderRadius: "50%",
              width: "20%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              style={{
                objectFit: "contain",
                maxWidth: "80%",
                borderRadius: "50%",
              }}
              src={theUser}
              alt="unknown solicitor"
            />
          </Stack>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "70%",
              ml: 1,
            }}
          >
            <Typography
              sx={{ fontWeight: 700, color: "rgb(80, 80, 80)" }}
            >{`You!`}</Typography>
            <Typography
              sx={{ fontWeight: 700, color: "rgb(80, 80, 80)" }}
            >{`😁👌✅`}</Typography>
            {/* <Skeleton variant="text" sx={{ fontSize: "1rem", width: "75%" }} /> */}
          </Stack>
        </Stack>
        <Skeleton variant="rounded" width={210} height={60} />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={60} />
      </Stack>
    </div>
  );
};

export default MockPhone;
