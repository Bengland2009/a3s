function QuestionDetailScreen({question,onBack}){
const {InlineNote}=window.AuxTroisSentiersDesignSystem_1197ae;
const answers={
"Peut-il encore m'entendre?":"Oui, bien souvent. L'ouïe est l'un des derniers sens à s'estomper, même lorsque la personne ne réagit plus visiblement. Parler doucement, dire ce qu'on ressent ou simplement rester présent peut avoir un sens, même en silence apparent.",
"Pourquoi sa respiration change-t-elle?":"Le corps ralentit naturellement plusieurs fonctions vers la fin de vie. La respiration peut devenir irrégulière, plus lente ou parfois bruyante. C'est une évolution normale, pas nécessairement un signe de souffrance.",
"Comment puis-je l'accompagner maintenant?":"Il n'y a pas de bonne façon unique. Être présent, tenir sa main, parler doucement ou simplement rester assis à ses côtés sont toutes des formes valables d'accompagnement."
};
return (<window.ScreenScroll>
<div style={{padding:"20px 20px 32px",display:"flex",flexDirection:"column",gap:20}}>
<button onClick={onBack} style={{background:"none",border:"none",padding:0,display:"flex",alignItems:"center",gap:6,color:"var(--color-prune)",fontFamily:"var(--font-body)",fontSize:15,cursor:"pointer"}}><i data-lucide="arrow-left" style={{width:18,height:18}}></i>Retour</button>
<h1 style={{fontFamily:"var(--font-display)",fontSize:26,lineHeight:"32px",margin:0,color:"var(--text-primary)"}}>{question}</h1>
<p style={{margin:0,fontFamily:"var(--font-body)",fontSize:17,lineHeight:"27px",color:"var(--text-primary)"}}>{answers[question]}</p>
<InlineNote>Chaque situation est différente. Pour des questions précises sur les soins, parlez directement à l'équipe.</InlineNote>
</div>
</window.ScreenScroll>);
}
window.QuestionDetailScreen=QuestionDetailScreen;
