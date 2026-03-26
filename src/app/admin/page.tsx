"use client";
import { useState, useEffect } from "react";
import type { SiteContent, MenuItem, SucursalLocation } from "@/lib/content";

// ─── Reusable UI ───
function Section({ title, open, onToggle, children }: { title: string; open: boolean; onToggle: () => void; children: React.ReactNode }) {
  return (
    <div className="border border-[#2a2a2a] rounded-2xl overflow-hidden">
      <button onClick={onToggle} className="w-full flex items-center justify-between px-6 py-4 bg-[#1a1a1a] hover:bg-[#222] transition-colors text-left">
        <span className="text-white font-bold text-lg">{title}</span>
        <span className="text-gray-400 text-xl">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="p-6 bg-[#111] space-y-4">{children}</div>}
    </div>
  );
}

function Field({ label, value, onChange, textarea }: { label: string; value: string; onChange: (v: string) => void; textarea?: boolean }) {
  const cls = "w-full bg-[#1a1a1a] border border-[#333] rounded-lg px-4 py-2.5 text-white text-sm focus:border-[#E53935] focus:outline-none";
  return (
    <div>
      <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1 block">{label}</label>
      {textarea ? (
        <textarea value={value} onChange={(e) => onChange(e.target.value)} rows={3} className={cls} />
      ) : (
        <input value={value} onChange={(e) => onChange(e.target.value)} className={cls} />
      )}
    </div>
  );
}

function TagList({ label, items, onChange }: { label: string; items: string[]; onChange: (items: string[]) => void }) {
  const [newTag, setNewTag] = useState("");
  return (
    <div>
      <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2 block">{label}</label>
      <div className="flex flex-wrap gap-2 mb-2">
        {items.map((item, i) => (
          <span key={i} className="bg-[#1a1a1a] border border-[#333] text-gray-300 text-sm px-3 py-1 rounded-full flex items-center gap-2">
            {item}
            <button onClick={() => onChange(items.filter((_, j) => j !== i))} className="text-red-500 hover:text-red-400">×</button>
          </span>
        ))}
      </div>
      <div className="flex gap-2">
        <input value={newTag} onChange={(e) => setNewTag(e.target.value)} placeholder="Agregar..." className="bg-[#1a1a1a] border border-[#333] rounded-lg px-3 py-1.5 text-white text-sm flex-1" onKeyDown={(e) => { if (e.key === "Enter" && newTag.trim()) { onChange([...items, newTag.trim()]); setNewTag(""); } }} />
        <button onClick={() => { if (newTag.trim()) { onChange([...items, newTag.trim()]); setNewTag(""); } }} className="bg-[#333] text-white px-3 py-1.5 rounded-lg text-sm hover:bg-[#444]">+</button>
      </div>
    </div>
  );
}

// ─── Menu Item Editor ───
function MenuItemEditor({ item, onChange, onRemove }: { item: MenuItem; onChange: (item: MenuItem) => void; onRemove: () => void }) {
  const update = (key: string, val: string) => onChange({ ...item, [key]: val });
  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4 space-y-3">
      <div className="flex justify-between items-start">
        <span className="text-2xl">{item.emoji}</span>
        <button onClick={onRemove} className="text-red-500 text-sm hover:text-red-400">Eliminar</button>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Field label="Nombre" value={item.name} onChange={(v) => update("name", v)} />
        <Field label="Emoji" value={item.emoji} onChange={(v) => update("emoji", v)} />
      </div>
      <Field label="Descripción" value={item.desc} onChange={(v) => update("desc", v)} />
      <div className="grid grid-cols-3 gap-3">
        <Field label="Color" value={item.color} onChange={(v) => update("color", v)} />
        <Field label="Imagen (ruta)" value={item.image || ""} onChange={(v) => update("image", v)} />
        <Field label="Badge" value={item.badge || ""} onChange={(v) => update("badge", v)} />
      </div>
    </div>
  );
}

// ─── Sucursal Editor ───
function SucursalEditor({ loc, onChange, onRemove }: { loc: SucursalLocation; onChange: (loc: SucursalLocation) => void; onRemove: () => void }) {
  const update = (key: string, val: unknown) => onChange({ ...loc, [key]: val });
  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4 space-y-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full" style={{ backgroundColor: loc.color }} />
          <span className="text-white font-bold">{loc.name || "Nueva sucursal"}</span>
        </div>
        <button onClick={onRemove} className="text-red-500 text-sm hover:text-red-400">Eliminar</button>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Field label="Nombre" value={loc.name} onChange={(v) => update("name", v)} />
        <Field label="Subtítulo" value={loc.subtitle || ""} onChange={(v) => update("subtitle", v)} />
      </div>
      <Field label="Dirección" value={loc.address} onChange={(v) => update("address", v)} />
      <div className="grid grid-cols-2 gap-3">
        <Field label="Horario entre semana" value={loc.hours.weekday} onChange={(v) => update("hours", { ...loc.hours, weekday: v })} />
        <Field label="Horario fin de semana" value={loc.hours.weekend} onChange={(v) => update("hours", { ...loc.hours, weekend: v })} />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Field label="Teléfono" value={loc.phone || ""} onChange={(v) => update("phone", v)} />
        <Field label="Color" value={loc.color} onChange={(v) => update("color", v)} />
      </div>
      <Field label="Link Google Maps" value={loc.mapUrl} onChange={(v) => update("mapUrl", v)} />
      <div>
        <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1 block">Tipo</label>
        <select value={loc.tipo} onChange={(e) => update("tipo", e.target.value)} className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg px-4 py-2.5 text-white text-sm focus:border-[#E53935] focus:outline-none">
          <option value="Consumo en establecimiento">Consumo en establecimiento</option>
          <option value="Para llevar">Para llevar</option>
        </select>
      </div>
    </div>
  );
}

// ─── Login Screen ───
function LoginScreen({ onLogin }: { onLogin: (token: string) => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "login", password }),
      });
      const data = await res.json();
      if (res.ok) {
        onLogin(data.token);
      } else {
        setError(data.error || "Error");
      }
    } catch {
      setError("Error de conexión");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
      <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-3xl p-8 w-full max-w-sm">
        <h1 className="text-2xl font-black text-white text-center mb-2">Admin Portal</h1>
        <p className="text-gray-500 text-center text-sm mb-8">Ke-Tomate</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleLogin()}
          placeholder="Contraseña"
          className="w-full bg-[#111] border border-[#333] rounded-xl px-4 py-3 text-white mb-4 focus:border-[#E53935] focus:outline-none"
        />
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-[#E53935] hover:bg-[#C62828] text-white font-bold py-3 rounded-xl transition-colors disabled:opacity-50"
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </div>
    </div>
  );
}

// ─── Main Admin Panel ───
export default function AdminPage() {
  const [token, setToken] = useState<string | null>(null);
  const [content, setContent] = useState<SiteContent | null>(null);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    if (token) {
      fetch("/content.json")
        .then((r) => r.json())
        .then((data) => setContent(data))
        .catch(() => setMessage({ type: "error", text: "Error al cargar contenido" }));
    }
  }, [token]);

  const toggle = (key: string) => setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));

  const publish = async () => {
    if (!content || !token) return;
    setSaving(true);
    setMessage(null);
    try {
      const res = await fetch("/api/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "publish", token, content }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage({ type: "success", text: data.message });
      } else {
        setMessage({ type: "error", text: data.error || "Error al publicar" });
      }
    } catch {
      setMessage({ type: "error", text: "Error de conexión" });
    }
    setSaving(false);
  };

  if (!token) return <LoginScreen onLogin={setToken} />;
  if (!content) return <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-white">Cargando...</div>;

  const update = (path: string[], value: unknown) => {
    setContent((prev) => {
      if (!prev) return prev;
      const clone = JSON.parse(JSON.stringify(prev));
      let obj: Record<string, unknown> = clone;
      for (let i = 0; i < path.length - 1; i++) {
        obj = obj[path[i]] as Record<string, unknown>;
      }
      obj[path[path.length - 1]] = value;
      return clone;
    });
  };

  const newMenuItem = (): MenuItem => ({ name: "", desc: "", emoji: "🍹", color: "#E53935" });
  const newSucursal = (): SucursalLocation => ({ name: "", address: "", hours: { weekday: "", weekend: "" }, mapUrl: "", color: "#E53935", tipo: "Para llevar" });

  return (
    <div className="min-h-screen bg-[#0a0a0a] pb-32">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#2a2a2a] px-4 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-white font-bold text-lg">Admin Portal</h1>
            <p className="text-gray-500 text-xs">Ke-Tomate</p>
          </div>
          <button onClick={() => setToken(null)} className="text-gray-500 hover:text-white text-sm">Cerrar sesión</button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pt-6 space-y-4">
        {/* ── Hero ── */}
        <Section title="Hero (Portada)" open={!!openSections.hero} onToggle={() => toggle("hero")}>
          <Field label="Tagline" value={content.hero.tagline} onChange={(v) => update(["hero", "tagline"], v)} />
          <Field label="Subtítulo" value={content.hero.subtitle} onChange={(v) => update(["hero", "subtitle"], v)} />
        </Section>

        {/* ── About ── */}
        <Section title="Nosotros" open={!!openSections.about} onToggle={() => toggle("about")}>
          {content.about.paragraphs.map((p, i) => (
            <div key={i} className="flex gap-2">
              <div className="flex-1">
                <Field label={`Párrafo ${i + 1}`} value={p} onChange={(v) => { const arr = [...content.about.paragraphs]; arr[i] = v; update(["about", "paragraphs"], arr); }} textarea />
              </div>
              <button onClick={() => update(["about", "paragraphs"], content.about.paragraphs.filter((_, j) => j !== i))} className="text-red-500 text-sm mt-6 hover:text-red-400">×</button>
            </div>
          ))}
          <button onClick={() => update(["about", "paragraphs"], [...content.about.paragraphs, ""])} className="text-[#FFC107] text-sm hover:text-[#E53935]">+ Agregar párrafo</button>
          <hr className="border-[#2a2a2a]" />
          <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider block">Estadísticas</label>
          {content.about.stats.map((stat, i) => (
            <div key={i} className="grid grid-cols-3 gap-3">
              <Field label="Número" value={stat.number} onChange={(v) => { const arr = [...content.about.stats]; arr[i] = { ...arr[i], number: v }; update(["about", "stats"], arr); }} />
              <Field label="Etiqueta" value={stat.label} onChange={(v) => { const arr = [...content.about.stats]; arr[i] = { ...arr[i], label: v }; update(["about", "stats"], arr); }} />
              <Field label="Color" value={stat.color} onChange={(v) => { const arr = [...content.about.stats]; arr[i] = { ...arr[i], color: v }; update(["about", "stats"], arr); }} />
            </div>
          ))}
        </Section>

        {/* ── Animation ── */}
        <Section title="Animación (texto)" open={!!openSections.animation} onToggle={() => toggle("animation")}>
          <Field label="Título" value={content.animation.title} onChange={(v) => update(["animation", "title"], v)} />
          <Field label="Título resaltado (rojo)" value={content.animation.titleHighlight} onChange={(v) => update(["animation", "titleHighlight"], v)} />
          <Field label="Subtítulo" value={content.animation.subtitle} onChange={(v) => update(["animation", "subtitle"], v)} />
        </Section>

        {/* ── Menu: Micheladas ── */}
        <Section title="Menú - Micheladas" open={!!openSections.micheladas} onToggle={() => toggle("micheladas")}>
          <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider block">Pasos (cómo armar tu michelada)</label>
          {content.menu.micheladaSteps.map((step, i) => (
            <Field key={i} label={`Paso ${i + 1}`} value={step} onChange={(v) => { const arr = [...content.menu.micheladaSteps]; arr[i] = v; update(["menu", "micheladaSteps"], arr); }} />
          ))}
          <hr className="border-[#2a2a2a]" />
          <div className="space-y-4">
            {content.menu.micheladas.map((item, i) => (
              <MenuItemEditor key={i} item={item} onChange={(updated) => { const arr = [...content.menu.micheladas]; arr[i] = updated; update(["menu", "micheladas"], arr); }} onRemove={() => update(["menu", "micheladas"], content.menu.micheladas.filter((_, j) => j !== i))} />
            ))}
          </div>
          <button onClick={() => update(["menu", "micheladas"], [...content.menu.micheladas, newMenuItem()])} className="text-[#FFC107] text-sm hover:text-[#E53935]">+ Agregar michelada</button>
          <hr className="border-[#2a2a2a]" />
          <TagList label="Pulpas" items={content.menu.pulpas} onChange={(v) => update(["menu", "pulpas"], v)} />
          <TagList label="Escarchados" items={content.menu.escarchados} onChange={(v) => update(["menu", "escarchados"], v)} />
          <TagList label="Cervezas" items={content.menu.cervezas} onChange={(v) => update(["menu", "cervezas"], v)} />
        </Section>

        {/* ── Menu: Tragos ── */}
        <Section title="Menú - Tragos" open={!!openSections.tragos} onToggle={() => toggle("tragos")}>
          <div className="space-y-4">
            {content.menu.tragos.map((item, i) => (
              <MenuItemEditor key={i} item={item} onChange={(updated) => { const arr = [...content.menu.tragos]; arr[i] = updated; update(["menu", "tragos"], arr); }} onRemove={() => update(["menu", "tragos"], content.menu.tragos.filter((_, j) => j !== i))} />
            ))}
          </div>
          <button onClick={() => update(["menu", "tragos"], [...content.menu.tragos, newMenuItem()])} className="text-[#FFC107] text-sm hover:text-[#E53935]">+ Agregar trago</button>
        </Section>

        {/* ── Menu: Botanas ── */}
        <Section title="Menú - Botanas" open={!!openSections.botanas} onToggle={() => toggle("botanas")}>
          <div className="space-y-4">
            {content.menu.botanas.map((item, i) => (
              <MenuItemEditor key={i} item={item} onChange={(updated) => { const arr = [...content.menu.botanas]; arr[i] = updated; update(["menu", "botanas"], arr); }} onRemove={() => update(["menu", "botanas"], content.menu.botanas.filter((_, j) => j !== i))} />
            ))}
          </div>
          <button onClick={() => update(["menu", "botanas"], [...content.menu.botanas, newMenuItem()])} className="text-[#FFC107] text-sm hover:text-[#E53935]">+ Agregar botana</button>
        </Section>

        {/* ── Eventos ── */}
        <Section title="Eventos" open={!!openSections.eventos} onToggle={() => toggle("eventos")}>
          <Field label="Descripción" value={content.eventos.description} onChange={(v) => update(["eventos", "description"], v)} textarea />
          <Field label="Imagen (ruta)" value={content.eventos.imageSrc} onChange={(v) => update(["eventos", "imageSrc"], v)} />
          <Field label="Texto del botón" value={content.eventos.ctaText} onChange={(v) => update(["eventos", "ctaText"], v)} />
          <Field label="URL del botón" value={content.eventos.ctaUrl} onChange={(v) => update(["eventos", "ctaUrl"], v)} />
          <hr className="border-[#2a2a2a]" />
          <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider block">Características</label>
          {content.eventos.features.map((f, i) => (
            <div key={i} className="flex gap-3 items-end">
              <div className="w-16"><Field label="Icono" value={f.icon} onChange={(v) => { const arr = [...content.eventos.features]; arr[i] = { ...arr[i], icon: v }; update(["eventos", "features"], arr); }} /></div>
              <div className="flex-1"><Field label="Texto" value={f.text} onChange={(v) => { const arr = [...content.eventos.features]; arr[i] = { ...arr[i], text: v }; update(["eventos", "features"], arr); }} /></div>
              <button onClick={() => update(["eventos", "features"], content.eventos.features.filter((_, j) => j !== i))} className="text-red-500 mb-1 hover:text-red-400">×</button>
            </div>
          ))}
          <button onClick={() => update(["eventos", "features"], [...content.eventos.features, { icon: "✨", text: "" }])} className="text-[#FFC107] text-sm hover:text-[#E53935]">+ Agregar característica</button>
        </Section>

        {/* ── Sucursales ── */}
        <Section title="Sucursales" open={!!openSections.sucursales} onToggle={() => toggle("sucursales")}>
          <Field label="Descripción general" value={content.sucursales.description} onChange={(v) => update(["sucursales", "description"], v)} textarea />
          <hr className="border-[#2a2a2a]" />
          <div className="space-y-4">
            {content.sucursales.locations.map((loc, i) => (
              <SucursalEditor key={i} loc={loc} onChange={(updated) => { const arr = [...content.sucursales.locations]; arr[i] = updated; update(["sucursales", "locations"], arr); }} onRemove={() => update(["sucursales", "locations"], content.sucursales.locations.filter((_, j) => j !== i))} />
            ))}
          </div>
          <button onClick={() => update(["sucursales", "locations"], [...content.sucursales.locations, newSucursal()])} className="text-[#FFC107] text-sm hover:text-[#E53935]">+ Agregar sucursal</button>
        </Section>

        {/* ── Franquicias ── */}
        <Section title="Franquicias" open={!!openSections.franquicias} onToggle={() => toggle("franquicias")}>
          <Field label="Subtítulo" value={content.franquicias.subtitle} onChange={(v) => update(["franquicias", "subtitle"], v)} textarea />
          <Field label="Email de contacto" value={content.franquicias.email} onChange={(v) => update(["franquicias", "email"], v)} />
          <hr className="border-[#2a2a2a]" />
          <label className="text-gray-400 text-xs font-semibold uppercase tracking-wider block">Beneficios</label>
          {content.franquicias.benefits.map((b, i) => (
            <div key={i} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-2xl">{b.icon}</span>
                <button onClick={() => update(["franquicias", "benefits"], content.franquicias.benefits.filter((_, j) => j !== i))} className="text-red-500 text-sm hover:text-red-400">Eliminar</button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Field label="Icono" value={b.icon} onChange={(v) => { const arr = [...content.franquicias.benefits]; arr[i] = { ...arr[i], icon: v }; update(["franquicias", "benefits"], arr); }} />
                <Field label="Título" value={b.title} onChange={(v) => { const arr = [...content.franquicias.benefits]; arr[i] = { ...arr[i], title: v }; update(["franquicias", "benefits"], arr); }} />
              </div>
              <Field label="Descripción" value={b.desc} onChange={(v) => { const arr = [...content.franquicias.benefits]; arr[i] = { ...arr[i], desc: v }; update(["franquicias", "benefits"], arr); }} textarea />
            </div>
          ))}
          <button onClick={() => update(["franquicias", "benefits"], [...content.franquicias.benefits, { icon: "✨", title: "", desc: "" }])} className="text-[#FFC107] text-sm hover:text-[#E53935]">+ Agregar beneficio</button>
        </Section>

        {/* ── Contact ── */}
        <Section title="Contacto (redes sociales)" open={!!openSections.contact} onToggle={() => toggle("contact")}>
          {content.contact.links.map((link, i) => (
            <div key={i} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-white font-bold">{link.name}</span>
                <button onClick={() => update(["contact", "links"], content.contact.links.filter((_, j) => j !== i))} className="text-red-500 text-sm hover:text-red-400">Eliminar</button>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <Field label="Nombre" value={link.name} onChange={(v) => { const arr = [...content.contact.links]; arr[i] = { ...arr[i], name: v }; update(["contact", "links"], arr); }} />
                <Field label="Handle" value={link.handle} onChange={(v) => { const arr = [...content.contact.links]; arr[i] = { ...arr[i], handle: v }; update(["contact", "links"], arr); }} />
                <Field label="URL" value={link.url} onChange={(v) => { const arr = [...content.contact.links]; arr[i] = { ...arr[i], url: v }; update(["contact", "links"], arr); }} />
              </div>
            </div>
          ))}
        </Section>
      </div>

      {/* ── Sticky Publish Bar ── */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-md border-t border-[#2a2a2a] px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          {message && (
            <p className={`text-sm flex-1 ${message.type === "success" ? "text-green-400" : "text-red-400"}`}>
              {message.text}
            </p>
          )}
          <button
            onClick={publish}
            disabled={saving}
            className="ml-auto px-8 py-3 bg-[#E53935] hover:bg-[#C62828] text-white font-bold rounded-full transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 shadow-[0_0_20px_rgba(229,57,53,0.3)]"
          >
            {saving ? "Publicando..." : "Actualizar Sitio"}
          </button>
        </div>
      </div>
    </div>
  );
}
