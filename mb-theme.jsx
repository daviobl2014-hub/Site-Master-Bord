// theme.jsx — tokens + componentes industriais compartilhados

const MB = {
  bg: '#0F1116',
  bgSoft: '#181B22',
  bgDeep: '#0A0C10',
  card: '#20242D',
  cardHover: '#262B36',
  paper: '#F2ECE0',
  paperDim: '#D4CFC3',
  azul: '#4A8BD6',
  azulGlow: '#6BA8E8',
  azulDeep: '#2E5A9A',
  vinho: '#C44B55',
  vinhoGlow: '#E56670',
  vinhoDeep: '#8A2E35',
  ouro: '#D4A96A',
  ouroDim: '#9A7A45',
  muted: '#8B8F99',
  mutedSoft: '#5A6070',
  line: '#2E3340',
  lineSoft: '#1F2430',
  green: '#7FC291',
};

// Fontes: Bauhaus (logo/títulos), Inter (UI), JetBrains Mono (mono)
const FONT = {
  display: 'Bauhaus, "Space Grotesk", sans-serif',
  sans: 'Inter, system-ui, sans-serif',
  mono: '"JetBrains Mono", ui-monospace, monospace',
  serif: '"Playfair Display", serif',
};

// ─── Etiquetas técnicas tipo [ SECTION ] ────────────────────
function MBTag({ children, color, mobile }) {
  return (
    <div style={{fontFamily: FONT.mono, fontSize: mobile?10:11, color: color||MB.ouro, letterSpacing: '0.25em', textTransform: 'uppercase'}}>
      [ {children} ]
    </div>
  );
}

// ─── Título grande industrial ────────────────────────────────
function MBTitle({ children, mobile, size = 'lg', style = {} }) {
  const sizes = { xl: mobile?44:84, lg: mobile?32:56, md: mobile?26:40, sm: mobile?20:28 };
  return (
    <h2 style={{fontFamily: FONT.display, fontWeight: 700, fontSize: sizes[size], margin: 0, lineHeight: 0.95, letterSpacing: '-0.02em', color: MB.paper, ...style}}>{children}</h2>
  );
}

// ─── Divisor pontilhado ──────────────────────────────────────
function MBDivider({ color, vertical, length = '100%' }) {
  if (vertical) return <div style={{width: 1, height: length, background: color||MB.line}}/>;
  return <div style={{height: 1, width: length, background: color||MB.line}}/>;
}

// ─── Botão primário ──────────────────────────────────────────
function MBButton({ children, variant = 'primary', mobile, style = {}, onClick }) {
  const variants = {
    primary: { bg: MB.vinho, color: MB.paper, border: MB.vinho },
    secondary: { bg: 'transparent', color: MB.azulGlow, border: MB.azul },
    ghost: { bg: 'transparent', color: MB.paper, border: MB.line },
    gold: { bg: MB.ouro, color: MB.bg, border: MB.ouro },
  };
  const v = variants[variant];
  return (
    <button onClick={onClick} style={{
      padding: mobile?'12px 18px':'16px 24px',
      background: v.bg, color: v.color,
      border: `1px solid ${v.border}`,
      fontFamily: FONT.sans, fontSize: mobile?12:13, fontWeight: 600,
      letterSpacing: '0.1em', textTransform: 'uppercase',
      cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 10,
      ...style,
    }}>{children}</button>
  );
}

// ─── Card com faixa colorida lateral ─────────────────────────
function MBCard({ children, accent, mobile, style = {}, onClick }) {
  return (
    <div onClick={onClick} style={{
      background: MB.card, border: `1px solid ${MB.line}`,
      padding: mobile?20:24, position: 'relative', overflow: 'hidden',
      ...style,
    }}>
      {accent && <div style={{position: 'absolute', top: 0, left: 0, width: 3, height: '100%', background: accent, boxShadow: `0 0 20px ${accent}80`}}/>}
      {children}
    </div>
  );
}

// ─── Grid técnica de fundo ───────────────────────────────────
function MBTechGrid({ opacity = 0.3 }) {
  return <div style={{position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${MB.line} 1px, transparent 1px), linear-gradient(90deg, ${MB.line} 1px, transparent 1px)`, backgroundSize: '80px 80px', opacity, pointerEvents: 'none'}}/>;
}

// ─── Logo MB (Bauhaus em miniatura) ──────────────────────────
function MBLogo({ size = 18 }) {
  return (
    <div style={{fontFamily: FONT.display, fontWeight: 700, fontSize: size, lineHeight: 1, letterSpacing: '-0.02em'}}>
      <span style={{color: MB.azul}}>Master</span><span style={{color: MB.vinho}}>Bord</span><span style={{color: MB.ouro}}>.</span>
    </div>
  );
}

// ─── Placeholder de imagem com pattern ───────────────────────
function MBImage({ color, label, ratio = '4/3', angle, children, style = {} }) {
  const c = color || MB.azul;
  const a = angle ?? Math.floor(Math.random()*90);
  return (
    <div style={{aspectRatio: ratio, background: MB.card, position: 'relative', overflow: 'hidden', border: `1px solid ${MB.line}`, ...style}}>
      <div style={{position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${c}30, transparent 60%)`}}/>
      <div style={{position: 'absolute', inset: 0, backgroundImage: `repeating-linear-gradient(${a}deg, transparent 0 6px, ${c}20 6px 7px)`}}/>
      <div style={{position: 'absolute', inset: 14, border: `1px dashed ${c}50`}}/>
      {label && <div style={{position: 'absolute', top: 16, left: 16, fontFamily: FONT.mono, fontSize: 10, color: MB.muted, letterSpacing: '0.2em', textTransform: 'uppercase'}}>{label}</div>}
      {children}
    </div>
  );
}

// ─── Ícone simples desenhado em CSS (spec/nº) ────────────────
function MBSpecRow({ k, v, color }) {
  return (
    <div style={{fontFamily: FONT.mono, fontSize: 11, display: 'flex', justifyContent: 'space-between', color: MB.muted, borderBottom: `1px dashed ${MB.line}`, paddingBottom: 6, marginBottom: 6}}>
      <span>{k}</span><span style={{color: color||MB.paper}}>{v}</span>
    </div>
  );
}

Object.assign(window, { MB, FONT, MBTag, MBTitle, MBDivider, MBButton, MBCard, MBTechGrid, MBLogo, MBImage, MBSpecRow });
