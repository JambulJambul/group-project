import classes from './style.module.scss'
import { Button, Typography, Box } from '@mui/material'
import { useState } from 'react'
import { useForm } from "react-hook-form"
import FormBox from './components/FormBox'
import Navbar from '../../component/navbar'

const CreateMeetPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <Box className={classes["page-wrapper"]}>
        <Box className={classes["header-wrapper"]}>
          <Typography variant='h3'>
            Create Meeting
          </Typography>
        </Box>
        <Box className={classes["form-wrapper"]} mt={4}>
          <FormBox></FormBox>
          <Box ml={4} className={classes["maps-box"]}>
          </Box>
        </Box>

      </Box >
    </>
  )
}

export default CreateMeetPage