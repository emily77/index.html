const companies = [
  {
    name: "mParticle / Rokt mParticle",
    category: "cdp",
    tags: ["Real-time CDP", "資料管線", "Rokt 合併"],
    role: "底層客戶資料與事件啟用平台",
    potential: 82,
    funding: "2025 年與 Rokt 合併；Rokt 宣布投入約 3 億美元強化 real-time relevance 與 CDP roadmap。",
    strength: "事件收集、身份整合、即時啟用、企業級整合能力強。",
    weakness: "偏技術型資料平台，距離完整 AI 決策、審批與營運治理仍有距離。",
    ourMove: "將 mParticle 作為資料來源，提供 AI 任務決策層與 agent 執行治理。",
    source: "https://www.rokt.com/blog/redefining-real-time-relevance-with-mparticle-merger"
  },
  {
    name: "Treasure Data / Treasure AI",
    category: "cdp",
    tags: ["Enterprise CDP", "AI-native", "SoftBank"],
    role: "大型企業 CDP 與 agentic CX 平台",
    potential: 88,
    funding: "2021 年獲 SoftBank 領投 2.34 億美元，近年轉向 AI 與 agentic customer experience。",
    strength: "企業資料整合、身份解析、全球客戶與資本背景強。",
    weakness: "導入重、銷售週期長，對中型企業或新型 AI workflow 場景可能不夠輕。",
    ourMove: "用更快落地的 AI 部門範本切入，避開大型 CDP 建置成本。",
    source: "https://www.lxahub.com/stories/customer-data-platform-treasure-data-raises-234-million"
  },
  {
    name: "BlueConic",
    category: "cdp",
    tags: ["First-party data", "B2C CDP", "Vista"],
    role: "行銷人員友善的第一方資料 CDP",
    potential: 74,
    funding: "2022 年獲 Vista Equity Partners 戰略成長投資，用於擴展第一方資料與 customer growth engine。",
    strength: "比純技術 CDP 更靠近行銷團隊，擅長即時 profile、分群與個人化。",
    weakness: "仍主要服務行銷資料與互動，未覆蓋公司級 AI agent 權限和工作流程。",
    ourMove: "整合其 profile 與 segment，提供跨部門 AI 行動與審批。",
    source: "https://www.vistaequitypartners.com/news/blueconic-announces-strategic-growth-investment-from-vista-equity-partners/"
  },
  {
    name: "Insider One",
    category: "engagement",
    tags: ["Customer engagement", "Omnichannel", "Series E"],
    role: "AI-powered omnichannel customer engagement platform",
    potential: 92,
    funding: "2024 年獲 General Atlantic 領投 5 億美元 Series E，用於 AI 投資、美國擴張與全球營運。",
    strength: "最接近現代 AI 客戶互動平台，客戶規模與資本實力強。",
    weakness: "核心仍在 marketing/customer engagement，不是整個企業的 AI 營運治理系統。",
    ourMove: "避免正面競爭 campaign orchestration，定位成跨部門 AI OS 與治理層。",
    source: "https://www.generalatlantic.com/media-article/insider-announces-500m-series-e-led-by-general-atlantic-to-accelerate-ai-investments-fuel-u-s-expansion-and-continue-to-scale-global-operations/"
  },
  {
    name: "Bombora",
    category: "data",
    tags: ["B2B intent data", "ABM", "Data co-op"],
    role: "B2B 意圖資料與帳戶研究訊號供應商",
    potential: 79,
    funding: "公開重點較偏資料合作網路與產品化 intent data，並非大型 CDP 融資敘事。",
    strength: "能回答哪些公司正在研究某主題，對 ABM、銷售與行銷非常有價值。",
    weakness: "提供訊號，但不負責後續 AI 任務、審批、溝通與成效回溯。",
    ourMove: "把 intent signal 變成 AI sales agent 的任務入口與優先順序引擎。",
    source: "https://bombora.com/intent/"
  },
  {
    name: "Dotomi / Conversant / Epsilon",
    category: "data",
    tags: ["AdTech", "Retargeting", "Epsilon"],
    role: "個人化廣告與再行銷技術資產",
    potential: 58,
    funding: "Dotomi 相關資產後續進入 Conversant/Epsilon 生態，2014 年 Conversant 被 Alliance Data 以約 23 億美元收購。",
    strength: "廣告識別、再行銷與媒體投放歷史資產深。",
    weakness: "不是現代 AI/CDP 核心平台，較像廣告技術遺產與資料資產。",
    ourMove: "作為廣告資料與媒體觸達整合對象，不列為主戰場。",
    source: "https://www.sec.gov/Archives/edgar/data/1101215/000110121514000226/form_425.htm"
  },
  {
    name: "fastXDM",
    category: "tooling",
    tags: ["Tag wrapper", "Cross-domain", "Archived"],
    role: "跨網域訊息傳遞與標籤封裝相關技術元件",
    potential: 35,
    funding: "未看到作為 SaaS 公司發展與融資的明確脈絡；GitHub repository 已封存。",
    strength: "因技術部署或偵測方式可能在市占率工具中被算入，導致排名看似高。",
    weakness: "不是客戶參與平台，也不是現代 CDP 競品。",
    ourMove: "只作為 tracking/tagging 技術參考，不納入策略核心競爭者。",
    source: "https://github.com/VKCOM/fastXDM"
  }
];

const categoryNames = {
  cdp: "CDP",
  engagement: "互動平台",
  data: "資料/廣告",
  tooling: "技術元件"
};

const grid = document.querySelector("#companyGrid");
const filterButtons = document.querySelectorAll("[data-filter]");

function badgeClass(index) {
  return index % 3 === 0 ? "" : index % 3 === 1 ? "blue" : "gold";
}

function renderCompanies(filter = "all") {
  const visible = filter === "all" ? companies : companies.filter(company => company.category === filter);

  grid.innerHTML = visible.map(company => `
    <article class="company-card">
      <div class="company-top">
        <div>
          <h3>${company.name}</h3>
          <div class="tag-list">
            <span class="tag">${categoryNames[company.category]}</span>
            ${company.tags.map((tag, index) => `<span class="tag ${badgeClass(index + 1)}">${tag}</span>`).join("")}
          </div>
        </div>
        <div class="potential-badge" aria-label="${company.name} 發展潛力 ${company.potential} 分">
          <span>${company.potential}</span>
          潛力
        </div>
      </div>

      <div class="company-meta">
        <div>
          <span>軟體性質</span>
          <strong>${company.role}</strong>
        </div>
        <div>
          <span>融資/動向</span>
          <strong>${company.funding}</strong>
        </div>
        <div>
          <span>我們的切入點</span>
          <strong>${company.ourMove}</strong>
        </div>
      </div>

      <p><strong>優勢：</strong>${company.strength}</p>
      <p><strong>弱點：</strong>${company.weakness}</p>

      <div class="card-actions">
        <a class="source-link" href="${company.source}" target="_blank" rel="noreferrer">查看來源</a>
      </div>
    </article>
  `).join("");
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    renderCompanies(button.dataset.filter);
  });
});

renderCompanies();
