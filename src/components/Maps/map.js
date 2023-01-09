import React from "react";
import GoogleMapReact from "google-map-react";
import { paper, Typography, useMediaQuery } from "@mui/material";
// import LocationOutlinedIcon from "@mui/icons-material";
// import Rating from "@mui/icons-material";

export default function Maps() {
  const isMobile = useMediaQuery("(min-width:600px)");
  return (
    <>
      <Typography variant="h6">
        maps
        {/* <LocationOutlinedIcon />
        <Rating /> */}
      </Typography>
    </>
  );
}
