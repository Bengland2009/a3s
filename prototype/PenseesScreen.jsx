function PenseesScreen({onNavigate,onOpenShare}){
const {Card,Button,Header,InlineNote}=window.AuxTroisSentiersDesignSystem_1197ae;
const posts=[
{name:"Marie",role:"fille de Jean",type:"gratitude",text:"Aujourd'hui, je ressens beaucoup de gratitude d'avoir pu passer l'après-midi avec toi, papa. On a écouté ta musique préférée.",time:"Aujourd'hui"},
{name:"Équipe de soins",role:"soins palliatifs",type:"souvenir",text:"Un moment que je souhaite retenir : le sourire de madame ce matin, en entendant le chant des oiseaux par la fenêtre.",time:"Hier"},
{name:"Simon",role:"petit-fils",type:"moment",text:"J'aimerais te remercier pour toutes les histoires que tu m'as racontées. Elles me suivront toujours.",time:"Il y a 2 jours"}
];
const typeIcons={gratitude:"heart",souvenir:"feather",moment:"sparkles"};
return (<window.ScreenScroll>
<Header logo={false} title="" onProfileClick={()=>onNavigate("profil")} />
<div style={{padding:"0 20px 100px",display:"flex",flexDirection:"column",gap:18}}>
<div>
<h1 style={{fontFamily:"var(--font-display)",fontSize:28,margin:"0 0 6px",color:"var(--text-primary)"}}>Pensées</h1>
<p style={{margin:0,fontFamily:"var(--font-body)",fontSize:15,color:"var(--text-secondary)"}}>Un espace partagé pour déposer un souvenir ou un mot de gratitude.</p>
</div>
<Button variant="accent" size="sm" onClick={onOpenShare} style={{width:"100%",background:"color-mix(in oklch, var(--accent) 82%, white)"}}><i data-lucide="pencil" style={{width:16,height:16}}></i>Partager une pensée</Button>
<div style={{display:"flex",gap:8,alignItems:"flex-start",background:"var(--surface-understand)",borderRadius:"var(--radius-card-sm)",padding:"10px 14px"}}>
<i data-lucide="info" style={{width:14,height:14,color:"var(--color-prune)",flexShrink:0,marginTop:2}}></i>
<p style={{margin:0,fontFamily:"var(--font-body)",fontSize:12,lineHeight:"16px",color:"var(--text-primary)"}}>Cet espace est réservé aux pensées et aux messages de gratitude. Pour une question sur les soins ou une urgence, communiquez avec l'équipe.</p>
</div>
<div style={{display:"flex",flexDirection:"column",gap:12}}>
{posts.map((p,i)=>(<Card key={i} tint="white" padding="16px" style={{display:"flex",flexDirection:"column",gap:6}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
<div style={{display:"flex",alignItems:"center",gap:6}}>
<i data-lucide={typeIcons[p.type]} style={{width:14,height:14,color:"var(--color-corail)"}}></i>
<span style={{fontSize:14,fontWeight:700,color:"var(--color-prune)"}}>{p.name}</span>
<span style={{fontSize:13,color:"var(--text-secondary)"}}>{p.role}</span>
</div>
<span style={{fontSize:12,color:"var(--text-secondary)",flexShrink:0}}>{p.time}</span>
</div>
<p style={{margin:0,fontSize:15,lineHeight:"22px",color:"var(--text-primary)"}}>{p.text}</p>
</Card>))}
</div>
</div>
</window.ScreenScroll>);
}
window.PenseesScreen=PenseesScreen;
