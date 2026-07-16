function ProfileScreen({onBack,onLogout}){
const {Card}=window.AuxTroisSentiersDesignSystem_1197ae;
const rows=[{icon:"user-round",label:"Renseignements personnels"},{icon:"bell",label:"Notifications"},{icon:"lock",label:"Confidentialité"},{icon:"circle-help",label:"Aide"}];
return (<window.ScreenScroll>
<div style={{padding:"20px 20px 32px",display:"flex",flexDirection:"column",gap:20}}>
<button onClick={onBack} style={{background:"none",border:"none",padding:0,display:"flex",alignItems:"center",gap:6,color:"var(--color-prune)",fontFamily:"var(--font-body)",fontSize:15,cursor:"pointer"}}><i data-lucide="arrow-left" style={{width:18,height:18}}></i>Retour</button>
<div style={{display:"flex",alignItems:"center",gap:14}}>
<div style={{width:56,height:56,borderRadius:"50%",background:"var(--surface-understand)",display:"flex",alignItems:"center",justifyContent:"center"}}><i data-lucide="user-round" style={{width:26,height:26,color:"var(--color-prune)"}}></i></div>
<div><h5 style={{margin:0,fontSize:18,fontWeight:600,color:"var(--text-primary)"}}>Marie Tremblay</h5><p style={{margin:0,fontSize:14,color:"var(--text-secondary)"}}>marie.tremblay@exemple.com</p></div>
</div>
<div style={{display:"flex",flexDirection:"column",gap:10}}>
{rows.map(r=>(<Card key={r.label} tint="white" style={{display:"flex",alignItems:"center",gap:14,minHeight:44,padding:"14px 16px"}}>
<i data-lucide={r.icon} style={{width:18,height:18,color:"var(--color-prune)"}}></i><span style={{fontSize:15,color:"var(--text-primary)"}}>{r.label}</span>
</Card>))}
</div>
<button onClick={onLogout} style={{background:"none",border:"none",padding:0,color:"var(--color-corail)",fontFamily:"var(--font-body)",fontSize:15,fontWeight:600,cursor:"pointer",alignSelf:"flex-start"}}>Se déconnecter</button>
</div>
</window.ScreenScroll>);
}
window.ProfileScreen=ProfileScreen;
