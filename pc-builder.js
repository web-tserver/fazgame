// pc-builder.js
// FAZGAME Custom PC Builder - Complete Component Data & Logic

(function() {
  const componentData = {
    cpu: {
      label: "💻 CPU / Processor",
      items: [
        { name: "Intel Core i3-12100 (New)", price: 450, selected: true },
        { name: "Intel Core i3-12100 (Used)", price: 350 },
        { name: "Intel Core i5-12400F (New)", price: 650 },
        { name: "Intel Core i5-12400F (Used)", price: 500 },
        { name: "Intel Core i5-13400 (New)", price: 850 },
        { name: "Intel Core i5-13400 (Used)", price: 650 },
        { name: "Intel Core i7-13700K (New)", price: 1450 },
        { name: "Intel Core i7-13700K (Used)", price: 1100 },
        { name: "Intel Core i9-13900K (New)", price: 2250 },
        { name: "Intel Core i9-13900K (Used)", price: 1700 },
        { name: "AMD Ryzen 5 5600X (New)", price: 750 },
        { name: "AMD Ryzen 5 5600X (Used)", price: 550 },
        { name: "AMD Ryzen 7 7700X (New)", price: 1450 },
        { name: "AMD Ryzen 7 7700X (Used)", price: 1100 },
        { name: "AMD Ryzen 9 7900X (New)", price: 2150 },
        { name: "AMD Ryzen 9 7900X (Used)", price: 1600 }
      ]
    },
    cooler: {
      label: "❄️ CPU Cooler",
      items: [
        { name: "Stock Cooler (included)", price: 0, selected: true },
        { name: "Air Cooler (New)", price: 150 },
        { name: "Air Cooler (Used)", price: 100 },
        { name: "240mm AIO Liquid Cooler (New)", price: 350 },
        { name: "240mm AIO Liquid Cooler (Used)", price: 250 },
        { name: "360mm AIO Liquid Cooler (New)", price: 550 },
        { name: "360mm AIO Liquid Cooler (Used)", price: 400 }
      ]
    },
    motherboard: {
      label: "🔧 Motherboard",
      items: [
        { name: "H610 / A620 (Budget) (New)", price: 350, selected: true },
        { name: "H610 / A620 (Budget) (Used)", price: 250 },
        { name: "B660 / B650 (Mid-range) (New)", price: 550 },
        { name: "B660 / B650 (Mid-range) (Used)", price: 400 },
        { name: "Z690 / X670 (High-end) (New)", price: 850 },
        { name: "Z690 / X670 (High-end) (Used)", price: 600 },
        { name: "Z790 / X670E (Premium) (New)", price: 1200 },
        { name: "Z790 / X670E (Premium) (Used)", price: 850 }
      ]
    },
    ram: {
      label: "🧠 RAM",
      items: [
        { name: "8GB DDR4 3200MHz (New)", price: 150 },
        { name: "8GB DDR4 3200MHz (Used)", price: 100 },
        { name: "16GB DDR4 3200MHz (New)", price: 250, selected: true },
        { name: "16GB DDR4 3200MHz (Used)", price: 180 },
        { name: "32GB DDR4 3200MHz (New)", price: 450 },
        { name: "32GB DDR4 3200MHz (Used)", price: 320 },
        { name: "16GB DDR5 5200MHz (New)", price: 350 },
        { name: "16GB DDR5 5200MHz (Used)", price: 250 },
        { name: "32GB DDR5 5600MHz (New)", price: 650 },
        { name: "32GB DDR5 5600MHz (Used)", price: 450 }
      ]
    },
    gpu: {
      label: "🎮 Graphics Card (GPU)",
      items: [
        { name: "Integrated Graphics", price: 0 },
        { name: "GTX 1650 4GB (New)", price: 550 },
        { name: "GTX 1650 4GB (Used)", price: 400 },
        { name: "RTX 3060 12GB (New)", price: 850, selected: true },
        { name: "RTX 3060 12GB (Used)", price: 650 },
        { name: "RTX 4060 Ti 8GB (New)", price: 1350 },
        { name: "RTX 4060 Ti 8GB (Used)", price: 1000 },
        { name: "RTX 4070 12GB (New)", price: 1950 },
        { name: "RTX 4070 12GB (Used)", price: 1450 },
        { name: "RTX 4080 16GB (New)", price: 3200 },
        { name: "RTX 4080 16GB (Used)", price: 2400 },
        { name: "AMD RX 6600 8GB (New)", price: 750 },
        { name: "AMD RX 6600 8GB (Used)", price: 550 },
        { name: "AMD RX 7700 XT 12GB (New)", price: 1650 },
        { name: "AMD RX 7700 XT 12GB (Used)", price: 1200 }
      ]
    },
    storage: {
      label: "💾 Storage",
      items: [
        { name: "256GB NVMe SSD (New)", price: 120 },
        { name: "256GB NVMe SSD (Used)", price: 80 },
        { name: "512GB NVMe SSD (New)", price: 200, selected: true },
        { name: "512GB NVMe SSD (Used)", price: 140 },
        { name: "1TB NVMe SSD (New)", price: 350 },
        { name: "1TB NVMe SSD (Used)", price: 250 },
        { name: "2TB NVMe SSD (New)", price: 550 },
        { name: "2TB NVMe SSD (Used)", price: 400 },
        { name: "1TB HDD + 256GB SSD (New)", price: 250 },
        { name: "1TB HDD + 256GB SSD (Used)", price: 180 }
      ]
    },
    psu: {
      label: "⚡ Power Supply (PSU)",
      items: [
        { name: "500W 80+ Bronze (New)", price: 200, selected: true },
        { name: "500W 80+ Bronze (Used)", price: 140 },
        { name: "650W 80+ Bronze (New)", price: 280 },
        { name: "650W 80+ Bronze (Used)", price: 200 },
        { name: "750W 80+ Gold (New)", price: 450 },
        { name: "750W 80+ Gold (Used)", price: 320 },
        { name: "850W 80+ Gold (New)", price: 550 },
        { name: "850W 80+ Gold (Used)", price: 400 },
        { name: "1000W 80+ Gold (New)", price: 750 },
        { name: "1000W 80+ Gold (Used)", price: 550 }
      ]
    },
    pcCase: {
      label: "🖥️ PC Case",
      items: [
        { name: "Budget ATX (e.g. Tecware) (New)", price: 150, selected: true },
        { name: "Budget ATX (e.g. Tecware) (Used)", price: 100 },
        { name: "Mid Tower with Tempered Glass (New)", price: 250 },
        { name: "Mid Tower with Tempered Glass (Used)", price: 180 },
        { name: "Premium RGB Case (e.g. Lian Li) (New)", price: 450 },
        { name: "Premium RGB Case (e.g. Lian Li) (Used)", price: 320 },
        { name: "Small Form Factor (ITX) (New)", price: 300 },
        { name: "Small Form Factor (ITX) (Used)", price: 220 }
      ]
    },
    monitor: {
      label: "🖥️ Monitor",
      items: [
        { name: "None", price: 0 },
        { name: '22" 75Hz IPS (New)', price: 350 },
        { name: '22" 75Hz IPS (Used)', price: 250 },
        { name: '24" 144Hz Gaming (New)', price: 550, selected: true },
        { name: '24" 144Hz Gaming (Used)', price: 400 },
        { name: '27" 165Hz Curved (New)', price: 850 },
        { name: '27" 165Hz Curved (Used)', price: 600 },
        { name: '32" 4K UHD (New)', price: 1350 },
        { name: '32" 4K UHD (Used)', price: 950 }
      ]
    },
    accessories: {
      label: "🎧 Accessories (Keyboard + Mouse)",
      items: [
        { name: "None", price: 0 },
        { name: "Basic Combo (New)", price: 100, selected: true },
        { name: "Basic Combo (Used)", price: 70 },
        { name: "Mechanical + Gaming Mouse (New)", price: 250 },
        { name: "Mechanical + Gaming Mouse (Used)", price: 180 },
        { name: "RGB Mechanical + Wireless Mouse (New)", price: 400 },
        { name: "RGB Mechanical + Wireless Mouse (Used)", price: 280 }
      ]
    }
  };

  function buildPCBuilder() {
    const container = document.getElementById('pc-builder-container');
    if (!container) return;

    let html = '<div class="builder-group-list">';
    for (const [key, category] of Object.entries(componentData)) {
      html += `
        <div class="builder-group">
          <label>${category.label}</label>
          <select id="${key}Select" class="pc-builder-select">
      `;
      category.items.forEach(item => {
        const selectedAttr = item.selected ? 'selected' : '';
        html += `<option value="${item.price}" ${selectedAttr}>${item.name} - RM${item.price}</option>`;
      });
      html += `</select></div>`;
    }
    html += '</div>';

    html += `
      <div class="total-price">
        Estimated Total: <span id="totalPrice">RM0</span>
      </div>
      <button id="quoteBtn" class="quote-btn">Request Quote via WhatsApp</button>
    `;
    container.innerHTML = html;

    document.querySelectorAll('.pc-builder-select').forEach(select => {
      select.addEventListener('change', updateTotal);
    });
    updateTotal();

    const quoteBtn = document.getElementById('quoteBtn');
    if (quoteBtn) quoteBtn.addEventListener('click', requestQuote);
  }

  function updateTotal() {
    let total = 0;
    for (const key of Object.keys(componentData)) {
      const select = document.getElementById(`${key}Select`);
      if (select) {
        total += parseInt(select.value) || 0;
      }
    }
    const totalSpan = document.getElementById('totalPrice');
    if (totalSpan) totalSpan.textContent = `RM${total.toLocaleString()}`;
  }

  function requestQuote() {
    let message = "Hi FAZGAME 👋 I'd like to request a quote for a custom PC with these components:\n\n";
    for (const [key, category] of Object.entries(componentData)) {
      const select = document.getElementById(`${key}Select`);
      if (select) {
        const selectedOption = select.options[select.selectedIndex];
        message += `- ${category.label}: ${selectedOption.text}\n`;
      }
    }
    const totalSpan = document.getElementById('totalPrice');
    const total = totalSpan ? totalSpan.textContent : "RM0";
    message += `\nEstimated Total: ${total}\n\nCan you provide a final price and availability?`;
    window.open(`https://api.whatsapp.com/send?phone=60163691936&text=${encodeURIComponent(message)}`, '_blank');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildPCBuilder);
  } else {
    buildPCBuilder();
  }
})();
