import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import CountUp from 'react-countup';

export default function HighlightCard({ title, count, type }) {
    const borderL = () => {
        if(type === "confirmed") return {borderLeft: "5px solid #c9203c"}
        if(type === "recovered") return {borderLeft: "5px solid #28a745"};
        else return {borderLeft: "5px solid gray"};
    }
    return (
        <Card>
            <CardContent sx ={borderL()}>
                <Typography variant='body2' component='p' sx= {{fontSize: 18, marginBottom: 1}}>{title}</Typography>
                <Typography variant='body2' component='span' sx = {{fontSize: 18, fontWeight: 'bold'}}>
                    <CountUp end={count} duration={2} separator=" " /></Typography>
            </CardContent>
        </Card>
    )
}
