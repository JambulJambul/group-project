import React from "react";
import Component from "../../component/navbar/index";
import Table from "../../component/table/index";
import classes from "./style.module.scss";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Homepage = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <Component />
        <div>
          <div className={classes.content}>
            <Stack spacing={2} direction="row">
              <Button variant="contained">Add Meet</Button>
            </Stack>
            <Table />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
