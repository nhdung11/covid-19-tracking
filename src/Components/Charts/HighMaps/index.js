import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import HighCharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highChartsMap from 'highcharts/modules/map';
import { cloneDeep } from 'lodash';

highChartsMap(HighCharts);

const initOptions = {
    chart: {
        height: '500',
    },
    title: {
        text: null,
    },
    mapNavigation: {
        enabled: true,
    },
    colorAxis: {
        min: 0,
        stops: [
            [0.2, '#FFC4AA'],
            [0.4, '#FF8A66'],
            [0.6, '#FF392B'],
            [0.8, '#B71525'],
            [1, '	#7A0826'],
        ],
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'bottom',
    },
    series: [
        {
            mapData: {},
            name: 'Dân số',
            joinBy: ['hc-key', 'key'],
        },
    ],
};

export default function HighMaps({ mapData }) {
    const [options, setOptions] = useState({})
    const [configLoaded, setConfigLoaded] = useState(false)
    const chartRef = useRef(null)
    useEffect(() => {
        if (mapData && Object.keys(mapData).length) {
            const fakeData = mapData.features.map((feature, index) => ({
                key: feature.properties['hc-key'],
                value: index
            }))
            setOptions(() => ({
                ...initOptions,
                title: {
                    text: mapData.title,
                },
                series: [{
                    ...initOptions.series[0],
                    mapData: mapData,
                    data: fakeData,
                }]

            }))
            if(!configLoaded) setConfigLoaded(true)
        }
    }, [mapData, configLoaded])

    useEffect(() => {
        if (chartRef && chartRef.current) {
            chartRef.current.chart.series[0].update({ mapData: mapData });
        }
    }, [mapData])

    if (!configLoaded) return null

    return (
        <HighchartsReact
            highcharts={HighCharts}
            options={cloneDeep(options)}
            constructorType={'mapChart'}
            ref={chartRef}
        />
    )
}
