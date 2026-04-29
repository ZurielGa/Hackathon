import { useState } from "react";

// --- Diccionario de Traducciones ---
const translations = {
  es: {
    title: "GastroLens",
    subtitle: "Análisis Gastronómico",
    loginTab: "ACCESO",
    registerTab: "REGISTRO",
    labels: {
      name: "Nombre Completo",
      user: "Usuario",
      pass: "Contraseña",
      confirm: "Confirmar",
    },
    placeholders: {
      name: "Tu nombre",
      user: "correo@ejemplo.com",
      pass: "••••••••",
    },
    buttons: {
      login: "Iniciar Sesión",
      register: "Crear Cuenta",
      loading: "Procesando...",
      toRegister: "¿No tienes cuenta? Regístrate",
      toLogin: "¿Ya tienes una cuenta? Inicia sesión",
    },
  },
  en: {
    title: "GastroLens",
    subtitle: "Gastronomic Analysis",
    loginTab: "ACCESS",
    registerTab: "REGISTER",
    labels: {
      name: "Full Name",
      user: "Username",
      pass: "Password",
      confirm: "Confirm Password",
    },
    placeholders: {
      name: "John Doe",
      user: "email@example.com",
      pass: "••••••••",
    },
    buttons: {
      login: "Log In",
      register: "Sign Up",
      loading: "Processing...",
      toRegister: "New here? Create an account",
      toLogin: "Already have an account? Log in",
    },
  },
};

const MailIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const LockIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);
const UserIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

function CustomInput({ label, type, value, onChange, placeholder, icon }: any) {
  const [show, setShow] = useState(false);
  const isPass = type === "password";

  return (
    <div style={{ marginBottom: "16px", textAlign: "left" }}>
      <label
        style={{
          color: "#a8845a",
          fontSize: "10px",
          fontWeight: "700",
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          marginBottom: "6px",
          display: "block",
          marginLeft: "4px",
        }}
      >
        {label}
      </label>
      <div style={{ position: "relative" }}>
        <span
          style={{
            position: "absolute",
            left: "14px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#c4956a",
            display: "flex",
            opacity: 0.8,
          }}
        >
          {icon}
        </span>
        <input
          type={isPass && !show ? "password" : "text"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          style={{
            width: "100%",
            padding: "12px 42px",
            background: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(196, 149, 106, 0.2)",
            borderRadius: "10px",
            color: "#f5e6d3",
            fontSize: "14px",
            outline: "none",
            transition: "all 0.3s ease",
            boxSizing: "border-box",
          }}
          className="auth-input"
        />
        {isPass && (
          <button
            onClick={() => setShow(!show)}
            type="button"
            style={{
              position: "absolute",
              right: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              color: "#a8845a",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            {show ? "✕" : "○"}
          </button>
        )}
      </div>
    </div>
  );
}

export default function GastroLensAuth() {
  const [view, setView] = useState<"login" | "register">("login");
  const [lang, setLang] = useState<"es" | "en">("es");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    user: "",
    pass: "",
    confirm: "",
  });
  const t = translations[lang];

  const handleAuth = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f0905",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Segoe UI', Roboto, sans-serif",
        padding: "20px",
      }}
    >
      {/* Botón de Idioma más discreto */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          display: "flex",
          gap: "5px",
        }}
      >
        {["es", "en"].map((l) => (
          <button
            key={l}
            onClick={() => setLang(l as any)}
            style={{
              padding: "4px 8px",
              border: "1px solid rgba(196,149,106,0.3)",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "10px",
              background: lang === l ? "#c4754a" : "transparent",
              color: "white",
            }}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Tarjeta Principal con Ancho Controlado */}
      <div
        style={{
          width: "100%",
          maxWidth: "380px", // Reducido para que no se vea gigante
          padding: "40px 30px", // Padding más equilibrado
          borderRadius: "20px",
          textAlign: "center",
          background: "rgba(28, 17, 10, 0.9)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(196, 149, 106, 0.15)",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.6)",
          position: "relative",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "30px" }}>
          <div
            style={{
              width: "50px",
              height: "50px",
              background: "linear-gradient(135deg, #c4754a, #8b4513)",
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 15px",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <h1
            style={{
              color: "#f5e6d3",
              fontSize: "22px",
              fontWeight: "700",
              margin: "0 0 4px",
              letterSpacing: "1px",
            }}
          >
            {t.title}
          </h1>
          <p
            style={{
              color: "#a8845a",
              fontSize: "10px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              opacity: 0.8,
            }}
          >
            {t.subtitle}
          </p>
        </div>

        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(196, 149, 106, 0.2), transparent)",
            marginBottom: "25px",
          }}
        />

        {/* Formulario contenido */}
        <div style={{ padding: "0 5px" }}>
          {view === "register" && (
            <CustomInput
              label={t.labels.name}
              value={form.name}
              onChange={(v: string) => setForm({ ...form, name: v })}
              placeholder={t.placeholders.name}
              icon={<UserIcon />}
            />
          )}
          <CustomInput
            label={t.labels.user}
            value={form.user}
            onChange={(v: string) => setForm({ ...form, user: v })}
            placeholder={t.placeholders.user}
            icon={<MailIcon />}
          />
          <CustomInput
            label={t.labels.pass}
            type="password"
            value={form.pass}
            onChange={(v: string) => setForm({ ...form, pass: v })}
            placeholder={t.placeholders.pass}
            icon={<LockIcon />}
          />

          <button
            onClick={handleAuth}
            disabled={loading}
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "10px",
              border: "none",
              marginTop: "15px",
              fontWeight: "700",
              fontSize: "14px",
              background: "linear-gradient(90deg, #c4754a, #9c5230)",
              color: "white",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            {loading
              ? t.buttons.loading
              : view === "login"
                ? t.buttons.login
                : t.buttons.register}
          </button>

          <button
            onClick={() => setView(view === "login" ? "register" : "login")}
            style={{
              background: "none",
              border: "none",
              color: "#a8845a",
              marginTop: "20px",
              fontSize: "12px",
              cursor: "pointer",
              opacity: 0.9,
            }}
          >
            {view === "login" ? t.buttons.toRegister : t.buttons.toLogin}
          </button>
        </div>
      </div>

      <style>{`
        .auth-input:focus { border-color: #e8a96e !important; background: rgba(255,248,240,0.06) !important; }
        input::placeholder { color: rgba(168, 132, 90, 0.4); }
      `}</style>
    </div>
  );
}
