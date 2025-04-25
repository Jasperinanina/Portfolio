const works = [
//WORK 1: AACH GLAUKGLUCK
  { title: "Aach glaukgluck", description: "Aach glaukgluck", image: "images/works/thumb/aach-glaukgluck.jpg", orbit: 2, closeups: [],  
  size: "50x70cm",
  material: "Ceramic",
  year: "2024",
  original: "images/works/aach-glaukgluck.jpeg" },
//WORK 2: SPIRALICIOUS
  { title: "Spiralicious", description: "Spiralicious", image: "images/works/thumb/spiralicious.jpg", orbit: 2, closeups: [],  
  size: "45x60,5cm",
  material: "Glazed tiles",
  year: "2024",
  original: "images/works/spiralicious.jpg" },
//WORK 4: VULKAAN SEKS
  { title: "Vulkaan seks", description: "Vulkaan seks", image: "images/works/thumb/vulkaan-seks.jpg", orbit: 3, closeups: [
    "images/works/closeups/vulkaanseks-1.jpg",
    "images/works/closeups/vulkaanseks-2.jpg",
    "images/works/closeups/vulkaanseks-3.JPG",
  ],  
    size: "51x20x25cm",
    material: "Ceramic",
    year: "2023",
    original: "images/works/vulkaan-seks.JPG" },
//WORK 5: WIEHOEE
  { title: "Wiehoee", description: "Wiehoee", image: "images/works/thumb/wiehoee.jpg", orbit: 3, closeups: [],  
  size: "58x83",
  material: "Glazed ceramic",
  year: "2023",
  original: "images/works/wiehoee.jpg" },
//WORK 6: Oeiejejoei 
  { title: "Oeiejejoei", description: "Oeiejejoei", image: "images/works/thumb/oeiejejoei.jpg", orbit: 3, closeups: [
    "images/works/closeups/oeijejoei-1.jpg",
    "images/works/closeups/oeijejoei-2.jpg",
    "images/works/closeups/oeijejoei-3.jpg",
  ],  
  size: "84x125cm",
  material: "Ceramic tiles, underglaze",
  year: "2022",
  original: "images/works/oeiejeoei.jpg" },
  //WORK 7: GAILIEEN AWARD
  { title: "Gailieën award", description: "Gailieën award", image: "images/works/thumb/gaylian-award.jpg", orbit: 5, closeups: [],  
  size: "28x18x18cm",
  material: "Ceramic",
  year: "2023",
  original: "images/works/gaylian-award.jpg"  },
  //WORK 8: I LOVE VULCANOS
  { title: "I love vulcanos", description: "I love vulcanos", image: "images/works/thumb/ilovevulcanos.jpg", orbit: 5, closeups: [],  
  size: "30x25x21cm",
  material: "Ceramic",
  year: "2024",
  original: "images/works/ilovevulcanos.jpg" },
  //WORK 9: NAAR DAAR
  { title: "Naar daar", description: "Naar daar", image: "images/works/thumb/naardaar.jpg", orbit: 5, closeups: [],  
  size: "100x200cm",
  material: "Ceramic glas",
  year: "2022",
  original: "images/works/naardaar.jpg" },
  //WORK 10: ZAP ZAP PEW PEW
  { title: "Zap zap pew pew", description: "Zap zap pew pew", image: "images/works/thumb/ZAP-ZAP-Pew-Pew.jpg", orbit: 5, closeups: [
    "images/works/closeups/zapzap-pewpew-1.jpg",
    "images/works/closeups/zapzap-pewpew-2.jpg",
    "images/works/closeups/zapzap-pewpew-3.jpg",
  ],  
  size: "146x93cm",
  material: "Ceramic tiles, underglaze",
  year: "2022",
  original: "images/works/ZAP-ZAP-Pew-Pew.jpg" },
  //WORK 11: KILN PREDICTIONS
  { title: "Kiln predictions", description: "Kiln predictions", image: "images/works/thumb/kilnpredictions.jpg", orbit: 7, closeups: [],  
  size: "80x50cm",
  material: "Ceramic, wood",
  year: "2025",
  original: "images/works/kilnpredictions.jpg" },
  //WORK 12: PLS PROBE ME
  { title: "Please probe me", description: "Please probe me", image: "images/works/thumb/plsprobeme.jpg", orbit: 7, closeups: [],  
  size: "30x25cm",
  material: "Ceramic",
  year: "2024",
  original: "images/works/plsprobeme.jpg" },
  //WORK 13: SELF-FULFULLING-PROPHECY
  { title: "Self fulfulling prophecy", description: "Self-fulfulling-prophecy", image: "images/works/thumb/self-fulfulling-prophecy.jpg", orbit: 7, closeups: [
    "images/works/closeups/self-fulfulling-prophecy-1.jpg",
    "images/works/closeups/self-fulfulling-prophecy-2.jpg",
    "images/works/closeups/self-fulfulling-prophecy-3.jpg",

  ],  
  size: "220x45cm",
  material: "Ceramic",
  year: "2024",
  original: "images/works/self-fulfulling-prophecy.jpg" },
  //WORK 14: SPACEBOY BROKE MA HEART 
  { title: "Spaceboy broke ma heart", description: "Spaceboy broke ma heart", image: "images/works/thumb/spaceboybrokemaheart.jpg", orbit: 7, closeups: [],  
  size: "34,5x43cm",
  material: "Glazed ceramic",
  year: "2022",
  original: "images/works/spaceboybrokemaheart.jpg" },
  //WORK 15: VALLENDE STER
  { title: "Vallende ster", description: "Vallende ster", image: "images/works/thumb/makeawish.jpg", orbit: 8, closeups: [],  
  size: "31x20x13cm",
  material: "Glazed ceramic",
  year: "2022",
  original: "images/works/makeawish.jpg" },
  //WORK 16: SPACIERACIE
  { title: "Spacie racie", description: "Spacie racie", image: "images/works/thumb/spacyracy.jpg", orbit: 8, closeups: [
    "images/works/closeups/spacieracie-1.jpg",
    "images/works/closeups/spacieracie-2.jpg",
    "images/works/closeups/spacieracie-3.jpg",
  ],  
  size: "310x230cm",
  material: "Air dryed clay",
  year: "2024",
  original: "images/works/spacyracy.jpg" },
  //WORK 17: STARSHIPS WERE MEANT TO FLY
  { title: "Starships were meant to fly", description: "Starships were meant to fly", image: "images/works/thumb/starshipsaremeanttofly.jpg", orbit: 8, closeups: [],  
  size: "31x31cm",
  material: "Glazed ceramic",
  year: "2022",
  original: "images/works/starshipsaremeanttofly.jpg" },
  //WORK 18: THE FAGS ARRIVING 
  { title: "The fags arriving", description: "The fags arriving", image: "images/works/thumb/thefagsarriving.jpg", orbit: 8, closeups: [],  
  size: "86x56cm",
  material: "Ceramic tiles, underglaze",
  year: "2022",
  original: "images/works/thefagsarriving.jpeg" },
  //WORK 19: ZWARTGATJE
  { title: "Zwartgatje", description: "Zwartgatje", image: "images/works/thumb/zwartgatje.jpg", orbit: 8, closeups: [],  
  size: "17x17x17cm",
  material: "Ceramic, metal",
  year: "2024",
  original: "images/works/zwartgatje.jpg" },
  //SATELITE
  { title: "", description: "", image: "", orbit: 9, closeups: [] },
];

const menuList = document.getElementById("work-list");
const orbitSystem = document.getElementById("orbit-system");

const planets = [];
const orbitMap = new Map();
let openWorkWindows = [];
let currentCloseUpPlanet = null;
let suppressWorkInfoClose = false;

const orbitRotations = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 5, 6: 10, 7: 0, 8: 0, 9: -10 };

window.addEventListener("load", checkOrientation);
window.addEventListener("resize", checkOrientation);

function isMobilePortrait() {
  return window.innerHeight > window.innerWidth;
}

function isMobileDevice() {
  return window.innerHeight < 600 || window.innerWidth < 600;
}


window.addEventListener("orientationchange", () => {
  setTimeout(() => {
    generateOrbitPaths();
    planets.forEach((p, index) => {
      const { xRadius, yRadius } = orbitMap.get(works[index].orbit);
      p.xRadius = xRadius;
      p.yRadius = yRadius;
    });
  }, 300); 
});


function getResponsiveRadii(orbitIndex) {
  const base = window.innerWidth * 0.001;
  return {
    xRadius: base + orbitIndex * (window.innerWidth * 0.04),
    yRadius: base + orbitIndex * (window.innerWidth * 0.010),
  };
}

function rotatePoint(x, y, angleDegrees) {
  const angle = angleDegrees * (Math.PI / 180);
  return {
    x: x * Math.cos(angle) - y * Math.sin(angle),
    y: x * Math.sin(angle) + y * Math.cos(angle),
  };
}


function checkOrientation() {
  const warning = document.getElementById("rotate-warning");
  if (isMobilePortrait()) {
    warning.style.display = "flex";
  } else {
    warning.style.display = "none";
  }
}


function generateOrbitPaths() {
  orbitMap.clear();
  document.querySelectorAll(".orbit-path").forEach(el => el.remove());

  works.forEach(({ orbit }) => {
    if (!orbitMap.has(orbit)) {
      const { xRadius, yRadius } = getResponsiveRadii(orbit);
      const rotation = orbitRotations[orbit] || 0;

      const path = document.createElement("div");
      path.className = "orbit-path";
      path.dataset.index = orbit;
      path.dataset.rotation = rotation;

      Object.assign(path.style, {
        width: `${xRadius * 2}px`,
        height: `${yRadius * 2}px`,
        left: "50%",
        top: "50%",
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`
      });

      orbitSystem.appendChild(path);
      orbitMap.set(orbit, { xRadius, yRadius, rotation });
    }
  });
}

function createPlanetsAndMenu() {
  works.forEach(({ title, image, orbit }, index) => {
    const li = document.createElement("li");
    li.textContent = title;
    li.addEventListener("click", () => showWorkWindow(index));
    li.addEventListener("mouseenter", () => previewWorkWindow(index, false));
    li.addEventListener("mouseleave", () => previewWorkWindow(index, true));
    menuList.appendChild(li);

    const container = document.createElement("div");
    container.className = "planet-container";
    container.dataset.index = index;
    container.style.zIndex = orbit;

    const planet = document.createElement("div");
    planet.className = "planet";
    planet.addEventListener("click", () => showWorkWindow(index));
    planet.addEventListener("mouseenter", () => previewWorkWindow(index, false));
    planet.addEventListener("mouseleave", () => previewWorkWindow(index, true));
    container.appendChild(planet);
    orbitSystem.appendChild(container);

    const windowEl = document.createElement("div");
    windowEl.className = "work-window hidden";
    windowEl.setAttribute("aria-hidden", "true");
    windowEl.innerHTML = `<img src="${image}" alt="${title || 'work image'}" /><p>${title}</p>`;
    windowEl.dataset.index = index;
    document.body.appendChild(windowEl);

    const { xRadius, yRadius } = orbitMap.get(orbit);
    planets.push({
      element: container,
      planet,
      window: windowEl,
      angle: Math.random() * 2 * Math.PI,
      orbit,
      xRadius,
      yRadius,
      speed: 0.001 + Math.PI * 0.0008,
    });
  });
}


function animate() {
  const centerX = orbitSystem.offsetWidth / 2;
  const centerY = orbitSystem.offsetHeight / 2;

  planets.forEach(p => {
    p.angle += p.speed;
    let x = Math.cos(p.angle) * p.xRadius;
    let y = Math.sin(p.angle) * p.yRadius;

    const orbitEl = document.querySelector(`.orbit-path[data-index="${p.orbit}"]`);
    const rotation = orbitEl ? parseFloat(orbitEl.dataset.rotation) || 0 : 0;
    const rotated = rotatePoint(x, y, rotation);

    p.element.style.left = `${centerX + rotated.x}px`;
    p.element.style.top = `${centerY + rotated.y}px`;

    if (!p.window.classList.contains("hidden")) {
      const rect = p.planet.getBoundingClientRect();
      
      if (isMobileDevice()) {
        p.window.style.left = `${rect.left + scrollX + 20}px`;
        p.window.style.top = `${rect.top + scrollY - 50}px`;
      } else {
        p.window.style.left = `${rect.left + scrollX + 20}px`;
        p.window.style.top = `${rect.top + scrollY - 150}px`;
      }
      
    }
    
  });

  requestAnimationFrame(animate);

}


function showWorkWindow(index) {
  const p = planets[index];
  if (!p || !p.window) return;

  const isOpen = openWorkWindows.includes(index);
  if (isOpen) {
    closeWorkWindow(index);
    showCloseUpsFor(null);
  } else {
    if (openWorkWindows.length >= 3) {
      const toClose = openWorkWindows.shift();
      closeWorkWindow(toClose);
    }
    openWorkWindows.push(index);
    toggleWorkWindow(index, false);
  }

  showWorkInfo(index);

const originalImageContainer = document.getElementById("original-image");
const originalLink = document.getElementById("originalLink");
const closeOriginalLink = document.getElementById("closeoriginallink");

if (originalImageContainer && !originalImageContainer.classList.contains("hidden")) {
  const currentWork = works[index];
  if (currentWork && currentWork.original) {
    originalImageContainer.innerHTML = `<img src="${currentWork.original}" alt="Original of ${currentWork.title}" />`;
    originalLink.style.display = "none";
    closeOriginalLink.style.display = "inline";
  }
}

}

function closeWorkWindow(index) {
  const i = openWorkWindows.indexOf(index);
  if (i !== -1) openWorkWindows.splice(i, 1);
  toggleWorkWindow(index, true);
  if (currentCloseUpPlanet === planets[index]) {
  showCloseUpsFor(null); 
}
}

function toggleWorkWindow(index, hide) {
  const p = planets[index];
  if (!p || !p.window) return;

  if (hide) {
    p.window.classList.add("hidden");
    p.window.setAttribute("aria-hidden", "true");
    p.window.style.display = "none";
  } else {
    p.window.classList.remove("hidden");
    p.window.setAttribute("aria-hidden", "false");
    p.window.style.display = "block";

    const img = p.window.querySelector("img");
if (img) {
  if (works[index].closeups.length > 0) {
    img.style.cursor = "pointer";

    if (img && !img.dataset.closeupBound) {
      if (works[index].closeups.length > 0) {
        img.style.cursor = "pointer"; 
        img.addEventListener("click", () => {
          showCloseUpsFor(index);
        });
      }
      img.dataset.closeupBound = "true";
    }
    
  } else {
    img.style.cursor = "default";
  }
}

  }
}

function previewWorkWindow(index, hide) {
  if (openWorkWindows.includes(index)) return;
  toggleWorkWindow(index, hide);
}

window.addEventListener("resize", () => {
  generateOrbitPaths();
  planets.forEach((p, index) => {
    const { xRadius, yRadius } = orbitMap.get(works[index].orbit);
    p.xRadius = xRadius;
    p.yRadius = yRadius;
  });
});

document.addEventListener("click", (e) => {
  const clickedInsideSomething = (
    e.target.closest(".planet-container") ||
    e.target.closest("#work-list") ||
    e.target.closest(".work-window")
  );

  if (!clickedInsideSomething) {
    openWorkWindows.forEach(index => toggleWorkWindow(index, true));
    openWorkWindows = [];
    showCloseUpsFor(null); 
  }


});

function updateLineGravityPosition() {
  const centerpiece = document.getElementById("centerpiece");
  const lineGravity = document.getElementById("LineGravity");
  const lineGravity2 = document.getElementById("LineGravity2");

  if (!centerpiece || !lineGravity || !lineGravity2) return;

  const centerRect = centerpiece.getBoundingClientRect();
  const gravityOffset = window.innerWidth * 0.02;

  const centerX = centerRect.left + centerRect.width / 2;
  const centerY = centerRect.top + centerRect.height / 2;

  lineGravity.style.left = `${centerX - lineGravity.offsetWidth / 2}px`;
  lineGravity.style.top = `${centerY - gravityOffset - lineGravity.offsetHeight}px`;

  lineGravity2.style.left = `${centerX - lineGravity2.offsetWidth / 2}px`;
  lineGravity2.style.top = `${centerY + gravityOffset}px`;
}

function updateConnectorLine() {
  const center = document.getElementById("centerpiece");
  const logo = document.getElementById("logo");
  const line = document.querySelector("#connector-line line");

  if (!center || !logo || !line) return;

  const centerRect = center.getBoundingClientRect();
  const logoRect = logo.getBoundingClientRect();

  const x1 = centerRect.left + centerRect.width / 2;
  const y1 = centerRect.top + centerRect.height / 2;
  const x2 = logoRect.left + logoRect.width / 3;
  const y2 = logoRect.top + logoRect.height / 2;

  line.setAttribute("x1", x1);
  line.setAttribute("y1", y1);
  line.setAttribute("x2", x2);
  line.setAttribute("y2", y2);
}

window.addEventListener("load", updateConnectorLine);
window.addEventListener("resize", updateConnectorLine);
setInterval(updateConnectorLine, 100); 


window.addEventListener("resize", () => {
  updateConnectorLine();
  updateLineGravityPosition();
});

(function trackLines() {
  updateConnectorLine();
  updateLineGravityPosition();
  requestAnimationFrame(trackLines);
})();

const closeUpWindows = document.querySelectorAll("#close-ups li");
const closeUpLines = [];

closeUpWindows.forEach((li, i) => {
  const svg = document.getElementById("connector-line");
  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("stroke", "rgb(4, 255, 0)");
  line.setAttribute("stroke-width", "2");
  svg.appendChild(line);
  closeUpLines.push(line);
});

let currentCloseUpIndex = null;

function showCloseUpsFor(index) {
  if (index === null || index === currentCloseUpIndex) {
  const infoBox = document.getElementById("work-info");
  if (!suppressWorkInfoClose && infoBox) infoBox.style.display = "none";
    suppressWorkInfoClose = false; 
    currentCloseUpPlanet = null;
    currentCloseUpIndex = null;
    closeUpWindows.forEach((win, i) => {
      win.querySelector("img").src = "";
      win.style.display = "none";
      closeUpLines[i].setAttribute("x1", 0);
      closeUpLines[i].setAttribute("y1", 0);
      closeUpLines[i].setAttribute("x2", 0);
      closeUpLines[i].setAttribute("y2", 0);
    });
    return;
  }

  const work = works[index];
  const planet = planets[index];
  if (!work || !planet) return;

  (work.closeups || []).forEach((imgPath, i) => {
    closeUpWindows[i].querySelector("img").src = imgPath;
    closeUpWindows[i].style.display = "block";
  });

  for (let i = (work.closeups?.length || 0); i < 3; i++) {
    closeUpWindows[i].querySelector("img").src = "";
    closeUpWindows[i].style.display = "none";
    closeUpLines[i].setAttribute("x1", 0);
    closeUpLines[i].setAttribute("y1", 0);
    closeUpLines[i].setAttribute("x2", 0);
    closeUpLines[i].setAttribute("y2", 0);
  }

  currentCloseUpPlanet = planet;
  currentCloseUpIndex = index;

  showWorkInfo(index);
}

function showWorkInfo(index) {
  const work = works[index];
  if (!work) return;

  document.getElementById("Title").textContent = work.title || "";
  document.getElementById("Size").textContent = work.size || "";
  document.getElementById("Material").textContent = work.material || "";
  document.getElementById("Year").textContent = work.year || "";
  document.getElementById("Exhibition").textContent = work.exhibition || "";

  const link = document.getElementById("originalLink");
  const closeLink = document.getElementById("closeoriginallink");
  if (work.original) {
    link.style.display = "inline";
    closeLink.style.display = "none";
  } else {
    link.style.display = "none";
    closeLink.style.display = "none";
  }  

  const workInfo = document.getElementById("work-info");
  if (workInfo) {
    workInfo.style.display = "block";
  }
}

function updateCloseUpLines() {
  if (!currentCloseUpPlanet) return;

  closeUpWindows.forEach((li, i) => {
    if (li.style.display === "none") return;

    const liRect = li.getBoundingClientRect();
    const planetRect = currentCloseUpPlanet.planet.getBoundingClientRect();

    const liX = liRect.left + liRect.width / 2;
    const liY = liRect.top;

    const planetX = planetRect.left + planetRect.width / 2;
    const planetY = planetRect.top + planetRect.height / 2;

    closeUpLines[i].setAttribute("x1", liX);
    closeUpLines[i].setAttribute("y1", liY);
    closeUpLines[i].setAttribute("x2", planetX);
    closeUpLines[i].setAttribute("y2", planetY);
  });
}


(function trackCloseUpLines() {
  updateCloseUpLines();
  requestAnimationFrame(trackCloseUpLines);
})();

document.addEventListener("DOMContentLoaded", () => {
  const moreInfoLink = document.querySelector('#Name a[id="clickinfo"]');
  const moreInfoBox = document.getElementById("moreinfo");

  if (moreInfoLink && moreInfoBox) {
    moreInfoBox.style.display = "none"; 

    moreInfoLink.addEventListener("click", (e) => {
      e.preventDefault();
      const isVisible = moreInfoBox.style.display === "block";
      moreInfoBox.style.display = isVisible ? "none" : "block";
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const originalLink = document.getElementById("originalLink");
  const closeOriginalLink = document.getElementById("closeoriginallink");
  const workInfo = document.getElementById("work-info");

  let originalImageContainer = document.getElementById("original-image");
  if (!originalImageContainer) {
    originalImageContainer = document.createElement("div");
    originalImageContainer.id = "original-image";
    originalImageContainer.classList.add("hidden");
    document.body.appendChild(originalImageContainer);
  }

  originalLink.addEventListener("click", (e) => {
    e.stopPropagation(); 
    e.preventDefault();
    suppressWorkInfoClose = true;
    const currentTitle = document.getElementById("Title").textContent;
    const work = works.find(w => w.title === currentTitle);
    if (work && work.original) {
      originalImageContainer.innerHTML = `<img src="${work.original}" alt="Original of ${work.title}" />`;
      originalImageContainer.classList.remove("hidden");
      originalLink.style.display = "none";
      closeOriginalLink.style.display = "inline";
    }
  });

  closeOriginalLink.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    originalImageContainer.innerHTML = "";
    originalImageContainer.classList.add("hidden");
    originalLink.style.display = "inline";
    closeOriginalLink.style.display = "none";
    suppressWorkInfoClose = false;
  });
  
originalImageContainer.addEventListener("click", (e) => {
  e.stopPropagation(); 
  const clickedInsideImage = e.target.tagName.toLowerCase() === "img";
  if (!clickedInsideImage) {
    originalImageContainer.innerHTML = "";
    originalImageContainer.classList.add("hidden");
    originalLink.style.display = "inline";
    closeOriginalLink.style.display = "none";
    suppressWorkInfoClose = false; 
  }
});


});


window.addEventListener("load", () => {
  generateOrbitPaths();
  createPlanetsAndMenu();
  requestAnimationFrame(animate);
});

