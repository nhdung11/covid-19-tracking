import {Grid } from '@mui/material'
import React from 'react'
import HighlightCard from './HighlightCard';

export default function Highlight({report}) {
  const data = report && report.length ? report[report.length-1] : [];
  const  infor = [
    {
      title: "Số ca nhiễm",
      count: data.Confirmed,
      type:"confirmed"
    },
    {
      title: "Khỏi",
      count: data.Recovered,
      type:"recovered"
    },
    {
      title: "Tử vong",
      count: data.Deaths,
      type:"deaths"
    },
  ]
  return (
    <div>
      <Grid container spacing={3} marginBottom={3} marginTop={1}>
        {
          infor.map((item, index )=> (
            <Grid item sm={4} xs ={12} key={index}>
              <HighlightCard title = {item.title} count = {item.count} type ={item.type}/>
            </Grid>
          ))
        }
      </Grid>
    </div>
  )
}
