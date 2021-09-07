import Chart from 'react-apexcharts';

function DonutChart() {

    const mockData = {
        series: [477138, 499928, 444867, 220426, 47308, 100000, 499928, 444867, 220426, 473088, 502088 ],
        labels: ['Carlito Tevez', 'Airton Senna', 'Hebe Camargo', 'Marcos Mion', 'Neymar', 'João Dória', 'Jim Query',
        'Wesley Safadão', 'Bon Jovi', 'Raul Seixas', 'Nelio Alves']
    }

    const options = {
        legend: {
            show: true
        }
    }
    return (
        <Chart
            options={{ ...options, labels: mockData.labels }}
            series={mockData.series}
            type="donut"
            height="240"
        />
    );
}

export default DonutChart;