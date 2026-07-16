function AudioScreen({onBack}){
const {AudioPlayer}=window.AuxTroisSentiersDesignSystem_1197ae;
const [playing,setPlaying]=React.useState(true);
return (<window.ScreenScroll>
<div style={{padding:"20px 20px 32px",display:"flex",flexDirection:"column",gap:24,flex:1}}>
<div style={{borderRadius:"var(--radius-card)",overflow:"hidden",minHeight:220,position:"relative"}}>
<img src="prototype/assets/forest-path.jpg" alt="" style={{width:"100%",height:220,objectFit:"cover",display:"block"}}/>
</div>
<AudioPlayer title="Respirer doucement" description="Exercice guidé de 3 minutes pour ralentir la respiration et retrouver un peu de calme." duration="3 min" playing={playing} progress={0.42} onTogglePlay={()=>setPlaying(!playing)} onBack={onBack} />
</div>
</window.ScreenScroll>);
}
window.AudioScreen=AudioScreen;
