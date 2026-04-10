// pc-builder.js

// 1. EXPANDED COMPONENT DATABASE (Ideal Tech Style)
const pcData = {
  cpu: {
    label: "1. Processor (CPU)",
    items: [
      { name: "Select Processor", price: 0, condition: "" },
      { name: "Intel Core i3-12100F 4-Core", condition: "New", price: 429 },
      { name: "Intel Core i5-12400F 6-Core", condition: "New", price: 629 },
      { name: "Intel Core i5-13400F 10-Core", condition: "New", price: 959 },
      { name: "Intel Core i7-13700F 16-Core", condition: "New", price: 1699 },
      { name: "AMD Ryzen 5 5600 6-Core", condition: "New", price: 599 },
      { name: "AMD Ryzen 5 7600 6-Core (AM5)", condition: "New", price: 999 },
      { name: "AMD Ryzen 7 7800X3D 8-Core", condition: "New", price: 1899 },
      { name: "Intel Core i5-10400F", condition: "Used", price: 350 }
    ]
  },
  cooler: {
    label: "2. CPU Cooler",
    items: [
      { name: "Stock Intel/AMD Cooler", price: 0, condition: "New" },
      { name: "Deepcool AK400 Air Cooler", condition: "New", price: 129 },
      { name: "Thermalright Peerless Assassin 120", condition: "New", price: 189 },
      { name: "NZXT Kraken 240 RGB AIO Liquid Cooler", condition: "New", price: 699 },
      { name: "Arctic Liquid Freezer II 360 AIO", condition: "New", price: 589 }
    ]
  },
  motherboard: {
    label: "3. Motherboard",
    items: [
      { name: "Select Motherboard", price: 0, condition: "" },
      { name: "MSI PRO H610M-E DDR4", condition: "New", price: 349 },
      { name: "Gigabyte B760M DS3H DDR4", condition: "New", price: 549 },
      { name: "ASUS TUF GAMING Z790-PLUS WIFI DDR5", condition: "New", price: 1299 },
      { name: "MSI B550M PRO-VDH WIFI", condition: "New", price: 479 },
      { name: "Gigabyte B650M DS3H (AM5)", condition: "New", price: 749 },
      { name: "ASUS H510M-K", condition: "Used", price: 200 }
    ]
  },
  ram: {
    label: "4. Memory (RAM)",
    items: [
      { name: "Select RAM", price: 0, condition: "" },
      { name: "8GB (8x1) Kingston Fury Beast DDR4 3200MHz", condition: "New", price: 109 },
      { name: "16GB (8x2) Kingston Fury Beast DDR4 3200MHz", condition: "New", price: 218 },
      { name: "32GB (16x2) Corsair Vengeance LPX DDR4 3200MHz", condition: "New", price: 389 },
      { name: "32GB (16x2) G.Skill Flare X5 DDR5 6000MHz", condition: "New", price: 549 },
      { name: "16GB (8x2) Generic DDR4 2666MHz", condition: "Used", price: 120 }
    ]
  },
  gpu: {
    label: "5. Graphics Card (GPU)",
    items: [
      { name: "No GPU (Use Integrated Graphics)", price: 0, condition: "New" },
      { name: "NVIDIA GTX 1650 4GB", condition: "New", price: 699 },
      { name: "NVIDIA RTX 3060 12GB", condition: "New", price: 1399 },
      { name: "NVIDIA RTX 4060 8GB", condition: "New", price: 1499 },
      { name: "NVIDIA RTX 4070 SUPER 12GB", condition: "New", price: 3199 },
      { name: "AMD Radeon RX 6600 8GB", condition: "New", price: 999 },
      { name: "AMD Radeon RX 7800 XT 16GB", condition: "New", price: 2599 },
      { name: "NVIDIA RTX 2060 Super 6GB", condition: "Used", price: 750 }
    ]
  },
  ssd: {
    label: "6. Solid State Drive (SSD)",
    items: [
      { name: "Select SSD", price: 0, condition: "" },
      { name: "500GB Kingston NV2 PCIe 4.0 NVMe", condition: "New", price: 189 },
      { name: "1TB WD Blue SN580 PCIe 4.0 NVMe", condition: "New", price: 299 },
      { name: "2TB Samsung 990 PRO PCIe 4.0 NVMe", condition: "New", price: 849 },
      { name: "256GB SATA SSD", condition: "Used", price: 60 }
    ]
  },
  hdd: {
    label: "7. Hard Disk Drive (HDD)",
    items: [
      { name: "No HDD (SSD Only)", price: 0, condition: "New" },
      { name: "1TB Seagate Barracuda 7200RPM", condition: "New", price: 199 },
      { name: "2TB WD Blue 5400RPM", condition: "New", price: 289 },
      { name: "4TB Seagate Barracuda 5400RPM", condition: "New", price: 439 }
    ]
  },
  psu: {
    label: "8. Power Supply (PSU)",
    items: [
      { name: "Select PSU", price: 0, condition: "" },
      { name: "FSP HV PRO 550W 80+ Bronze", condition: "New", price: 189 },
      { name: "Cooler Master CX650M 650W 80+ Bronze", condition: "New", price: 289 },
      { name: "Corsair RM750e 750W 80+ Gold (ATX 3.0)", condition: "New", price: 499 },
      { name: "MSI MPG A850G 850W 80+ Gold (ATX 3.0)", condition: "New", price: 629 },
      { name: "Generic 500W Standard", condition: "Used", price: 60 }
    ]
  },
  casing: {
    label: "9. Casing (Chassis)",
    items: [
      { name: "Select Casing", price: 0, condition: "" },
      { name: "Tecware Flatline mATX (4x Fans included)", condition: "New", price: 159 },
      { name: "Montech AIR 100 ARGB mATX", condition: "New", price: 219 },
      { name: "Corsair 4000D Airflow ATX", condition: "New", price: 389 },
      { name: "Lian Li Lancool 216 RGB ATX", condition: "New", price: 439 },
      { name: "Standard Office ATX Case", condition: "Used", price: 50 }
    ]
  },
  fans: {
    label: "10. Extra Case Fans",
    items: [
      { name: "No Extra Fans Needed", price: 0, condition: "New" },
      { name: "1x 120mm Standard Black Fan", condition: "New", price: 25 },
      { name: "3x 120mm ARGB Fan Kit with Controller", condition: "New", price: 120 },
      { name: "Lian Li UNI FAN SL120 V2 (3-Pack)", condition: "New", price: 399 }
    ]
  },
  os: {
    label: "11. Operating System",
    items: [
      { name: "Windows 10/11 Pro (Unactivated Trial)", price: 0, condition: "New" },
      { name: "Windows 11 Home (OEM License)", condition: "New", price: 499 },
      { name: "Windows 11 Pro (OEM License)", condition: "New", price: 699 }
    ]
  }
};

// 2. GENERATE THE UI
function renderPCBuilder() {
  const container = document.getElementById('pc-builder-container');
  if (!container) return;

  let html = '<div class="builder-group-list">';
  
  for (const [key, category] of Object.entries(pcData)) {
    html += `
      <div class="builder-group">
        <label>${category.label}</label>
        <select class="pc-builder-select" id="select-${key}" data-category="${key}">
    `;
    
    category.items.forEach((item, index) => {
      if (index === 0) {
        // Placeholder
        html += `<option value="0">${item.name}</option>`;
      } else {
        // Format: Name (Condition) - RMPrice
        html += `<option value="${item.price}" data-name="${item.name}" data-cond="${item.condition}">
          ${item.name} (${item.condition}) - RM${item.price}
        </option>`;
      }
    });
    
    html += `</select></div>`;
  }
  
  html += '</div>';

  html += `
    <div class="total-price">Estimated Total: <span>RM<span id="pc-total">0</span></span></div>
    <button id="pc-quote-btn" class="quote-btn">Get WhatsApp Quote</button>
  `;

  container.innerHTML = html;

  const selects = document.querySelectorAll('.pc-builder-select');
  selects.forEach(select => {
    select.addEventListener('change', calculatePCTotal);
  });

  document.getElementById('pc-quote-btn').addEventListener('click', generatePCQuote);
}

// 3. CALCULATE PRICE FUNCTION
function calculatePCTotal() {
  let total = 0;
  document.querySelectorAll('.pc-builder-select').forEach(select => {
    total += parseInt(select.value) || 0;
  });
  document.getElementById('pc-total').innerText = total;
}

// 4. WHATSAPP QUOTE FUNCTION
function generatePCQuote() {
  let total = 0;
  let buildDetails = "Hi FAZGAME 👋 I would like to get a quote for this Custom PC build:%0A%0A";
  
  document.querySelectorAll('.pc-builder-select').forEach(select => {
    const option = select.options[select.selectedIndex];
    const price = parseInt(select.value) || 0;
    
    // Only include if a user explicitly selected a paid item OR a zero-cost option that isn't a placeholder
    // We check if data-cond exists to filter out placeholders like "Select Processor"
    if (option.hasAttribute('data-cond')) {
      const name = option.getAttribute('data-name');
      const cond = option.getAttribute('data-cond');
      buildDetails += `• ${name} (${cond}) - RM${price}%0A`;
      total += price;
    }
  });
  
  if (total === 0) {
    alert("Please select at least some components to get a quote.");
    return;
  }
  
  buildDetails += `%0A*Estimated Total: RM${total}*`;
  
  // Send to WhatsApp
  window.open(`https://api.whatsapp.com/send?phone=60163691936&text=${buildDetails}`, '_blank');
}

// 5. RUN SCRIPT WHEN PAGE LOADS
document.addEventListener('DOMContentLoaded', renderPCBuilder);
