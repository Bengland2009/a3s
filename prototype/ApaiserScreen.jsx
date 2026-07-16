function ApaiserScreen({onNavigate,onOpenAudio}){
const {Card,Tag,Header}=window.AuxTroisSentiersDesignSystem_1197ae;
const [duration,setDuration]=React.useState("Tous");
const durations=["Tous","2 à 5 min","10 min","Écoute libre"];
const icons={Respiration:"wind",Ambiance:"cloud",Musique:"music",Balado:"headphones",Méditation:"flower-2"};
const contents=[
{title:"Respirer doucement",desc:"Exercice guidé de respiration.",dur:"2 min",kind:"Respiration"},
{title:"Une clairière tranquille",desc:"Ambiance sonore de forêt.",dur:"10 min",kind:"Ambiance"},
{title:"Musique pour un moment calme",desc:"Piano et cordes douces.",dur:"Écoute libre",kind:"Musique"},
{title:"Accompagner sans mots",desc:"Balado — être présent sans savoir quoi dire.",dur:"18 min",kind:"Balado"},
{title:"Méditation simple",desc:"Se poser, respirer, revenir à soi.",dur:"5 min",kind:"Méditation"}
];
function matches(dur){if(duration==="Tous")return true;if(duration==="2 à 5 min")return dur==="2 min"||dur==="5 min";return dur===duration;}
const visible=contents.filter(c=>matches(c.dur));
return (<window.ScreenScroll>
<Header logo={false} title="" onProfileClick={()=>onNavigate("profil")} />
<div style={{padding:"0 20px 100px",display:"flex",flexDirection:"column",gap:20}}>
<div>
<h1 style={{fontFamily:"var(--font-display)",fontSize:28,margin:"0 0 6px",color:"var(--text-primary)"}}>M'apaiser</h1>
<p style={{margin:0,fontFamily:"var(--font-body)",fontSize:15,color:"var(--text-secondary)"}}>Musique, respiration et contenus pour ralentir.</p>
</div>
<div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
{durations.map(t=>(<Tag key={t} active={duration===t} onClick={()=>setDuration(t)}>{t}</Tag>))}
</div>
<div style={{display:"flex",flexDirection:"column",gap:10}}>
{visible.map(c=>(<Card key={c.title} tint="sauge" padding="14px 16px" onClick={onOpenAudio} style={{display:"flex",alignItems:"center",gap:12,minHeight:62,cursor:"pointer"}}>
<div style={{width:38,height:38,borderRadius:"50%",background:"var(--color-white)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,pointerEvents:"none"}}><i data-lucide="play" style={{width:15,height:15,color:"var(--color-prune)"}}></i></div>
<div style={{flex:1}}>
<h5 style={{margin:"0 0 2px",fontSize:15,fontWeight:600,color:"var(--text-primary)"}}>{c.title}</h5>
<p style={{margin:0,display:"flex",alignItems:"center",gap:5,fontSize:13,color:"var(--text-secondary)"}}><i data-lucide={icons[c.kind]} style={{width:13,height:13}}></i>{c.kind} · {c.dur}</p>
</div>
</Card>))}
</div>
</div>
</window.ScreenScroll>);
}
window.ApaiserScreen=ApaiserScreen;
