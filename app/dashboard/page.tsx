"use client";

type Employee = {
  id: number;
  initial: string;
  name: string;
  email: string;
  role: string;
};

const employees: Employee[] = [
  { id: 1, initial: "J", name: "Jovan Juan", email: "JovanJJ@gmail.com", role: "HRMS" },
  { id: 2, initial: "H", name: "Hendro Saputra", email: "HendroSapt67@gmail.com", role: "HRMS" },
  { id: 3, initial: "A", name: "Ahmad Syahreza", email: "RezaAhmad@gmail.com", role: "HRMS" },
  { id: 4, initial: "K", name: "Kresna Made", email: "Made12Kresna@gmail.com", role: "HRMS" },
  { id: 5, initial: "G", name: "Genaro Arya", email: "Genaro16@gmail.com", role: "HRMS" },
  { id: 6, initial: "D", name: "Dimas Wibowo", email: "DimasWibo45@gmail.com", role: "HRMS" },
];

/* =========================
   SVG ICONS
========================= */

function AccountIcon() {
  return (
    <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", flexShrink: 0, fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="12" cy="9" r="3" />
      <path d="M7 19c.7-3 2.4-4.5 5-4.5s4.3 1.5 5 4.5" />
    </svg>
  );
}

function ActivityIcon() {
  return (
    <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", flexShrink: 0, fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }}>
      <circle cx="7" cy="8" r="3" />
      <circle cx="17" cy="8" r="3" />
      <path d="M2.5 19c.5-3 2-4.5 4.5-4.5S11 16 11.5 19" />
      <path d="M12.5 19c.5-3 2-4.5 4.5-4.5s4 1.5 4.5 4.5" />
    </svg>
  );
}

function LoginIcon() {
  return (
    <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", flexShrink: 0, fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="9" r="2.5" />
      <path d="M7.5 18c.7-2.8 2.2-4.2 4.5-4.2s3.8 1.4 4.5 4.2" />
    </svg>
  );
}

function EditIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: "18px", height: "18px", display: "block", color: "#475569", fill: "currentColor" }}>
      <path d="M4.5 16.9V20h3.1L18.7 8.9l-3.1-3.1L4.5 16.9Z" fill="currentColor" />
      <path d="M14.5 7.7l3.1 3.1" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function DisableIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: "18px", height: "18px", display: "block", color: "#475569", fill: "currentColor" }}>
      <path d="M8.2 8.3a3.2 3.2 0 1 1 6.4 0 3.2 3.2 0 0 1-6.4 0Z" fill="currentColor" />
      <path d="M5.7 19.2c.4-3.1 2.3-5 5.7-5s5.3 1.9 5.7 5" fill="currentColor" />
      <path d="M5 5l14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function LogoutIcon() {
  return (
    <svg viewBox="0 0 28 28" aria-hidden="true" style={{ width: "22px", height: "22px", flexShrink: 0, color: "#f42d5b", fill: "none" }}>
      <path d="M17 4H7.5C6.7 4 6 4.7 6 5.5v17c0 .8.7 1.5 1.5 1.5H17" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M12 14h11" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M19 9l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" style={{ width: "18px", height: "18px", fill: "none", stroke: "#fff", strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" }}>
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg viewBox="0 0 24 24" style={{ width: "14px", height: "14px", fill: "none", stroke: "#fff", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

/* =========================
   SMKI PAGE
========================= */

export default function SmkiPage() {
  return (
    <main style={{ width: "100vw", height: "100vh", display: "flex", background: "#000", overflow: "hidden", fontFamily: "Arial, Helvetica, sans-serif", margin: 0, padding: 0, boxSizing: "border-box" }}>

      {/* SIDEBAR */}

      <aside style={{ width: "240px", height: "100vh", flexShrink: 0, position: "relative", padding: "25px 16px", background: "#07111f", color: "#fff", display: "flex", flexDirection: "column", boxSizing: "border-box" }}>

        {/* PROFILE */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
          <div style={{ width: "45px", height: "45px", borderRadius: "50%", background: "#8057e8", flexShrink: 0 }} />
          <div>
            <div style={{ color: "#fff", fontSize: "15px", fontWeight: 800, letterSpacing: "0.2px" }}>ANDIMA</div>
            <div style={{ color: "#b9c1ca", fontSize: "11px", marginTop: "2px" }}>IT & Security Admin</div>
            <div style={{ color: "#b9c1ca", fontSize: "11px", marginTop: "1px" }}>@admin_smki</div>
          </div>
        </div>

        {/* COLLAPSE BUTTON */}
        <button style={{ position: "absolute", top: "28px", right: "-12px", width: "26px", height: "26px", borderRadius: "50%", background: "#8057e8", border: 0, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", zIndex: 10, boxShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>
          <ChevronLeftIcon />
        </button>

        {/* NAVIGATION */}
        <nav style={{ display: "flex", flexDirection: "column", gap: "12px", flex: 1, marginTop: "15px" }}>
          <button style={{ width: "100%", height: "42px", padding: "0 16px", border: 0, borderRadius: "10px", background: "#8057e8", color: "#fff", display: "flex", alignItems: "center", gap: "12px", fontSize: "13px", fontWeight: 700, cursor: "pointer", textAlign: "left" }}>
            <AccountIcon />
            <span>Account Maintains</span>
          </button>

          <button style={{ width: "100%", height: "42px", padding: "0 16px", border: 0, borderRadius: "10px", background: "transparent", color: "#94a3b8", display: "flex", alignItems: "center", gap: "12px", fontSize: "13px", fontWeight: 700, cursor: "pointer", textAlign: "left" }}>
            <ActivityIcon />
            <span>Log Activity</span>
          </button>

          <button style={{ width: "100%", height: "42px", padding: "0 16px", border: 0, borderRadius: "10px", background: "transparent", color: "#94a3b8", display: "flex", alignItems: "center", gap: "12px", fontSize: "13px", fontWeight: 700, cursor: "pointer", textAlign: "left" }}>
            <LoginIcon />
            <span>Log Login</span>
          </button>
        </nav>

        {/* LOGOUT */}
        <button style={{ width: "100%", height: "40px", padding: "0 12px", border: 0, background: "transparent", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", fontSize: "14px", fontWeight: 600, marginTop: "auto" }}>
          <span>Logout</span>
          <LogoutIcon />
        </button>

      </aside>

      {/* MAIN CONTENT */}

      <section style={{ flex: 1, height: "100vh", background: "#f8f9fc", display: "flex", flexDirection: "column", overflow: "hidden", boxSizing: "border-box" }}>

        {/* HEADER */}
        <header style={{ width: "100%", height: "72px", minHeight: "72px", padding: "0 28px", background: "#0d1b2a", color: "#fff", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0, boxSizing: "border-box" }}>
          <div>
            <div style={{ fontSize: "12px", fontWeight: 800, color: "#8057e8", letterSpacing: "1px" }}>ANDIMA MID</div>
            <div style={{ fontSize: "18px", fontWeight: 700, marginTop: "2px" }}>SMKI Employee Dashboard</div>
          </div>

          <button style={{ padding: "8px 16px", border: "1px solid #202d3d", borderRadius: "8px", background: "#172536", color: "#fff", display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", fontWeight: 600, cursor: "pointer" }}>
            <span>Filter Divisi: All</span>
            <ChevronDownIcon />
          </button>
        </header>

        {/* CONTENT & TABLE */}
        <div style={{ flex: 1, padding: "28px", background: "#f8f9fc", overflowY: "auto", boxSizing: "border-box" }}>

          <div style={{ background: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0", boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)", overflow: "hidden", width: "100%" }}>

            {/* TABLE HEADER */}
            <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1.5fr 1fr 0.8fr", alignItems: "center", padding: "14px 20px", background: "#f1f5f9", color: "#475569", fontSize: "11px", fontWeight: 800, letterSpacing: "0.5px", boxSizing: "border-box" }}>
              <div>EMPLOYEE'S NAME</div>
              <div>E-MAIL</div>
              <div>ROLE / DIVISI</div>
              <div style={{ textAlign: "center" }}>ACTION</div>
            </div>

            {/* TABLE ROWS */}
            {employees.map((employee) => (
              <div
                key={employee.id}
                style={{ display: "grid", gridTemplateColumns: "1.5fr 1.5fr 1fr 0.8fr", alignItems: "center", padding: "14px 20px", borderBottom: "1px solid #f1f5f9", fontSize: "13px", color: "#1e293b", boxSizing: "border-box" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontWeight: 700 }}>
                  <span style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#e2e8f0", color: "#475569", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 700, flexShrink: 0 }}>
                    {employee.initial}
                  </span>
                  <span>{employee.name}</span>
                </div>

                <div style={{ color: "#64748b" }}>
                  {employee.email}
                </div>

                <div style={{ fontWeight: 600, color: "#334155" }}>
                  {employee.role}
                </div>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
                  <button style={{ border: 0, background: "transparent", cursor: "pointer", padding: 0 }}>
                    <EditIcon />
                  </button>

                  <button style={{ border: 0, background: "transparent", cursor: "pointer", padding: 0 }}>
                    <DisableIcon />
                  </button>
                </div>
              </div>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}