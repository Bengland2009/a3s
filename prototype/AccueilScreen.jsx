function AccueilScreen({onNavigate,onOpenAudio,onOpenQuestion}){
const {Card,Header,Button}=window.AuxTroisSentiersDesignSystem_1197ae;
const actions=[
{key:"apaiser",tint:"sauge",icon:"leaf",title:"M'apaiser",desc:"Musique, respiration et contenus pour ralentir."},
{key:"comprendre",tint:"prune",icon:"book-open",title:"Comprendre",desc:"Des réponses simples sur la fin de vie."},
{key:"pensees",tint:"corail",icon:"message-circle",title:"Partager une pensée",desc:"Déposer un souvenir, un mot ou un remerciement."},
{key:"soutien",tint:"prune",icon:"hand-heart",title:"Soutien",desc:"Trouver des conseils, des ressources et de l'aide."}
];
return (<window.ScreenScroll>
<Header onProfileClick={()=>onNavigate("profil")} />
<div style={{padding:"0 20px 32px",display:"flex",flexDirection:"column",gap:28}}>
<div style={{borderRadius:"var(--radius-card)",overflow:"hidden",position:"relative",minHeight:170,display:"flex",alignItems:"flex-end"}}>
<img src="prototype/assets/forest-path.jpg" alt="" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}}/>
<div style={{position:"absolute",inset:0,background:"linear-gradient(180deg, rgba(67,40,50,0.05) 0%, rgba(67,40,50,0.55) 100%)"}}/>
<div style={{position:"relative",padding:20,color:"var(--color-ivoire)"}}>
<h1 style={{fontFamily:"var(--font-display)",fontSize:26,lineHeight:"32px",fontWeight:500,margin:"0 0 8px"}}>De quoi avez-vous besoin en ce moment?</h1>
<p style={{margin:0,fontSize:15,lineHeight:"21px",opacity:0.95}}>Prenez un moment. Choisissez simplement ce qui pourrait vous aider maintenant.</p>
</div>
</div>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
{actions.map(a=>(<Card key={a.key} tint={a.tint} onClick={()=>onNavigate(a.key)} style={{display:"flex",flexDirection:"column",gap:10,minHeight:150}}>
<i data-lucide={a.icon} style={{width:24,height:24,color:"var(--color-prune)"}}></i>
<h5 style={{margin:0,fontFamily:"var(--font-body)",fontSize:17,fontWeight:600,color:"var(--text-primary)"}}>{a.title}</h5>
<p style={{margin:0,fontFamily:"var(--font-body)",fontSize:14,lineHeight:"19px",color:"var(--text-secondary)"}}>{a.desc}</p>
</Card>))}
</div>
<div>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:12}}>
<h2 style={{fontFamily:"var(--font-display)",fontSize:22,margin:0,color:"var(--text-primary)"}}>Pour vous en ce moment</h2>
</div>
<Card tint="sauge" onClick={onOpenAudio} style={{marginBottom:12,padding:20,cursor:"pointer",display:"flex",flexDirection:"column",gap:16}}>
<div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:16}}>
<div style={{display:"flex",flexDirection:"column",gap:8,flex:1}}>
<span style={{alignSelf:"flex-start",fontFamily:"var(--font-body)",fontSize:12,fontWeight:600,letterSpacing:0.3,padding:"4px 12px",borderRadius:"var(--radius-pill)",background:"var(--color-white)",color:"var(--color-sauge)"}}>Respiration</span>
<h5 style={{margin:0,fontFamily:"var(--font-display)",fontSize:20,fontWeight:500,color:"var(--text-primary)"}}>Respirer doucement</h5>
<p style={{margin:0,fontFamily:"var(--font-body)",fontSize:14,lineHeight:"19px",color:"var(--text-secondary)"}}>Exercice guidé de 3 minutes.</p>
</div>
<img src="prototype/assets/forest-path.jpg" alt="" style={{width:64,height:64,borderRadius:"var(--radius-button)",objectFit:"cover",flexShrink:0}}/>
</div>
<div style={{display:"flex",alignItems:"center",gap:10}}>
<span style={{display:"flex",alignItems:"center",justifyContent:"center",width:36,height:36,borderRadius:"50%",background:"var(--color-white)",flexShrink:0}}><i data-lucide="play" style={{width:15,height:15,color:"var(--color-prune)"}}></i></span>
<span style={{fontFamily:"var(--font-body)",fontSize:15,fontWeight:600,color:"var(--color-prune)"}}>Commencer · 3 min</span>
</div>
</Card>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:14}}>
<Card tint="beige" onClick={()=>onNavigate("apaiser")} style={{display:"flex",flexDirection:"column",gap:8,minHeight:120,cursor:"pointer"}}>
<i data-lucide="music" style={{width:20,height:20,color:"var(--color-prune)"}}></i>
<span style={{fontFamily:"var(--font-body)",fontSize:12,fontWeight:700,color:"var(--color-prune)"}}>Musique</span>
<p style={{margin:0,fontFamily:"var(--font-body)",fontSize:14,lineHeight:"18px",fontWeight:600,color:"var(--text-primary)",flex:1}}>Musique pour un moment calme</p>
<div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
<span style={{fontSize:12,fontWeight:600,color:"var(--text-primary)"}}>10 min</span>
<span style={{display:"flex",alignItems:"center",justifyContent:"center",width:32,height:32,borderRadius:"50%",background:"var(--color-white)",pointerEvents:"none"}}><i data-lucide="play" style={{width:16,height:16,color:"var(--color-prune)"}}></i></span>
</div>
</Card>
<Card tint="corail" onClick={()=>onNavigate("apaiser")} style={{display:"flex",flexDirection:"column",gap:8,minHeight:120,cursor:"pointer"}}>
<i data-lucide="headphones" style={{width:20,height:20,color:"var(--color-prune)"}}></i>
<span style={{fontFamily:"var(--font-body)",fontSize:12,fontWeight:700,color:"var(--color-prune)"}}>Balado</span>
<p style={{margin:0,fontFamily:"var(--font-body)",fontSize:14,lineHeight:"18px",fontWeight:600,color:"var(--text-primary)",flex:1}}>Accompagner sans toujours savoir quoi dire</p>
<div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
<span style={{fontSize:12,fontWeight:600,color:"var(--text-primary)"}}>18 min</span>
<span style={{display:"flex",alignItems:"center",justifyContent:"center",width:32,height:32,borderRadius:"50%",background:"var(--color-white)",pointerEvents:"none"}}><i data-lucide="play" style={{width:16,height:16,color:"var(--color-prune)"}}></i></span>
</div>
</Card>
</div>
<Button variant="secondary" size="sm" style={{width:"100%"}} onClick={()=>onNavigate("apaiser")}>Voir tous les contenus</Button>
</div>
<div>
<h2 style={{fontFamily:"var(--font-display)",fontSize:22,margin:"0 0 12px",color:"var(--text-primary)"}}>Questions fréquentes</h2>
<div style={{display:"flex",flexDirection:"column",gap:10}}>
{["Peut-il encore m'entendre?","Pourquoi sa respiration change-t-elle?","Comment puis-je l'accompagner maintenant?"].map(q=>(
<Card key={q} tint="white" onClick={()=>onOpenQuestion(q)} style={{display:"flex",alignItems:"center",justifyContent:"space-between",minHeight:44,padding:"16px 18px"}}>
<span style={{fontSize:15,color:"var(--text-primary)"}}>{q}</span>
<i data-lucide="chevron-right" style={{width:18,height:18,color:"var(--color-prune)"}}></i>
</Card>
))}
</div>
<button onClick={()=>onNavigate("comprendre")} style={{marginTop:12,background:"none",border:"none",padding:0,color:"var(--color-prune)",fontFamily:"var(--font-body)",fontSize:15,fontWeight:600,cursor:"pointer"}}>Voir toutes les questions →</button>
</div>
</div>
</window.ScreenScroll>);
}
window.AccueilScreen=AccueilScreen;
