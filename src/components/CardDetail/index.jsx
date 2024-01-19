import { CardContent, Typography, Stack } from "@mui/material";
import MapsGoogle from "../MapsGoogle";
import classes from "./style.module.scss";

const CardDetail = ({ data }) => {
  const url = data.googleMapsUrl;
  return (
    <>
      <CardContent className={classes["box-card"]}>
        <div className={classes["box-text"]}>
          <Typography
            sx={{
              width: 150,
              fontSize: 18,
              fontWeight: 600,
              padding: 2,
            }}
          >
            Room Master
          </Typography>
          <Typography
            sx={{
              fontSize: 14,
            }}
          >
            {data.roomMaster}
          </Typography>
        </div>
        <div className={classes["box-content"]}>
          <div className={classes["box-area"]}>
            <Typography
              sx={{
                width: 150,
                fontSize: 16,
                fontWeight: 600,
                padding: 2,
              }}
            >
              Schedule
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                padding: 2,
              }}
            >
              {data.schedule}
            </Typography>
          </div>
          <div className={classes["box-area"]}>
            <Typography
              sx={{
                width: 150,
                fontSize: 16,
                fontWeight: 600,
                padding: 2,
              }}
            >
              Duration
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                padding: 2,
              }}
            >
              {data.duration}
            </Typography>
          </div>
        </div>
        <div className={classes["box-content"]}>
          <div className={classes["box-area"]}>
            <Typography
              sx={{
                width: 150,
                fontSize: 16,
                fontWeight: 600,
                padding: 2,
              }}
            >
              Location
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                padding: 2,
              }}
            >
              {data.location}
            </Typography>
          </div>
          <div className={classes["box-area"]}>
            <Typography
              sx={{
                width: 150,
                fontSize: 16,
                fontWeight: 600,
                padding: 2,
              }}
            >
              Contact Phone
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                padding: 2,
              }}
            >
              {data.contactPhone}
            </Typography>
          </div>
        </div>
        <div className={classes["box-text"]}>
          <Typography
            sx={{
              fontSize: 16,
              fontWeight: 600,
              padding: 2,
            }}
          >
            Description
          </Typography>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              padding: 2,
              fontSize: 14,
              minHeight: 150,
            }}
          >
            {data.description}
          </Typography>
        </div>
        <MapsGoogle data={url}/>
      </CardContent>
    </>
  );
};

export default CardDetail;
