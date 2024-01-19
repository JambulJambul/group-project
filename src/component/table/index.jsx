import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import classes from "./style.module.scss";
import { useState } from "react";
import { callAPI } from "../../domain/api";
import { useEffect } from "react";
import TablePagination from "@mui/material/TablePagination";

//

const index = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const fetchData = async () => {
    try {
      const response = await callAPI("/posts", "GET");
      console.log(response);

      const getData = response?.map((item) => {
        return {
          id: item?.id,
          roomMaster: item?.roomMaster,
          schedule: item?.schedule,
          location: item?.location,
          description: item?.description,
          duration: item?.duration,
          contactPhone: item?.contactPhone,
        };
      });
      setData(getData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className={classes.container}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>No</TableCell>
                <TableCell align="center">Room</TableCell>
                <TableCell align="center">Schedule</TableCell>
                <TableCell align="center">Location</TableCell>
                <TableCell align="center">Description</TableCell>
                <TableCell align="center">Duration</TableCell>
                <TableCell align="center">Contact Phone</TableCell>
                <TableCell align="left">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(
                (
                  item,
                  index // 'index' is the second parameter in the map function
                ) => (
                  <TableRow key={item.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    {/* Calculate the row number considering the current page and rows per page */}
                    <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                    <TableCell align="right" component="th" scope="row">
                      {item.roomMaster}
                    </TableCell>
                    <TableCell align="right">{item.schedule}</TableCell>
                    <TableCell align="right">{item.location}</TableCell>
                    <TableCell align="right">{item.description}</TableCell>
                    <TableCell align="right">{item.duration}</TableCell>
                    <TableCell align="right">{item.contactPhone}</TableCell>
                    <TableCell className={classes.flex} align="right">
                      <Stack spacing={1} direction="row">
                        <Button color="error" variant="contained">
                          Delete
                        </Button>
                        <Button variant="contained">Detail</Button>
                      </Stack>
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
          <TablePagination component="div" count={data.length} page={page} onPageChange={handleChangePage} rowsPerPage={rowsPerPage} onRowsPerPageChange={handleChangeRowsPerPage} />
        </TableContainer>
      </div>
    </>
  );
};

export default index;
