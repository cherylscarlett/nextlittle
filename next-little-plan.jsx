import { useState } from "react";

const screens = [
  {
    id: "onboarding",
    label: "01 — Onboarding",
    icon: "🌱",
    tagline: "Welcome to Next Little",
    description: "Parents register with their baby's birth month & year, item style preferences, and what categories they're interested in. This powers the auto-match engine from day one.",
    badge: null,
    features: [
      { name: "Baby profile setup", detail: "Name, birth month/year, current size (can differ from age)" },
      { name: "Item style preference", detail: "Girls' styles, Boys' styles, Gender neutral, or All — no assumptions made" },
      { name: "What are you interested in?", detail: "Multi-select: Clothing, Gear, Toys, Books, Feeding, Sleep, Bath — drives auto-match" },
      { name: "Transfer preference", detail: "Local pickup, ship/mail, or open to both" },
      { name: "Privacy settings", detail: "Full address only shared at confirmed hand-off, never visible in-app" },
    ],
    wireframe: [
      { type: "logo", label: "👶 Next Little" },
      { type: "heading", label: "Tell us about your little one" },
      { type: "field", label: "Baby's first name" },
      { type: "row", items: ["Birth month", "Birth year"] },
      { type: "row", items: ["Current size", "e.g. 12M"] },
      { type: "divider", label: "Item Style Preference" },
      { type: "chips", items: ["Girls' styles", "Boys' styles", "Gender neutral", "All ✓"] },
      { type: "divider", label: "What are you interested in?" },
      { type: "chips", items: ["👗 Clothing", "🪑 Gear", "🧸 Toys", "📚 Books", "🍼 Feeding", "😴 Sleep"] },
      { type: "field", label: "Your city or zip code" },
      { type: "toggle", label: "Pickup   /   Ship   /   Both" },
      { type: "cta", label: "Join Next Little →" },
    ]
  },
  {
    id: "safety",
    label: "02 — Safety & Trust",
    icon: "🔒",
    tagline: "A Safe Little Community",
    description: "Safety is the foundation of Next Little. Every parent is verified before interacting with others, items must meet cleanliness standards before passing on, and privacy is protected at every step.",
    badge: "Updated ✦",
    features: [
      { name: "Phone & email verification", detail: "Required at signup — baseline for all accounts" },
      { name: "ID verification", detail: "Photo ID matched against selfie via Stripe Identity. Flags fake or duplicate accounts" },
      { name: "Vouching system", detail: "Join via a friend's invite link and inherit their trust tier. Strangers in open groups start at a lower tier" },
      { name: "Item condition pledge", detail: "Before every hand-off, the sender must confirm: items are freshly washed, clean, and free of damage. A checklist is shown before posting goes live" },
      { name: "Condition rating by receiver", detail: "After receiving, the recipient rates item condition. Repeated poor ratings flag the sender's account for review" },
      { name: "Address privacy gate", detail: "Full address released as a one-time reveal only after both parties confirm a hand-off — never visible in the app otherwise" },
      { name: "Community flagging", detail: "Any member can report a user. Three flags triggers an automatic review hold" },
      { name: "18+ only", detail: "All accounts must belong to a verified adult. Baby profiles are created by the parent, never independently" },
      { name: "Group moderation", detail: "Group creators can approve or deny join requests even in public groups" },
    ],
    wireframe: [
      { type: "heading", label: "Before you post — a quick pledge" },
      { type: "info", label: "💛 Next Little families count on each other. Every item should arrive like new." },
      { type: "checklist", items: [
        { label: "Items are freshly washed or cleaned", checked: true },
        { label: "No stains, tears, or damage", checked: true },
        { label: "All parts/pieces included", checked: false },
        { label: "Free of smoke or strong odors", checked: false },
      ]},
      { type: "card", label: "⭐ Item ratings", sub: "Recipients rate condition after receiving. 3 poor ratings = account review." },
      { type: "card", label: "🛡️ ID verified community", sub: "All Next Little parents are identity-checked before joining." },
      { type: "cta", label: "I confirm — Post My Item →" },
    ]
  },
  {
    id: "groups",
    label: "03 — Groups",
    icon: "🏘️",
    tagline: "Your Circle",
    description: "Parents can join open community groups or create private groups with friends. Groups are organized by overlapping age ranges so the hand-off chain always flows in order.",
    badge: null,
    features: [
      { name: "Create a group", detail: "Name it, set it public or invite-only, assign a moderator" },
      { name: "Join by invite link", detail: "Share a link with friends to build a private next little circle" },
      { name: "Browse open groups", detail: "Filter by proximity or age range overlap" },
      { name: "Baby timeline view", detail: "See all kids in the group ranked by size, oldest → youngest" },
      { name: "Trust tier visible", detail: "Members can see each other's verification badge before connecting" },
    ],
    wireframe: [
      { type: "heading", label: "Your Groups" },
      { type: "card", label: "🏡 Westside Mamas  •  6 families", sub: "Sizes: 9M – 24M  •  🛡️ All verified" },
      { type: "card", label: "👶 Park Slope Circle  •  4 families", sub: "Sizes: 3M – 12M  •  🛡️ All verified" },
      { type: "divider", label: "Discover Groups Near You" },
      { type: "card", label: "🌻 Brooklyn Baby Co-op  •  12 families", sub: "Sizes: NB – 2T  •  🛡️ All verified" },
      { type: "cta", label: "+ Create a New Group" },
    ]
  },
  {
    id: "timeline",
    label: "04 — Size Chain",
    icon: "📅",
    tagline: "The Chain",
    description: "The chain is driven by effective size, not just age. Babies wearing ahead or behind their age are reslotted accordingly. A gentle nudge every 4–6 weeks keeps the chain accurate.",
    badge: null,
    features: [
      { name: "Size-first sorting", detail: "Chain orders by current size worn, with age as a tiebreaker" },
      { name: "Size override", detail: "Parent sets actual size worn (e.g. '6mo baby in 12M clothes') — app reslots immediately" },
      { name: "Fit tag on profile", detail: "Shows 'wearing ahead of age' or 'petite, wearing behind age' so the chain makes sense to everyone" },
      { name: "Nudge reminders", detail: "Every 4–6 weeks: 'Is [baby] still in 12M? Tap to update' — keeps chain fresh" },
      { name: "Your position highlighted", detail: "See who sends to you and who receives from you at a glance" },
    ],
    wireframe: [
      { type: "heading", label: "Westside Mamas — Size Chain" },
      { type: "info", label: "🔁 Chain sorted by current size worn, not age" },
      { type: "timeline", items: [
        { name: "Zoe B.", age: "18mo", size: "24M", you: false, status: "Ahead of you", tag: "" },
        { name: "Lucas M.", age: "14mo", size: "18M", you: false, status: "Sends to you", tag: "" },
        { name: "Your baby", age: "6mo", size: "12M", you: true, status: "← You", tag: "wearing ahead of age" },
        { name: "Nia T.", age: "5mo", size: "9M", you: false, status: "Receives from you", tag: "" },
        { name: "Oliver P.", age: "2mo", size: "3M", you: false, status: "Next in line", tag: "" },
      ]},
      { type: "nudge", label: "📏 Is your baby still in 12M? Tap to update" },
    ]
  },
  {
    id: "listings",
    label: "05 — Item Listings",
    icon: "📦",
    tagline: "Pass It On",
    description: "When a parent posts an item, the app cross-references the size chain AND each family's interest preferences to find the best match. Items must pass a condition checklist before going live.",
    badge: null,
    features: [
      { name: "Post an item", detail: "Category, size/age range, condition, photo" },
      { name: "Condition checklist gate", detail: "Seller confirms items are washed, undamaged, and complete before the post goes live" },
      { name: "Smart recipient suggestion", detail: "Matches next baby in chain who (1) fits the size and (2) has that category in their interests" },
      { name: "Auto-match engine", detail: "If next family didn't select 'Clothing' in their interests, app skips to the next matched family" },
      { name: "Accept or skip", detail: "Recipient can accept or pass to the next matched family" },
      { name: "Transfer method", detail: "Pickup or ship — both parties confirm before address is revealed" },
    ],
    wireframe: [
      { type: "heading", label: "Post an Item" },
      { type: "field", label: "Category: 👗 Clothing  /  🪑 Gear  /  🧸 Toys" },
      { type: "row", items: ["Size / Age range", "Condition"] },
      { type: "photo", label: "📷 Add Photos" },
      { type: "checklist", items: [
        { label: "Freshly washed & clean", checked: true },
        { label: "No stains or damage", checked: true },
        { label: "All parts included", checked: true },
        { label: "Odor free", checked: false },
      ]},
      { type: "info", label: "✨ Best match: Nia T. (5mo, 9M) — size & interest match!" },
      { type: "toggle", label: "Pickup   /   Ship" },
      { type: "cta", label: "Offer to Next Little →" },
    ]
  },
  {
    id: "handoff",
    label: "06 — Hand-off Flow",
    icon: "🤝",
    tagline: "The Pass",
    description: "Once a recipient accepts, both families coordinate inside the app. Address is only revealed at the moment of mutual confirmation — never before.",
    badge: null,
    features: [
      { name: "In-app messaging", detail: "Private coordination between sender and receiver only" },
      { name: "Address reveal on confirm", detail: "One-time address reveal only after both sides tap confirm" },
      { name: "Shipping label generation", detail: "(Future) Auto-generate prepaid label for mail hand-offs" },
      { name: "Confirm receipt + rate condition", detail: "Receiving parent marks 'received' and rates item condition to close the loop" },
    ],
    wireframe: [
      { type: "heading", label: "Hand-off in Progress" },
      { type: "card", label: "📦 3x Onesies (12M) → Nia T.", sub: "Awaiting pickup confirmation" },
      { type: "message", label: "Nia: \"Saturday morning works!\"" },
      { type: "message", label: "You: \"Perfect, see you then 👶\"" },
      { type: "field", label: "Reply..." },
      { type: "divider", label: "After hand-off" },
      { type: "checklist", items: [
        { label: "Mark as handed off", checked: false },
        { label: "Receiver rates item condition ⭐⭐⭐⭐⭐", checked: false },
      ]},
      { type: "cta", label: "Mark as Handed Off ✓" },
    ]
  },
  {
    id: "history",
    label: "07 — Impact & History",
    icon: "💚",
    tagline: "Your Next Little Story",
    description: "A feel-good log of everything passed and received — with a running tally of money saved and waste prevented. The community layer that keeps families coming back.",
    badge: null,
    features: [
      { name: "Passed on log", detail: "Everything you've given, with photos and recipient" },
      { name: "Received log", detail: "Everything your baby has benefited from" },
      { name: "Impact metric", detail: "Estimated $ saved, items kept out of landfill" },
      { name: "Thank you notes", detail: "Families can send a quick note or emoji reaction after receiving" },
      { name: "Condition score", detail: "Your running avg item condition rating — visible to group members as a trust signal" },
    ],
    wireframe: [
      { type: "heading", label: "Your Next Little Story" },
      { type: "stat", items: ["12 passed on", "8 received", "$340 saved"] },
      { type: "card", label: "⭐ Your condition score: 4.9 / 5", sub: "Based on 11 hand-offs — top rated in your group!" },
      { type: "card", label: "👶 3x Onesies (12M) → Nia T.", sub: "\"Thank you so much! 💛\" — Nia's mom  •  ⭐⭐⭐⭐⭐" },
      { type: "card", label: "👶 Bouncer seat → Oliver P.", sub: "Handed off March 2026  •  ⭐⭐⭐⭐⭐" },
      { type: "info", label: "🌍 You've kept 20 items out of landfill!" },
    ]
  },
];

const WireframeEl = ({ el }) => {
  switch (el.type) {
    case "logo": return (
      <div className="text-center mb-2">
        <div style={{fontSize:26, marginBottom:2}}>{el.label.split(" ")[0]}</div>
        <div style={{fontSize:18, fontWeight:"bold", color:"#1a1a2e", letterSpacing:"-0.02em"}}>{el.label.split(" ").slice(1).join(" ")}</div>
      </div>
    );
    case "heading": return <div className="font-bold text-base mb-2" style={{color:"#1a1a2e"}}>{el.label}</div>;
    case "field": return <div className="w-full rounded-lg px-3 py-2 mb-2 text-sm" style={{background:"#f0edf8",color:"#6b6b8c",border:"1px solid #d8d4ec"}}>{el.label}</div>;
    case "row": return <div className="flex gap-2 mb-2">{el.items.map((item, i) => <div key={i} className="flex-1 rounded-lg px-3 py-2 text-sm" style={{background:"#f0edf8",color:"#6b6b8c",border:"1px solid #d8d4ec"}}>{item}</div>)}</div>;
    case "toggle": return <div className="rounded-full px-4 py-2 text-center text-sm mb-2" style={{background:"#e8e4f5",color:"#5a5a7a",border:"1px solid #ccc8e8"}}>{el.label}</div>;
    case "cta": return <div className="rounded-xl px-4 py-2.5 text-center text-sm font-semibold mb-1" style={{background:"#5b4fcf",color:"#fff"}}>{el.label}</div>;
    case "card": return <div className="rounded-xl px-3 py-2.5 mb-2" style={{background:"#f8f6ff",border:"1px solid #e0daf0"}}><div className="font-medium text-sm" style={{color:"#1a1a2e"}}>{el.label}</div>{el.sub && <div className="text-xs mt-0.5" style={{color:"#8a8aaa"}}>{el.sub}</div>}</div>;
    case "divider": return <div className="text-xs font-semibold uppercase tracking-widest my-2" style={{color:"#a0a0c0"}}>{el.label}</div>;
    case "photo": return <div className="rounded-xl flex items-center justify-center mb-2" style={{background:"#ece8f8",border:"2px dashed #c8c0e8",height:52,color:"#a0a0c0",fontSize:13}}>{el.label}</div>;
    case "info": return <div className="rounded-lg px-3 py-2 mb-2 text-sm" style={{background:"#f0edf8",color:"#5b4fcf",border:"1px solid #c8c0e8"}}>{el.label}</div>;
    case "nudge": return <div className="rounded-lg px-3 py-2 mb-2 text-sm" style={{background:"#fff9e6",color:"#b07d20",border:"1px solid #f0d990"}}>{el.label}</div>;
    case "stat": return <div className="flex gap-2 mb-2">{el.items.map((s, i) => <div key={i} className="flex-1 rounded-xl p-2 text-center" style={{background:"#f0edf8",color:"#5b4fcf",fontSize:11,fontWeight:600}}>{s}</div>)}</div>;
    case "chips": return <div className="flex flex-wrap gap-1.5 mb-2">{el.items.map((c, i) => <div key={i} className="rounded-full px-2.5 py-1 text-xs" style={{background: c.includes("✓") ? "#5b4fcf" : "#ece8f8", color: c.includes("✓") ? "#fff" : "#5a5a7a", border: c.includes("✓") ? "none" : "1px solid #d8d4ec"}}>{c}</div>)}</div>;
    case "checklist": return (
      <div className="mb-2 rounded-xl overflow-hidden" style={{border:"1px solid #e0daf0"}}>
        {el.items.map((item, i) => (
          <div key={i} className="flex items-center gap-2.5 px-3 py-2" style={{background: item.checked ? "#f5f3ff" : "#fff", borderBottom: i < el.items.length - 1 ? "1px solid #f0edf8" : "none"}}>
            <div style={{width:18, height:18, borderRadius:5, background: item.checked ? "#5b4fcf" : "#ece8f8", border: item.checked ? "none" : "1.5px solid #c8c0e8", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0}}>
              {item.checked && <span style={{color:"#fff", fontSize:11}}>✓</span>}
            </div>
            <span className="text-sm" style={{color: item.checked ? "#1a1a2e" : "#8a8aaa"}}>{item.label}</span>
          </div>
        ))}
      </div>
    );
    case "step": return <div className="mb-2">{el.items.map((s, i) => <div key={i} className="text-sm py-1.5 border-b last:border-0" style={{color: s.startsWith("✅") ? "#3d7a50" : "#b07d20", borderColor:"#ece8f8"}}>{s}</div>)}</div>;
    case "message": return <div className="rounded-2xl px-3 py-2 mb-1 text-sm max-w-xs" style={{background: el.label.startsWith("You") ? "#5b4fcf" : "#ece8f8", color: el.label.startsWith("You") ? "#fff" : "#4a4a6a", marginLeft: el.label.startsWith("You") ? "auto" : 0}}>{el.label.replace(/^You: |^Nia: /, "")}</div>;
    case "timeline": return (
      <div className="mb-2">
        {el.items.map((item, i) => (
          <div key={i} className="flex items-center gap-2 mb-1.5">
            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{background: item.you ? "#5b4fcf" : "#c8c0e8"}}/>
            <div className="flex-1 rounded-lg px-2.5 py-1.5" style={{background: item.you ? "#f0edf8" : "#f8f6ff", border: item.you ? "1.5px solid #5b4fcf" : "1px solid #e0daf0"}}>
              <div className="flex justify-between items-center">
                <span className="text-sm" style={{fontWeight: item.you ? 700 : 400, color:"#1a1a2e"}}>{item.name}</span>
                <span className="text-xs" style={{color:"#8a8aaa"}}>{item.size}</span>
              </div>
              {item.tag && <div className="text-xs mt-0.5" style={{color:"#5b4fcf"}}>📏 {item.tag}</div>}
            </div>
            <div className="text-xs w-20 text-right" style={{color: item.you ? "#5b4fcf" : "#a0a0c0", fontWeight: item.you ? 600 : 400}}>{item.status}</div>
          </div>
        ))}
      </div>
    );
    default: return null;
  }
};

const badges = {
  "New ✦": { bg:"#f0edf8", color:"#5b4fcf", border:"#c8c0e8" },
  "Updated ✦": { bg:"#f0f7ff", color:"#2f6fe8", border:"#b4cff5" }
};

export default function App() {
  const [active, setActive] = useState(0);
  const screen = screens[active];

  return (
    <div style={{minHeight:"100vh", background:"#f5f3fc", fontFamily:"'Georgia','Times New Roman',serif", display:"flex", flexDirection:"column"}}>

      {/* Header */}
      <div style={{background:"#1a1a2e", padding:"20px 28px 16px"}}>
        <div style={{color:"#9090c0", fontSize:12, letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:4}}>App Concept</div>
        <div style={{display:"flex", alignItems:"center", gap:12}}>
          <div style={{color:"#fff", fontSize:26, fontWeight:"bold", letterSpacing:"-0.02em"}}>👶 Next Little</div>
          <div style={{background:"#5b4fcf", color:"#fff", fontSize:11, fontWeight:700, borderRadius:20, padding:"3px 10px", letterSpacing:"0.05em"}}>v3</div>
        </div>
        <div style={{color:"#9090c0", fontSize:13, marginTop:4}}>Feature Overview & Screen Plan</div>
      </div>

      {/* Nav */}
      <div style={{display:"flex", overflowX:"auto", background:"#12122a", padding:"0 16px", gap:4}}>
        {screens.map((s, i) => (
          <button key={s.id} onClick={() => setActive(i)} style={{
            padding:"10px 14px", fontSize:12,
            fontWeight: active === i ? 700 : 400,
            color: active === i ? "#fff" : "#7070aa",
            borderBottom: active === i ? "2px solid #5b4fcf" : "2px solid transparent",
            background:"none", border:"none", borderBottom: active === i ? "2px solid #5b4fcf" : "2px solid transparent",
            cursor:"pointer", whiteSpace:"nowrap", fontFamily:"inherit",
          }}>{s.icon} {s.label}</button>
        ))}
      </div>

      {/* Content */}
      <div style={{flex:1, display:"flex", flexDirection:"column", maxWidth:900, width:"100%", margin:"0 auto", padding:"24px 20px", gap:20}}>

        {/* Title */}
        <div>
          <div style={{display:"flex", alignItems:"center", gap:10, marginBottom:6}}>
            <div style={{fontSize:11, color:"#8a8aaa", letterSpacing:"0.1em", textTransform:"uppercase"}}>{screen.icon} Screen {active + 1} of {screens.length}</div>
            {screen.badge && (() => { const b = badges[screen.badge]; return <div style={{fontSize:11, fontWeight:700, borderRadius:20, padding:"2px 10px", background:b.bg, color:b.color, border:`1px solid ${b.border}`}}>{screen.badge}</div>; })()}
          </div>
          <div style={{fontSize:24, fontWeight:"bold", color:"#1a1a2e", marginBottom:4}}>{screen.label.replace(/^\d+ — /, "")}</div>
          <div style={{fontSize:14, color:"#5b4fcf", fontStyle:"italic", marginBottom:8}}>{screen.tagline}</div>
          <div style={{fontSize:14, color:"#4a4a6a", lineHeight:1.7}}>{screen.description}</div>
        </div>

        {/* Two column */}
        <div style={{display:"flex", gap:20, flexWrap:"wrap"}}>

          {/* Features */}
          <div style={{flex:"1 1 280px", background:"#fff", borderRadius:16, padding:20, border:"1px solid #e0daf0"}}>
            <div style={{fontSize:11, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:"#8a8aaa", marginBottom:14}}>Key Features</div>
            {screen.features.map((f, i) => (
              <div key={i} style={{marginBottom:14, paddingBottom:14, borderBottom: i < screen.features.length - 1 ? "1px solid #f5f3fc" : "none"}}>
                <div style={{fontWeight:600, color:"#1a1a2e", fontSize:14, marginBottom:3}}>✦ {f.name}</div>
                <div style={{color:"#7a7a9a", fontSize:13, lineHeight:1.5}}>{f.detail}</div>
              </div>
            ))}
          </div>

          {/* Wireframe */}
          <div style={{flex:"1 1 260px"}}>
            <div style={{fontSize:11, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:"#8a8aaa", marginBottom:14}}>Screen Wireframe</div>
            <div style={{background:"#fff", borderRadius:20, padding:18, border:"1px solid #e0daf0", boxShadow:"0 4px 24px rgba(91,79,207,0.08)", maxWidth:320}}>
              <div style={{width:60, height:5, background:"#e0daf0", borderRadius:10, margin:"0 auto 16px"}}/>
              {screen.wireframe.map((el, i) => <WireframeEl key={i} el={el} />)}
            </div>
          </div>
        </div>

        {/* Nav buttons */}
        <div style={{display:"flex", justifyContent:"space-between", marginTop:4}}>
          <button onClick={() => setActive(Math.max(0, active - 1))} style={{padding:"10px 20px", borderRadius:10, background: active === 0 ? "#ece8f8" : "#1a1a2e", color: active === 0 ? "#a0a0c0" : "#fff", border:"none", cursor: active === 0 ? "default" : "pointer", fontSize:14, fontFamily:"inherit", fontWeight:600}}>← Previous</button>
          <div style={{fontSize:13, color:"#8a8aaa", alignSelf:"center"}}>{active + 1} / {screens.length}</div>
          <button onClick={() => setActive(Math.min(screens.length - 1, active + 1))} style={{padding:"10px 20px", borderRadius:10, background: active === screens.length - 1 ? "#ece8f8" : "#5b4fcf", color: active === screens.length - 1 ? "#a0a0c0" : "#fff", border:"none", cursor: active === screens.length - 1 ? "default" : "pointer", fontSize:14, fontFamily:"inherit", fontWeight:600}}>Next →</button>
        </div>
      </div>
    </div>
  );
}
