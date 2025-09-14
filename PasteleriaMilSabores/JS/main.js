document.addEventListener("DOMContentLoaded", () => {
  // 1. Funcionalidad para colapsar y expandir la barra lateral.
  // Es una versión más robusta y unificada que maneja tanto desktop como mobile.
  const btnToggleSidebar = document.querySelector(".btn-toggle-sidebar");
  const sidebar = document.querySelector(".menu-lateral");
  const body = document.body;

  if (btnToggleSidebar && sidebar) {
    btnToggleSidebar.addEventListener("click", () => {
      // Toggle de clases para el sidebar y el cuerpo
      sidebar.classList.toggle("colapsado");
      body.classList.toggle("menu-colapsado");
    });
  }

  // 2. Renderizado del gráfico de ventas con Chart.js.
  // El código está encapsulado para garantizar que se ejecute solo si el elemento existe.
  const ctx = document.getElementById('ventasMes');
  if (ctx) {
    new Chart(ctx.getContext('2d'), {
      type: 'bar',
      data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
        datasets: [{
          label: 'Ventas $',
          data: [1200, 1900, 3000, 2500, 3200, 4000],
          backgroundColor: 'rgba(255, 192, 203, 0.6)',
          borderColor: '#8B4513',
          borderWidth: 2,
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          },
          title: {
            display: true,
            text: 'Ventas por Mes',
            color: '#5D4037',
            font: {
              size: 18
            }
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            beginAtZero: true,
            grid: {
              color: '#eadbc4'
            }
          }
        }
      }
    });
  }
});