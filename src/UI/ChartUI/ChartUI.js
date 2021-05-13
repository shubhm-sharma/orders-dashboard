import Chart from "react-google-charts";

const ChartUI = props => {
    return (
        <div style={{ 
                    display: 'flex', 
                    maxWidth: "100%", 
                    border: "1px solid", 
                    padding: "1em",
                    marginTop: "1em" }}>
            <Chart
                width={'100%'}
                height={'300px'}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={[
                    [
                        "Date",
                        "Order Amount"
                    ],
                    [new Date(2020, 8, 1), 20000],
                    [new Date(2020, 8, 2), 20000],
                    [new Date(2020, 8, 3), 30000],
                    [new Date(2020, 8, 4), 20000],
                    [new Date(2020, 8, 5), 45000],
                    [new Date(2020, 8, 6), 30000],
                    [new Date(2020, 8, 7), 20000],
                    [new Date(2020, 8, 8), 80000]
                ]}
                options={{
                    title: 'Order Amount',
                    showRowNumber: true,
                    hAxis: { 
                            title: 'Date', 
                            titleTextStyle: { color: '#333' }, 
                            format: 'dd/MM/yyyy',
                            minValue: new Date(2020,7,31),
                            maxValue: new Date(2020,8,9)
                         },
                    vAxis: { 
                            title: 'Order Amount', 
                            minValue: 0,
                            maxValue: 100000
                        },
                    // For the legend to fit, we make the chart area smaller
                    chartArea: { width: '70%', height: '70%' },
                }}
                rootProps={{ 'data-testid': '1' }}
            />
        </div>
    )
}

export default ChartUI;