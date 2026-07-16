function ShareThoughtScreen({onBack,onSubmit}){
const {Input,Button}=window.AuxTroisSentiersDesignSystem_1197ae;
const prompts=["Aujourd'hui, je ressens…","Un moment que je souhaite retenir…","J'aimerais remercier…","Une pensée pour notre famille…"];
const [text,setText]=React.useState("");
return (<window.ScreenScroll>
<div style={{padding:"20px 20px 32px",display:"flex",flexDirection:"column",gap:18}}>
<button onClick={onBack} style={{background:"none",border:"none",padding:0,display:"flex",alignItems:"center",gap:6,color:"var(--color-prune)",fontFamily:"var(--font-body)",fontSize:15,cursor:"pointer"}}><i data-lucide="arrow-left" style={{width:18,height:18}}></i>Retour</button>
<h1 style={{fontFamily:"var(--font-display)",fontSize:26,margin:0,color:"var(--text-primary)"}}>Partager une pensée</h1>
<div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
{prompts.map(p=>(<button key={p} onClick={()=>setText(p)} style={{fontFamily:"var(--font-body)",fontSize:13,padding:"8px 14px",borderRadius:"var(--radius-pill)",border:"1px solid var(--border-soft)",background:"var(--color-white)",color:"var(--text-primary)",cursor:"pointer"}}>{p}</button>))}
</div>
<Input as="textarea" label="Ta pensée" placeholder="Écris ici…" value={text} onChange={e=>setText(e.target.value)} />
<button style={{display:"flex",alignItems:"center",gap:8,background:"none",border:"1px dashed var(--border-soft)",borderRadius:"var(--radius-field)",padding:"14px 16px",color:"var(--text-secondary)",fontFamily:"var(--font-body)",fontSize:14,cursor:"pointer"}}><i data-lucide="image" style={{width:18,height:18}}></i>Ajouter une photo (facultatif)</button>
<Button variant="primary" onClick={onSubmit} style={{width:"100%"}}>Publier</Button>
</div>
</window.ScreenScroll>);
}
window.ShareThoughtScreen=ShareThoughtScreen;
