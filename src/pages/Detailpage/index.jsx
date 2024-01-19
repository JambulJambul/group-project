import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import CardDetail from "../../components/CardDetail";

import classes from "./style.module.scss";

import callAPI from "../../domain/api";

const Detailpage = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      if (id) {
        const response = await callAPI(`/posts/${id}`, "GET");
        setDetail(response);
      } else {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className={classes["wrapper"]}>
        <h1>Meeting Details</h1>
        <CardDetail key={detail.id} data={detail} />
      </div>
    </>
  );
};

export default Detailpage;
