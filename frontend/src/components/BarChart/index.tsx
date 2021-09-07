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
                data: [47.7, 49.9, 44.4, 22.1, 5.1, 49.9, 44.4, 22.0, 47.3, 50.2, 100.0]
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