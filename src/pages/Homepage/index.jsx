import React from "react";
import Navbar from "../../component/navbar/index";
import Table from "../../component/table/index";
import classes from "./style.module.scss";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Footer from "../../component/footer/footer";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <h4>Home</h4>
          <Stack spacing={2} direction="row">
            <Link to={"/create-page"}>
              <Button variant="contained">Add Meet</Button>
            </Link>
          </Stack>
          <Table />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
