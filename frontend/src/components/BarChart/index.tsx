import Chart from 'react-apexcharts';

function BarChart() {

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

    const mockData = {
        labels: {
            categories: ['Carlito Tevez', 'Airton Senna', 'Hebe Camargo', 'Marcos Mion', 'Neymar', 'João Dória', 'Jim Query',
            'Wesley Safadão', 'Bon Jovi', 'Raul Seixas', 'Nelio Alves']
        },
        series: [
            {
                name: "% Sucesso",
                data: [43.6, 61.1, 59.7, 45.6, 1.1, 43.6, 42.1, 53.7, 45.6, 71.1]
            }
        ]
    };
    return (
        <Chart 
            options={{...options, xaxis: mockData.labels}}
            series={mockData.series}
            type="bar"
            height="240"
        />
    );
}

export default BarChart;