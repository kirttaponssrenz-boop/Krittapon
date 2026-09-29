// โครงสร้าง Adjacency List สำหรับ Graph Theory (6 Vertices, 7 Edges)
const ingredientGraph = {
  "ผัดไทยกุ้งสด": ["กุ้งสด", "เส้นจันทน์", "เต้าหู้", "ถั่วลิสง"],
  "ข้าวกะเพราไก่": ["เนื้อไก่", "ใบกะเพรา", "พริกสด", "กระเทียม"],
  "กุ้งสด": ["ผัดไทยกุ้งสด", "พริกเผา"],
  "เส้นจันทน์": ["ผัดไทยกุ้งสด", "พริกเผา"],
  "เต้าหู้": ["ผัดไทยกุ้งสด", "ถั่วลิสง"],
  "ถั่วลิสง": ["ผัดไทยกุ้งสด", "เต้าหู้"]
};

// ฟังก์ชันสลับหน้า Single Page Application
function goToPage(pageId) {
  const screens = ['screen1', 'screen2', 'screen3', 'screen4'];
  screens.forEach(id => {
    document.getElementById(id).classList.add('hidden');
  });
  document.getElementById(pageId).classList.remove('hidden');
}

// ฟังก์ชันเมื่อเลือกเมนู และดึงข้อมูล Graph มาแสดงผล
function selectMenu(itemName) {
  const neighbors = ingredientGraph[itemName] || ["วัตถุดิบมาตรฐาน"];
  
  document.getElementById('vertex-main').innerText = itemName;
  
  // สร้างรายการ Adjacent Vertices/Edges
  const listContainer = document.getElementById('ingredient-list');
  listContainer.innerHTML = neighbors.map(n => `
    <div class="bg-slate-900/90 p-3 rounded-xl border border-slate-700 text-center">
      <i class="fa-solid fa-cubes text-indigo-400 mb-1 block"></i>
      <span class="text-xs font-medium text-slate-200">${n}</span>
    </div>
  `).join('');

  // แสดงผล Graph Path Traversal
  const pathText = `${itemName} ➔ ${neighbors[0]} ➔ พริกเผา`;
  document.getElementById('path-display').innerHTML = `
    <i class="fa-solid fa-route text-emerald-400"></i> ${pathText}
  `;

  // ส่งข้อมูลไปยัง Screen 3 และ Screen 4
  document.getElementById('confirm-name').innerText = itemName;
  document.getElementById('receipt-name').innerText = itemName;
  document.getElementById('receipt-path').innerText = pathText;

  // เปลี่ยนไปหน้า Screen 2
  goToPage('screen2');
}