import { BarChart, barClasses, barElementClasses } from '@mui/x-charts/BarChart';

export default function GridChart(){

    const settings = {
        xAxis: [{ data: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"] }],
        series: [
        {
            id: '1',
            data: Array(12).fill(60)
        },
        ],
        height: 300,
        barLabel: null,
        margin: { left: 0 },
    };

    return(
        <BarChart
            {...settings}
            sx={{
                [`& .${barClasses.series} .${barElementClasses.root}`]: {
                    fill: 'url(#bar-gradient)',
                },
            }}
            borderRadius={10}
        >
            <defs>
                <linearGradient id="bar-gradient" x1="0" y1="100%" x2="0" y2="0">
                    <stop offset="10%" stopColor="#0078D700" />
                    <stop offset="80%" stopColor="#0078D7" /> 
                </linearGradient>
            </defs>
        </BarChart>

  
    )
}