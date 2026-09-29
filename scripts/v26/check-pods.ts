import { YT_EPISODES } from "../../src/lib/podcast-episodes"
console.log("episodes:", YT_EPISODES.length)
console.log("all bilingual:", YT_EPISODES.every((e) => e.titleEn && e.titleAr))
const hit = (q: string) => YT_EPISODES.filter((e) => `${e.titleEn} ${e.titleAr} ${e.channel} ${e.blurbEn} ${e.blurbAr}`.toLowerCase().includes(q.toLowerCase()))
console.log("'qawain' finds:", hit("qawain").length, "| 'قوائم' finds:", hit("قوائم").length, "| 'leases' finds:", hit("leases").length, "| 'KPMG' finds:", hit("kpmg").length)
console.log("sample Qawaim EN title:", YT_EPISODES.find((e) => e.id === "JEwSK7CVHBg")?.titleEn)
