function PhoneFrame({children}){
return React.createElement(React.Fragment,null,
React.createElement("style",null,`
.a3s-frame{width:100%;max-width:480px;margin:0 auto;min-height:100dvh;background:var(--surface-app);display:flex;flex-direction:column;font-family:var(--font-body);position:relative}
@media (min-width:481px){.a3s-frame{box-shadow:0 0 40px rgba(48,43,45,0.08)}}
`),
React.createElement("div",{className:"a3s-frame"},children)
);
}
window.PhoneFrame=PhoneFrame;
