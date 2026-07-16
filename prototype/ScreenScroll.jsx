function ScreenScroll({children}){
return React.createElement(React.Fragment,null,
React.createElement("style",null,".a3s-scroll::-webkit-scrollbar{display:none;width:0;height:0}"),
React.createElement("div",{className:"a3s-scroll",style:{flex:1,overflowY:"auto",display:"flex",flexDirection:"column",scrollbarWidth:"none",msOverflowStyle:"none"}},children)
);
}
window.ScreenScroll=ScreenScroll;
