function SoutienScreen({onNavigate}){
const {Card,Button,Header}=window.AuxTroisSentiersDesignSystem_1197ae;
const priority=[
{title:"Parler à quelqu'un",desc:"Joindre l'équipe ou trouver une ressource d'écoute.",icon:"phone"},
{title:"J'ai une question sur les soins",desc:"Communiquer directement avec l'équipe de soins.",icon:"stethoscope"}
];
const resources=[
{title:"Je ne sais pas quoi faire",desc:"Être guidé selon ce que vous vivez maintenant.",icon:"compass",tint:"sauge"},
{title:"Trouver une ressource",desc:"Consulter les services et ressources disponibles.",icon:"book-open",tint:"beige"},
{title:"Je traverse un moment difficile",desc:"Trouver du soutien pour soi ou pour un proche.",icon:"hand-heart",tint:"corail"}
];
return (<window.ScreenScroll>
<Header logo={false} title="" onProfileClick={()=>onNavigate("profil")} />
<div style={{padding:"0 20px 100px",display:"flex",flexDirection:"column",gap:28}}>
<div>
<h1 style={{fontFamily:"var(--font-display)",fontSize:28,margin:"0 0 6px",color:"var(--text-primary)"}}>Soutien</h1>
<p style={{margin:0,fontFamily:"var(--font-body)",fontSize:15,color:"var(--text-secondary)"}}>Trouver des conseils, des ressources et de l'aide.</p>
</div>
<div>
<h2 style={{fontFamily:"var(--font-display)",fontSize:18,margin:"0 0 10px",color:"var(--text-primary)"}}>Besoin d'aide maintenant</h2>
<div style={{display:"flex",flexDirection:"column",gap:10}}>
{priority.map(n=>(<Card key={n.title} tint="prune" onClick={()=>{}} style={{display:"flex",alignItems:"center",gap:14,minHeight:64,cursor:"pointer"}}>
<span style={{display:"flex",alignItems:"center",justifyContent:"center",width:40,height:40,borderRadius:"50%",background:"var(--color-white)",flexShrink:0}}><i data-lucide={n.icon} style={{width:18,height:18,color:"var(--color-prune)"}}></i></span>
<div>
<h5 style={{margin:"0 0 2px",fontSize:15,fontWeight:600,color:"var(--text-primary)"}}>{n.title}</h5>
<p style={{margin:0,fontSize:13,color:"var(--text-secondary)"}}>{n.desc}</p>
</div>
</Card>))}
</div>
</div>
<div>
<h2 style={{fontFamily:"var(--font-display)",fontSize:18,margin:"0 0 10px",color:"var(--text-primary)"}}>Trouver du soutien</h2>
<div style={{display:"flex",flexDirection:"column",gap:10}}>
{resources.map(n=>(<Card key={n.title} tint={n.tint} onClick={()=>{}} style={{display:"flex",alignItems:"center",gap:14,minHeight:60,cursor:"pointer"}}>
<i data-lucide={n.icon} style={{width:20,height:20,color:"var(--color-prune)",flexShrink:0}}></i>
<div>
<h5 style={{margin:"0 0 2px",fontSize:15,fontWeight:600,color:"var(--text-primary)"}}>{n.title}</h5>
<p style={{margin:0,fontSize:13,color:"var(--text-secondary)"}}>{n.desc}</p>
</div>
</Card>))}
</div>
</div>
<Button variant="primary" style={{width:"100%"}}>Contacter l'équipe</Button>
<Card tint="beige" style={{display:"flex",flexDirection:"column",gap:10}}>
<h5 style={{margin:0,fontFamily:"var(--font-display)",fontSize:17,fontWeight:500,color:"var(--text-primary)"}}>Soutenir Aux trois sentiers</h5>
<p style={{margin:0,fontSize:14,lineHeight:"20px",color:"var(--text-secondary)"}}>Les dons permettent d'offrir un accompagnement humain et spécialisé aux personnes en fin de vie et à leurs proches.</p>
<Button variant="secondary" style={{width:"100%",gap:8}}>Faire un don<i data-lucide="external-link" style={{width:15,height:15}}></i></Button>
</Card>
</div>
</window.ScreenScroll>);
}
window.SoutienScreen=SoutienScreen;
