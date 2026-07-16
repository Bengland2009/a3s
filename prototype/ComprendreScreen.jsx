function ComprendreScreen({onNavigate,onOpenQuestion}){
const {Card,Input,Header,InlineNote}=window.AuxTroisSentiersDesignSystem_1197ae;
const cats=[
{title:"Ce que j'observe",icon:"eye",tint:"sauge",desc:"Comprendre les signes que vous remarquez."},
{title:"Les changements du corps",icon:"activity",tint:"prune",desc:"Découvrir ce qui peut se produire."},
{title:"Être présent",icon:"hand-heart",tint:"corail",desc:"Trouver des façons simples d'accompagner."},
{title:"Communiquer",icon:"message-circle",tint:"beige",desc:"Savoir quoi dire et comment rester en lien."},
{title:"Prendre soin de soi",icon:"heart",tint:"sauge",desc:"Se préserver pendant cette période."},
{title:"Les derniers moments",icon:"feather",tint:"prune",desc:"Comprendre et accompagner cette étape."}
];
return (<window.ScreenScroll>
<Header logo={false} title="" onProfileClick={()=>onNavigate("profil")} />
<div style={{padding:"0 20px 100px",marginTop:-20,display:"flex",flexDirection:"column",gap:20}}>
<div>
<h1 style={{fontFamily:"var(--font-display)",fontSize:28,margin:"0 0 6px",color:"var(--text-primary)"}}>Comprendre</h1>
<p style={{margin:0,fontFamily:"var(--font-body)",fontSize:15,color:"var(--text-secondary)"}}>Des réponses simples sur la fin de vie.</p>
</div>
<div style={{position:"relative"}}>
<i data-lucide="search" style={{position:"absolute",left:16,top:"50%",transform:"translateY(-50%)",width:18,height:18,color:"var(--text-secondary)",pointerEvents:"none"}}></i>
<input type="search" placeholder="Rechercher une question ou un sujet" style={{fontFamily:"var(--font-body)",fontSize:"var(--text-body-size)",color:"var(--text-primary)",background:"var(--color-white)",border:"1px solid var(--border-soft)",borderRadius:"var(--radius-field)",padding:"14px 16px 14px 44px",minHeight:"var(--tap-min)",outline:"none",width:"100%",boxSizing:"border-box"}} onFocus={e=>e.currentTarget.style.borderColor="var(--focus-ring)"} onBlur={e=>e.currentTarget.style.borderColor="var(--border-soft)"}/>
</div>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
{cats.map(c=>(<Card key={c.title} tint={c.tint} onClick={()=>{}} style={{display:"flex",flexDirection:"column",gap:8,minHeight:118,cursor:"pointer"}}>
<span style={{display:"flex",alignItems:"center",justifyContent:"center",width:36,height:36,borderRadius:"50%",background:"var(--color-white)"}}><i data-lucide={c.icon} style={{width:17,height:17,color:"var(--color-prune)"}}></i></span>
<h5 style={{margin:0,fontSize:14,fontWeight:600,color:"var(--text-primary)"}}>{c.title}</h5>
<p style={{margin:0,fontSize:12,lineHeight:"16px",color:"var(--text-secondary)"}}>{c.desc}</p>
</Card>))}
</div>
<div>
<h2 style={{fontFamily:"var(--font-display)",fontSize:20,margin:"0 0 12px",color:"var(--text-primary)"}}>Questions fréquentes</h2>
<div style={{display:"flex",flexDirection:"column",gap:10}}>
{["Peut-il encore m'entendre?","Pourquoi sa respiration change-t-elle?","Comment puis-je l'accompagner maintenant?"].map(q=>(
<Card key={q} tint="white" onClick={()=>onOpenQuestion(q)} style={{display:"flex",alignItems:"center",justifyContent:"space-between",minHeight:44,padding:"16px 18px"}}>
<span style={{fontSize:15,color:"var(--text-primary)"}}>{q}</span>
<i data-lucide="chevron-right" style={{width:18,height:18,color:"var(--color-prune)"}}></i>
</Card>
))}
</div>
</div>
<InlineNote>L'information générale offerte ici ne remplace pas les indications de l'équipe de soins.</InlineNote>
</div>
</window.ScreenScroll>);
}
window.ComprendreScreen=ComprendreScreen;
