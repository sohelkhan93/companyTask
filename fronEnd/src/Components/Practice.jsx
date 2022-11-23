import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Card, CardContent, Stack, Pagination } from "@mui/material";
import { useDispatch } from "react-redux";

export const Practice = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [next, setNext] = useState(4);
  const [per, setPer] = useState(0);

  const handleChange = (elem, value) => {
    setNext(3 * value);
    setPer(3 * value - 3);
  };

  const getData = async () => {
    const result = await axios.get("http://localhost:5000/fetch");
    setData(result.data.requests);
    dispatch({ type: "SET_PRODUCTS", data: result.data.requests });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>Data</h1>

      <Grid container spacing={2}>
        {data.slice(per, next).map((item) => {
          return (
            <Grid item xs={4}>
              <Card style={{ backgroundColor: "tan" }}>
                <CardContent>
                  <h4>{item.id}</h4>
                  <h4>{item.headers}</h4>
                  <a href="">
                    <h4>{item.url}</h4>
                  </a>

                  <h5>{item.preRequestScript}</h5>
                  <h5>{item.method}</h5>
                  {/* <h5>{item.data}</h5> */}
                  <h5>{item.dataMode}</h5>
                  <h5>{item.tests}</h5>
                  <h5>{item.currentHelper}</h5>
                  <h5>{item.time}</h5>
                  <h5>{item.name}</h5>
                  <h5>{item.description}</h5>
                  <h5>{item.collectionId}</h5>
                  {/* <h5>{item.responses}</h5> */}
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Stack>
        <Pagination count={5} onChange={handleChange} const={data.length / 8} />
      </Stack>
    </div>
  );
};
