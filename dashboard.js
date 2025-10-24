// Demo data (this can be dynamically fetched)
document.getElementById("farmer-name").innerText = localStorage.getItem("farmerName") || "Farmer";
document.getElementById("land-size").innerText = "15 Acres";
document.getElementById("total-crops").innerText = "6";
document.getElementById("yield-prediction").innerText = "12 Tons";
document.getElementById("live-status").innerText = "All Healthy 🌱";

// Crop Distribution Chart using Chart.js
const ctx = document.getElementById('cropChart').getContext('2d');
const cropChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Wheat', 'Rice', 'Maize', 'Vegetables', 'Fruits', 'Others'],
        datasets: [{
            label: 'Crop Distribution',
            data: [30, 25, 15, 10, 10, 10],
            backgroundColor: [
                '#FFADAD',
                '#FFD6A5',
                '#FDFFB6',
                '#CAFFBF',
                '#9BF6FF',
                '#A0C4FF'
            ],
            borderColor: '#fff',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: '#fff',
                    font: {
                        size: 14
                    }
                }
            }
        }
    }
});
