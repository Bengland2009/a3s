/* @ds-bundle: {"format":4,"namespace":"AuxTroisSentiersDesignSystem_1197ae","components":[{"name":"FaqItem","sourcePath":"components/content/FaqItem.jsx"},{"name":"InlineNote","sourcePath":"components/content/InlineNote.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"AudioPlayer","sourcePath":"components/media/AudioPlayer.jsx"},{"name":"Header","sourcePath":"components/navigation/Header.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"}],"sourceHashes":{"components/content/FaqItem.jsx":"71b6ad47d3ba","components/content/InlineNote.jsx":"4e58f64624de","components/core/Button.jsx":"ff2932b0545e","components/core/Card.jsx":"eabb22bf0b3a","components/core/Input.jsx":"92f4b9399f0a","components/core/Tag.jsx":"f9e8ff2a34fc","components/media/AudioPlayer.jsx":"839cfc642fcf","components/navigation/Header.jsx":"c1ff73cafc81","components/navigation/NavBar.jsx":"9fcdf4e64888","ui_kits/mobile-app/AccueilScreen.jsx":"1bd6790054f3","ui_kits/mobile-app/ApaiserScreen.jsx":"99eb3cc36cf0","ui_kits/mobile-app/AudioScreen.jsx":"6cdac9a42126","ui_kits/mobile-app/ComprendreScreen.jsx":"2f7f782dc307","ui_kits/mobile-app/LoginScreen.jsx":"67ad48938e2b","ui_kits/mobile-app/PenseesScreen.jsx":"91dba82d3f20","ui_kits/mobile-app/PhoneFrame.jsx":"ebcce666acdb","ui_kits/mobile-app/ProfileScreen.jsx":"bd6cfa57a09f","ui_kits/mobile-app/QuestionDetailScreen.jsx":"9dd6a09fcd18","ui_kits/mobile-app/ScreenScroll.jsx":"73dddd340c7d","ui_kits/mobile-app/ShareThoughtScreen.jsx":"8f72300c6338","ui_kits/mobile-app/SoutienScreen.jsx":"2135ade3ac7f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AuxTroisSentiersDesignSystem_1197ae = window.AuxTroisSentiersDesignSystem_1197ae || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/FaqItem.jsx
try { (() => {
function FaqItem({
  question,
  answer,
  open = false,
  onToggle
}) {
  return React.createElement("div", {
    style: {
      background: "var(--surface-raised)",
      borderRadius: "var(--radius-card-sm)",
      border: "1px solid var(--border-soft)",
      overflow: "hidden"
    }
  }, React.createElement("button", {
    onClick: onToggle,
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "none",
      border: "none",
      padding: "18px 20px",
      cursor: "pointer",
      textAlign: "left",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-h5-size)",
      fontWeight: "var(--text-h5-weight)",
      color: "var(--text-primary)",
      minHeight: "var(--tap-min)"
    }
  }, React.createElement("span", null, question), React.createElement("i", {
    "data-lucide": open ? "chevron-up" : "chevron-down",
    style: {
      width: 20,
      height: 20,
      color: "var(--color-prune)",
      flexShrink: 0
    }
  })), open && React.createElement("div", {
    style: {
      padding: "0 20px 20px",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-size)",
      lineHeight: "var(--text-body-lh)",
      color: "var(--text-secondary)"
    }
  }, answer));
}
Object.assign(__ds_scope, { FaqItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FaqItem.jsx", error: String((e && e.message) || e) }); }

// components/content/InlineNote.jsx
try { (() => {
function InlineNote({
  children,
  icon = "info"
}) {
  return React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px",
      alignItems: "flex-start",
      background: "var(--surface-understand)",
      borderRadius: "var(--radius-card-sm)",
      padding: "14px 16px"
    }
  }, React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 18,
      height: 18,
      color: "var(--color-prune)",
      flexShrink: 0,
      marginTop: 2
    }
  }), React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-sm-size)",
      lineHeight: "var(--text-body-sm-lh)",
      color: "var(--text-primary)"
    }
  }, children));
}
Object.assign(__ds_scope, { InlineNote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/InlineNote.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  icon = null,
  children,
  onClick,
  style
}) {
  const base = {
    fontFamily: "var(--font-body)",
    fontSize: "var(--text-button-size)",
    fontWeight: "var(--text-button-weight)",
    border: "none",
    borderRadius: "var(--radius-button)",
    cursor: disabled ? "default" : "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    minHeight: "var(--tap-min)",
    padding: size === "sm" ? "10px 18px" : "14px 24px",
    transition: "background-color var(--duration-standard) var(--ease-standard), transform 120ms ease",
    opacity: disabled ? 0.5 : 1,
    width: style && style.width ? style.width : undefined
  };
  const variants = {
    primary: {
      background: "var(--action-primary)",
      color: "var(--action-primary-text)"
    },
    secondary: {
      background: "var(--color-white)",
      color: "var(--color-prune)",
      border: "1px solid var(--border-soft)"
    },
    ghost: {
      background: "transparent",
      color: "var(--color-prune)"
    },
    accent: {
      background: "var(--accent)",
      color: "var(--color-white)"
    }
  };
  return React.createElement("button", {
    disabled,
    onClick,
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    onMouseEnter: e => {
      if (!disabled && variant === "primary") e.currentTarget.style.backgroundColor = "var(--action-primary-hover)";
      if (!disabled && variant === "accent") e.currentTarget.style.backgroundColor = "var(--accent-hover)";
    },
    onMouseLeave: e => {
      if (variant === "primary") e.currentTarget.style.backgroundColor = "var(--action-primary)";
      if (variant === "accent") e.currentTarget.style.backgroundColor = "var(--accent)";
    }
  }, icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
const tints = {
  sauge: "var(--surface-calm)",
  prune: "var(--surface-understand)",
  corail: "var(--surface-share)",
  beige: "var(--surface-card)",
  white: "var(--surface-raised)"
};
function Card({
  tint = "white",
  padding = "20px",
  radius = "var(--radius-card)",
  onClick,
  style,
  children
}) {
  return React.createElement("div", {
    onClick,
    style: {
      background: tints[tint] || tints.white,
      borderRadius: radius,
      padding,
      boxShadow: tint === "white" ? "var(--shadow-card)" : "none",
      border: tint === "white" ? "1px solid var(--border-soft)" : "none",
      cursor: onClick ? "pointer" : "default",
      transition: "transform 150ms var(--ease-standard)",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function Input({
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
  helpText,
  as = "input"
}) {
  const Tag = as === "textarea" ? "textarea" : "input";
  return React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      width: "100%"
    }
  }, label && React.createElement("label", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-label-size)",
      fontWeight: "var(--text-label-weight)",
      color: "var(--text-primary)"
    }
  }, label), React.createElement(Tag, {
    type: as === "textarea" ? undefined : type,
    placeholder,
    value,
    onChange,
    rows: as === "textarea" ? 4 : undefined,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-size)",
      color: "var(--text-primary)",
      background: "var(--color-white)",
      border: "1px solid var(--border-soft)",
      borderRadius: "var(--radius-field)",
      padding: "14px 16px",
      minHeight: as === "textarea" ? "96px" : "var(--tap-min)",
      outline: "none",
      resize: as === "textarea" ? "vertical" : undefined,
      width: "100%",
      boxSizing: "border-box"
    },
    onFocus: e => e.currentTarget.style.borderColor = "var(--focus-ring)",
    onBlur: e => e.currentTarget.style.borderColor = "var(--border-soft)"
  }), helpText && React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-small-size)",
      color: "var(--text-secondary)"
    }
  }, helpText));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  active = false,
  onClick
}) {
  return React.createElement("button", {
    onClick,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-label-size)",
      fontWeight: "var(--text-label-weight)",
      padding: "8px 16px",
      borderRadius: "var(--radius-pill)",
      border: active ? "1px solid var(--color-prune)" : "1px solid var(--border-soft)",
      background: active ? "var(--color-prune)" : "var(--color-white)",
      color: active ? "var(--color-ivoire)" : "var(--text-primary)",
      cursor: "pointer",
      transition: "all var(--duration-standard) var(--ease-standard)"
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/media/AudioPlayer.jsx
try { (() => {
function AudioPlayer({
  title,
  description,
  duration = "3 min",
  playing = false,
  progress = 0.3,
  onTogglePlay,
  onBack
}) {
  return React.createElement("div", {
    style: {
      background: "var(--surface-raised)",
      borderRadius: "var(--radius-card)",
      padding: "24px",
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      boxShadow: "var(--shadow-card)",
      border: "1px solid var(--border-soft)"
    }
  }, onBack && React.createElement("button", {
    onClick: onBack,
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      alignSelf: "flex-start",
      display: "flex",
      alignItems: "center",
      gap: 6,
      color: "var(--color-prune)",
      fontFamily: "var(--font-body)",
      fontSize: 14,
      padding: 0
    }
  }, React.createElement("i", {
    "data-lucide": "arrow-left",
    style: {
      width: 16,
      height: 16
    }
  }), "Retour"), React.createElement("div", null, React.createElement("h4", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-h4-size)",
      fontWeight: "var(--text-h4-weight)",
      color: "var(--text-primary)",
      margin: "0 0 6px"
    }
  }, title), React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-sm-size)",
      color: "var(--text-secondary)",
      margin: 0
    }
  }, description), React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-small-size)",
      color: "var(--color-sauge)"
    }
  }, duration)), React.createElement("div", {
    style: {
      height: 6,
      borderRadius: "var(--radius-pill)",
      background: "var(--surface-calm)",
      overflow: "hidden"
    }
  }, React.createElement("div", {
    style: {
      height: "100%",
      width: progress * 100 + "%",
      background: "var(--color-sauge)",
      borderRadius: "var(--radius-pill)"
    }
  })), React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "28px"
    }
  }, React.createElement("i", {
    "data-lucide": "rotate-ccw",
    style: {
      width: 20,
      height: 20,
      color: "var(--color-prune)"
    }
  }), React.createElement("button", {
    onClick: onTogglePlay,
    style: {
      width: 56,
      height: 56,
      borderRadius: "50%",
      background: "var(--color-prune)",
      border: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer"
    }
  }, React.createElement("i", {
    "data-lucide": playing ? "pause" : "play",
    style: {
      width: 22,
      height: 22,
      color: "var(--color-ivoire)"
    }
  })), React.createElement("i", {
    "data-lucide": "volume-2",
    style: {
      width: 20,
      height: 20,
      color: "var(--color-prune)"
    }
  })));
}
Object.assign(__ds_scope, { AudioPlayer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/AudioPlayer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Header.jsx
try { (() => {
function Header({
  title,
  logo = true,
  onProfileClick
}) {
  return React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 20px"
    }
  }, logo ? React.createElement("div", {
    style: {
      background: "var(--color-prune)",
      borderRadius: "var(--radius-pill)",
      padding: "8px 14px",
      display: "flex",
      alignItems: "center"
    }
  }, React.createElement("img", {
    src: "assets/logo-aux-trois-sentiers-pale.svg",
    alt: "Aux trois sentiers",
    style: {
      height: 22
    }
  })) : React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 20,
      color: "var(--color-prune)"
    }
  }, title), React.createElement("button", {
    onClick: onProfileClick,
    "aria-label": "Profil",
    style: {
      width: "var(--tap-min)",
      height: "var(--tap-min)",
      borderRadius: "var(--radius-pill)",
      border: "1px solid var(--border-soft)",
      background: "var(--color-white)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer"
    }
  }, React.createElement("i", {
    "data-lucide": "user-round",
    style: {
      width: 20,
      height: 20,
      color: "var(--color-prune)"
    }
  })));
}
Object.assign(__ds_scope, { Header });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Header.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
const items = [{
  key: "accueil",
  label: "Accueil",
  icon: "home"
}, {
  key: "apaiser",
  label: "Apaiser",
  icon: "leaf"
}, {
  key: "comprendre",
  label: "Comprendre",
  icon: "book-open"
}, {
  key: "pensees",
  label: "Pensées",
  icon: "message-circle"
}, {
  key: "soutien",
  label: "Soutien",
  icon: "hand-heart"
}];
function NavBar({
  active = "accueil",
  onNavigate
}) {
  return React.createElement("nav", {
    style: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      background: "var(--surface-nav)",
      padding: "10px 4px",
      position: "sticky",
      bottom: 0,
      boxShadow: "0 -2px 12px rgba(67,40,50,0.18)"
    }
  }, items.map(it => React.createElement("button", {
    key: it.key,
    onClick: () => onNavigate && onNavigate(it.key),
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "4px",
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--text-inverse)",
      padding: "6px 10px",
      borderRadius: "var(--radius-pill)",
      minWidth: "var(--tap-min)",
      minHeight: "var(--tap-min)"
    }
  }, React.createElement("span", {
    style: {
      width: 36,
      height: 26,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-pill)",
      background: active === it.key ? "var(--color-beige)" : "transparent"
    }
  }, React.createElement("i", {
    "data-lucide": it.icon,
    style: {
      width: 20,
      height: 20,
      color: active === it.key ? "var(--color-prune-dark)" : "var(--text-inverse)"
    }
  })), React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      fontWeight: active === it.key ? 600 : 400
    }
  }, it.label))));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/AccueilScreen.jsx
try { (() => {
function AccueilScreen({
  onNavigate,
  onOpenAudio,
  onOpenQuestion
}) {
  const {
    Card,
    Header
  } = window.AuxTroisSentiersDesignSystem_1197ae;
  const actions = [{
    key: "apaiser",
    tint: "sauge",
    icon: "leaf",
    title: "M'apaiser",
    desc: "Musique, respiration et contenus pour ralentir."
  }, {
    key: "comprendre",
    tint: "prune",
    icon: "book-open",
    title: "Comprendre",
    desc: "Des réponses simples sur la fin de vie."
  }, {
    key: "pensees",
    tint: "corail",
    icon: "message-circle",
    title: "Partager une pensée",
    desc: "Déposer un souvenir, un mot ou un remerciement."
  }, {
    key: "soutien",
    tint: "prune",
    icon: "hand-heart",
    title: "Soutien",
    desc: "Trouver des conseils, des ressources et de l'aide."
  }];
  return /*#__PURE__*/React.createElement(window.ScreenScroll, null, /*#__PURE__*/React.createElement(Header, {
    onProfileClick: () => onNavigate("profil")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px 32px",
      display: "flex",
      flexDirection: "column",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-card)",
      overflow: "hidden",
      position: "relative",
      minHeight: 170,
      display: "flex",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/forest-path.jpg",
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(67,40,50,0.05) 0%, rgba(67,40,50,0.55) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: 20,
      color: "var(--color-ivoire)"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 26,
      lineHeight: "32px",
      fontWeight: 500,
      margin: "0 0 8px"
    }
  }, "De quoi avez-vous besoin en ce moment?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: "21px",
      opacity: 0.95
    }
  }, "Prenez un moment. Choisissez simplement ce qui pourrait vous aider maintenant."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 14
    }
  }, actions.map(a => /*#__PURE__*/React.createElement(Card, {
    key: a.key,
    tint: a.tint,
    onClick: () => onNavigate(a.key),
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      minHeight: 150
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": a.icon,
    style: {
      width: 24,
      height: 24,
      color: "var(--color-prune)"
    }
  }), /*#__PURE__*/React.createElement("h5", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: 17,
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, a.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: 14,
      lineHeight: "19px",
      color: "var(--text-secondary)"
    }
  }, a.desc)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 22,
      margin: 0,
      color: "var(--text-primary)"
    }
  }, "Pour vous en ce moment")), /*#__PURE__*/React.createElement(Card, {
    tint: "sauge",
    onClick: onOpenAudio,
    style: {
      marginBottom: 12,
      position: "relative",
      overflow: "hidden",
      minHeight: 110,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("h5", {
    style: {
      margin: "0 0 4px",
      fontFamily: "var(--font-body)",
      fontSize: 17,
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, "Respirer doucement"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--text-secondary)"
    }
  }, "Exercice guid\xE9 de 3 minutes.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tint: "white",
    style: {
      minHeight: 80
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, "Musique pour un moment calme")), /*#__PURE__*/React.createElement(Card, {
    tint: "white",
    style: {
      minHeight: 80
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, "Balado : accompagner sans toujours savoir quoi dire"))), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate("apaiser"),
    style: {
      background: "none",
      border: "none",
      padding: 0,
      color: "var(--color-prune)",
      fontFamily: "var(--font-body)",
      fontSize: 15,
      fontWeight: 600,
      cursor: "pointer"
    }
  }, "Voir tous les contenus \u2192")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 22,
      margin: "0 0 12px",
      color: "var(--text-primary)"
    }
  }, "Questions fr\xE9quentes"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, ["Peut-il encore m'entendre?", "Pourquoi sa respiration change-t-elle?", "Comment puis-je l'accompagner maintenant?"].map(q => /*#__PURE__*/React.createElement(Card, {
    key: q,
    tint: "white",
    onClick: () => onOpenQuestion(q),
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      minHeight: 44,
      padding: "16px 18px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: "var(--text-primary)"
    }
  }, q), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-right",
    style: {
      width: 18,
      height: 18,
      color: "var(--color-prune)"
    }
  })))), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate("comprendre"),
    style: {
      marginTop: 12,
      background: "none",
      border: "none",
      padding: 0,
      color: "var(--color-prune)",
      fontFamily: "var(--font-body)",
      fontSize: 15,
      fontWeight: 600,
      cursor: "pointer"
    }
  }, "Voir toutes les questions \u2192"))));
}
window.AccueilScreen = AccueilScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/AccueilScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/ApaiserScreen.jsx
try { (() => {
function ApaiserScreen({
  onNavigate,
  onOpenAudio
}) {
  const {
    Card,
    Tag,
    Header
  } = window.AuxTroisSentiersDesignSystem_1197ae;
  const [duration, setDuration] = React.useState("5 min");
  const contents = [{
    title: "Respirer doucement",
    desc: "Exercice guidé de respiration.",
    dur: "3 min",
    kind: "Respiration"
  }, {
    title: "Une clairière tranquille",
    desc: "Ambiance sonore de forêt.",
    dur: "10 min",
    kind: "Ambiance"
  }, {
    title: "Musique pour un moment calme",
    desc: "Piano et cordes douces.",
    dur: "Libre",
    kind: "Musique"
  }, {
    title: "Accompagner sans mots",
    desc: "Balado — être présent sans savoir quoi dire.",
    dur: "18 min",
    kind: "Balado"
  }, {
    title: "Méditation simple",
    desc: "Se poser, respirer, revenir à soi.",
    dur: "5 min",
    kind: "Méditation"
  }];
  return /*#__PURE__*/React.createElement(window.ScreenScroll, null, /*#__PURE__*/React.createElement(Header, {
    title: "Apaiser",
    logo: false,
    onProfileClick: () => onNavigate("profil")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px 32px",
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 28,
      margin: "0 0 6px",
      color: "var(--text-primary)"
    }
  }, "M'apaiser"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: 15,
      color: "var(--text-secondary)"
    }
  }, "Musique, respiration et contenus pour ralentir.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, ["2 min", "5 min", "10 min", "Libre"].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    active: duration === t,
    onClick: () => setDuration(t)
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, contents.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.title,
    tint: "sauge",
    onClick: onOpenAudio,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      minHeight: 76
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: "50%",
      background: "var(--color-white)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "play",
    style: {
      width: 18,
      height: 18,
      color: "var(--color-prune)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h5", {
    style: {
      margin: "0 0 2px",
      fontSize: 16,
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      color: "var(--text-secondary)"
    }
  }, c.kind, " \xB7 ", c.dur)))))));
}
window.ApaiserScreen = ApaiserScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/ApaiserScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/AudioScreen.jsx
try { (() => {
function AudioScreen({
  onBack
}) {
  const {
    AudioPlayer
  } = window.AuxTroisSentiersDesignSystem_1197ae;
  const [playing, setPlaying] = React.useState(true);
  return /*#__PURE__*/React.createElement(window.ScreenScroll, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 20px 32px",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-card)",
      overflow: "hidden",
      minHeight: 220,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/forest-path.jpg",
    alt: "",
    style: {
      width: "100%",
      height: 220,
      objectFit: "cover",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement(AudioPlayer, {
    title: "Respirer doucement",
    description: "Exercice guid\xE9 de 3 minutes pour ralentir la respiration et retrouver un peu de calme.",
    duration: "3 min",
    playing: playing,
    progress: 0.42,
    onTogglePlay: () => setPlaying(!playing),
    onBack: onBack
  })));
}
window.AudioScreen = AudioScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/AudioScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/ComprendreScreen.jsx
try { (() => {
function ComprendreScreen({
  onNavigate,
  onOpenQuestion
}) {
  const {
    Card,
    Input,
    Header,
    InlineNote
  } = window.AuxTroisSentiersDesignSystem_1197ae;
  const cats = [{
    title: "Ce que je remarque",
    icon: "eye"
  }, {
    title: "Les changements physiques",
    icon: "activity"
  }, {
    title: "Être présent",
    icon: "hand-heart"
  }, {
    title: "Communiquer",
    icon: "message-circle"
  }, {
    title: "Prendre soin de soi",
    icon: "heart"
  }, {
    title: "Les derniers moments",
    icon: "sunrise"
  }];
  return /*#__PURE__*/React.createElement(window.ScreenScroll, null, /*#__PURE__*/React.createElement(Header, {
    title: "Comprendre",
    logo: false,
    onProfileClick: () => onNavigate("profil")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px 32px",
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 28,
      margin: "0 0 6px",
      color: "var(--text-primary)"
    }
  }, "Comprendre"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: 15,
      color: "var(--text-secondary)"
    }
  }, "Des r\xE9ponses simples sur la fin de vie.")), /*#__PURE__*/React.createElement(Input, {
    type: "search",
    placeholder: "Rechercher une question ou un sujet"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, cats.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.title,
    tint: "beige",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      minHeight: 100
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": c.icon,
    style: {
      width: 20,
      height: 20,
      color: "var(--color-prune)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, c.title)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 20,
      margin: "0 0 12px",
      color: "var(--text-primary)"
    }
  }, "Questions fr\xE9quentes"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, ["Peut-il encore m'entendre?", "Pourquoi sa respiration change-t-elle?", "Comment puis-je l'accompagner maintenant?"].map(q => /*#__PURE__*/React.createElement(Card, {
    key: q,
    tint: "white",
    onClick: () => onOpenQuestion(q),
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      minHeight: 44,
      padding: "16px 18px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: "var(--text-primary)"
    }
  }, q), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-right",
    style: {
      width: 18,
      height: 18,
      color: "var(--color-prune)"
    }
  }))))), /*#__PURE__*/React.createElement(InlineNote, null, "L'information g\xE9n\xE9rale offerte ici ne remplace pas les indications de l'\xE9quipe de soins.")));
}
window.ComprendreScreen = ComprendreScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/ComprendreScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/LoginScreen.jsx
try { (() => {
function LoginScreen({
  onLogin
}) {
  const {
    Input,
    Button
  } = window.AuxTroisSentiersDesignSystem_1197ae;
  return /*#__PURE__*/React.createElement(window.ScreenScroll, null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "32px 28px",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-prune)",
      borderRadius: "var(--radius-pill)",
      padding: "14px 22px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo-aux-trois-sentiers-pale.svg",
    alt: "Aux trois sentiers",
    style: {
      height: 32
    }
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: 15,
      color: "var(--text-secondary)"
    }
  }, "Un espace calme pour vous accompagner."), /*#__PURE__*/React.createElement(Input, {
    label: "Courriel",
    type: "email",
    placeholder: "nom@exemple.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Mot de passe",
    type: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
  }), /*#__PURE__*/React.createElement("button", {
    style: {
      background: "none",
      border: "none",
      padding: 0,
      alignSelf: "flex-start",
      color: "var(--color-prune)",
      fontFamily: "var(--font-body)",
      fontSize: 14,
      cursor: "pointer"
    }
  }, "Mot de passe oubli\xE9?"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onLogin,
    style: {
      width: "100%"
    }
  }, "Se connecter")));
}
window.LoginScreen = LoginScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/LoginScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/PenseesScreen.jsx
try { (() => {
function PenseesScreen({
  onNavigate,
  onOpenShare
}) {
  const {
    Card,
    Button,
    Header,
    InlineNote
  } = window.AuxTroisSentiersDesignSystem_1197ae;
  const posts = [{
    author: "Marie, fille de Jean",
    text: "Aujourd'hui, je ressens beaucoup de gratitude d'avoir pu passer l'après-midi avec toi, papa. On a écouté ta musique préférée.",
    time: "Aujourd'hui"
  }, {
    author: "Équipe de soins",
    text: "Un moment que je souhaite retenir : le sourire de madame ce matin, en entendant le chant des oiseaux par la fenêtre.",
    time: "Hier"
  }, {
    author: "Simon, petit-fils",
    text: "J'aimerais te remercier pour toutes les histoires que tu m'as racontées. Elles me suivront toujours.",
    time: "Il y a 2 jours"
  }];
  return /*#__PURE__*/React.createElement(window.ScreenScroll, null, /*#__PURE__*/React.createElement(Header, {
    title: "Pens\xE9es",
    logo: false,
    onProfileClick: () => onNavigate("profil")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px 32px",
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 28,
      margin: "0 0 6px",
      color: "var(--text-primary)"
    }
  }, "Pens\xE9es"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: 15,
      color: "var(--text-secondary)"
    }
  }, "Un espace partag\xE9 pour d\xE9poser un souvenir ou un mot de gratitude.")), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    onClick: onOpenShare,
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "pencil",
    style: {
      width: 18,
      height: 18
    }
  }), "Partager une pens\xE9e"), /*#__PURE__*/React.createElement(InlineNote, null, "Cet espace est destin\xE9 aux pens\xE9es et aux messages de gratitude. Pour une question sur les soins ou une situation urgente, communiquez directement avec l'\xE9quipe."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, posts.map((p, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    tint: "white",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 13,
      color: "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: "var(--color-prune)"
    }
  }, p.author), /*#__PURE__*/React.createElement("span", null, p.time)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: "24px",
      color: "var(--text-primary)"
    }
  }, p.text))))));
}
window.PenseesScreen = PenseesScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/PenseesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/PhoneFrame.jsx
try { (() => {
function PhoneFrame({
  children
}) {
  return React.createElement("div", {
    style: {
      width: 390,
      height: 844,
      margin: "0 auto",
      background: "var(--surface-app)",
      borderRadius: 40,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      boxShadow: "0 20px 60px rgba(48,43,45,0.25)",
      border: "8px solid #1a1a1a",
      position: "relative",
      fontFamily: "var(--font-body)"
    }
  }, children);
}
window.PhoneFrame = PhoneFrame;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/PhoneFrame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/ProfileScreen.jsx
try { (() => {
function ProfileScreen({
  onBack,
  onLogout
}) {
  const {
    Card
  } = window.AuxTroisSentiersDesignSystem_1197ae;
  const rows = [{
    icon: "user-round",
    label: "Renseignements personnels"
  }, {
    icon: "bell",
    label: "Notifications"
  }, {
    icon: "lock",
    label: "Confidentialité"
  }, {
    icon: "circle-help",
    label: "Aide"
  }];
  return /*#__PURE__*/React.createElement(window.ScreenScroll, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 20px 32px",
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: "none",
      border: "none",
      padding: 0,
      display: "flex",
      alignItems: "center",
      gap: 6,
      color: "var(--color-prune)",
      fontFamily: "var(--font-body)",
      fontSize: 15,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-left",
    style: {
      width: 18,
      height: 18
    }
  }), "Retour"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: "50%",
      background: "var(--surface-understand)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "user-round",
    style: {
      width: 26,
      height: 26,
      color: "var(--color-prune)"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    style: {
      margin: 0,
      fontSize: 18,
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, "Marie Tremblay"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      color: "var(--text-secondary)"
    }
  }, "marie.tremblay@exemple.com"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, rows.map(r => /*#__PURE__*/React.createElement(Card, {
    key: r.label,
    tint: "white",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      minHeight: 44,
      padding: "14px 16px"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": r.icon,
    style: {
      width: 18,
      height: 18,
      color: "var(--color-prune)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: "var(--text-primary)"
    }
  }, r.label)))), /*#__PURE__*/React.createElement("button", {
    onClick: onLogout,
    style: {
      background: "none",
      border: "none",
      padding: 0,
      color: "var(--color-corail)",
      fontFamily: "var(--font-body)",
      fontSize: 15,
      fontWeight: 600,
      cursor: "pointer",
      alignSelf: "flex-start"
    }
  }, "Se d\xE9connecter")));
}
window.ProfileScreen = ProfileScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/ProfileScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/QuestionDetailScreen.jsx
try { (() => {
function QuestionDetailScreen({
  question,
  onBack
}) {
  const {
    InlineNote
  } = window.AuxTroisSentiersDesignSystem_1197ae;
  const answers = {
    "Peut-il encore m'entendre?": "Oui, bien souvent. L'ouïe est l'un des derniers sens à s'estomper, même lorsque la personne ne réagit plus visiblement. Parler doucement, dire ce qu'on ressent ou simplement rester présent peut avoir un sens, même en silence apparent.",
    "Pourquoi sa respiration change-t-elle?": "Le corps ralentit naturellement plusieurs fonctions vers la fin de vie. La respiration peut devenir irrégulière, plus lente ou parfois bruyante. C'est une évolution normale, pas nécessairement un signe de souffrance.",
    "Comment puis-je l'accompagner maintenant?": "Il n'y a pas de bonne façon unique. Être présent, tenir sa main, parler doucement ou simplement rester assis à ses côtés sont toutes des formes valables d'accompagnement."
  };
  return /*#__PURE__*/React.createElement(window.ScreenScroll, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 20px 32px",
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: "none",
      border: "none",
      padding: 0,
      display: "flex",
      alignItems: "center",
      gap: 6,
      color: "var(--color-prune)",
      fontFamily: "var(--font-body)",
      fontSize: 15,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-left",
    style: {
      width: 18,
      height: 18
    }
  }), "Retour"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 26,
      lineHeight: "32px",
      margin: 0,
      color: "var(--text-primary)"
    }
  }, question), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: 17,
      lineHeight: "27px",
      color: "var(--text-primary)"
    }
  }, answers[question]), /*#__PURE__*/React.createElement(InlineNote, null, "Chaque situation est diff\xE9rente. Pour des questions pr\xE9cises sur les soins, parlez directement \xE0 l'\xE9quipe.")));
}
window.QuestionDetailScreen = QuestionDetailScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/QuestionDetailScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/ScreenScroll.jsx
try { (() => {
function ScreenScroll({
  children
}) {
  return React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      display: "flex",
      flexDirection: "column"
    }
  }, children);
}
window.ScreenScroll = ScreenScroll;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/ScreenScroll.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/ShareThoughtScreen.jsx
try { (() => {
function ShareThoughtScreen({
  onBack,
  onSubmit
}) {
  const {
    Input,
    Button
  } = window.AuxTroisSentiersDesignSystem_1197ae;
  const prompts = ["Aujourd'hui, je ressens…", "Un moment que je souhaite retenir…", "J'aimerais remercier…", "Une pensée pour notre famille…"];
  const [text, setText] = React.useState("");
  return /*#__PURE__*/React.createElement(window.ScreenScroll, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 20px 32px",
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: "none",
      border: "none",
      padding: 0,
      display: "flex",
      alignItems: "center",
      gap: 6,
      color: "var(--color-prune)",
      fontFamily: "var(--font-body)",
      fontSize: 15,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-left",
    style: {
      width: 18,
      height: 18
    }
  }), "Retour"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 26,
      margin: 0,
      color: "var(--text-primary)"
    }
  }, "Partager une pens\xE9e"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, prompts.map(p => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => setText(p),
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      padding: "8px 14px",
      borderRadius: "var(--radius-pill)",
      border: "1px solid var(--border-soft)",
      background: "var(--color-white)",
      color: "var(--text-primary)",
      cursor: "pointer"
    }
  }, p))), /*#__PURE__*/React.createElement(Input, {
    as: "textarea",
    label: "Ta pens\xE9e",
    placeholder: "\xC9cris ici\u2026",
    value: text,
    onChange: e => setText(e.target.value)
  }), /*#__PURE__*/React.createElement("button", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      background: "none",
      border: "1px dashed var(--border-soft)",
      borderRadius: "var(--radius-field)",
      padding: "14px 16px",
      color: "var(--text-secondary)",
      fontFamily: "var(--font-body)",
      fontSize: 14,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "image",
    style: {
      width: 18,
      height: 18
    }
  }), "Ajouter une photo (facultatif)"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onSubmit,
    style: {
      width: "100%"
    }
  }, "Publier")));
}
window.ShareThoughtScreen = ShareThoughtScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/ShareThoughtScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/SoutienScreen.jsx
try { (() => {
function SoutienScreen({
  onNavigate
}) {
  const {
    Card,
    Header
  } = window.AuxTroisSentiersDesignSystem_1197ae;
  const needs = [{
    title: "J'ai besoin de parler à quelqu'un",
    icon: "phone"
  }, {
    title: "Je ne sais pas quoi faire",
    icon: "compass"
  }, {
    title: "J'ai une question sur les soins",
    icon: "stethoscope"
  }, {
    title: "J'ai besoin d'une ressource",
    icon: "book-open"
  }, {
    title: "Je traverse un moment difficile",
    icon: "hand-heart"
  }];
  return /*#__PURE__*/React.createElement(window.ScreenScroll, null, /*#__PURE__*/React.createElement(Header, {
    title: "Soutien",
    logo: false,
    onProfileClick: () => onNavigate("profil")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px 32px",
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 28,
      margin: "0 0 6px",
      color: "var(--text-primary)"
    }
  }, "Soutien"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: 15,
      color: "var(--text-secondary)"
    }
  }, "Trouver des conseils, des ressources et de l'aide.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, needs.map(n => /*#__PURE__*/React.createElement(Card, {
    key: n.title,
    tint: "prune",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      minHeight: 60
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": n.icon,
    style: {
      width: 20,
      height: 20,
      color: "var(--color-prune)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, n.title)))), /*#__PURE__*/React.createElement(Card, {
    tint: "beige",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("h5", {
    style: {
      margin: 0,
      fontSize: 15,
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, "Contacter l'\xE9quipe"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      color: "var(--text-secondary)"
    }
  }, "Ligne de soutien : 1 800 555-0123 \u2014 disponible en tout temps."))));
}
window.SoutienScreen = SoutienScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/SoutienScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.FaqItem = __ds_scope.FaqItem;

__ds_ns.InlineNote = __ds_scope.InlineNote;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.AudioPlayer = __ds_scope.AudioPlayer;

__ds_ns.Header = __ds_scope.Header;

__ds_ns.NavBar = __ds_scope.NavBar;

})();
