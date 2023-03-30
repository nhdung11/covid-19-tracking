import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import LineChart from '../Charts/LineChart'
import HighMaps from '../Charts/HighMaps'

export default function Summary({report, countryId}) {
  
  const [myData, setMapData] = useState({})
  useEffect(()=>{
    if(countryId){
      import(
        `@highcharts/map-collection/countries/${countryId}/${countryId}-all.geo.json`
      ).then(res => {
        setMapData(res)
      })
    }
  }, [countryId])
  return (
    <div>
      <Grid container>
        {/* Line chart */}
        <Grid item sm={8} xs= {12}>
          <LineChart data={report} />
        </Grid>
        {/* High maps */}
        <Grid item sm={4} xs= {12}>
          <HighMaps mapData={myData}/>
        </Grid>
      </Grid>

    </div>
  )
}
