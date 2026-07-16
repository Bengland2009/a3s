function LoginScreen({onLogin}){
const {Input,Button}=window.AuxTroisSentiersDesignSystem_1197ae;
return (<window.ScreenScroll>
<div style={{flex:1,display:"flex",flexDirection:"column",justifyContent:"center",padding:"32px 28px",gap:24}}>
<div style={{display:"flex",justifyContent:"center",marginBottom:8}}>
<div style={{background:"var(--color-prune)",borderRadius:"var(--radius-pill)",padding:"14px 22px"}}><img src="prototype/assets/logo-aux-trois-sentiers-pale.svg" alt="Aux trois sentiers" style={{height:32}}/></div>
</div>
<p style={{textAlign:"center",margin:0,fontFamily:"var(--font-body)",fontSize:15,color:"var(--text-secondary)"}}>Un espace calme pour vous accompagner.</p>
<Input label="Courriel" type="email" placeholder="nom@exemple.com" />
<Input label="Mot de passe" type="password" placeholder="••••••••" />
<button style={{background:"none",border:"none",padding:0,alignSelf:"flex-start",color:"var(--color-prune)",fontFamily:"var(--font-body)",fontSize:14,cursor:"pointer"}}>Mot de passe oublié?</button>
<Button variant="primary" onClick={onLogin} style={{width:"100%"}}>Se connecter</Button>
</div>
</window.ScreenScroll>);
}
window.LoginScreen=LoginScreen;
