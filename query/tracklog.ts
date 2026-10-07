import { supabase } from "@/lib/supabaseClient";

export async function recordLogin() {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user?.email) {
    throw new Error("User belum login");
  }

  // Cari data pengguna di b2_register berdasarkan email
  const { data: register, error: registerError } = await supabase
    .from("b2_register")
    .select(`
      id,
      full_name,
      email,
      position_id,
      d3_positions (
        title,
        department_id,
        d3_departments (
          name
        )
      )
    `)
    .eq("email", user.email)
    .single();

  if (registerError || !register) {
    throw new Error("Data register pengguna tidak ditemukan");
  }

  const position = Array.isArray(register.d3_positions)
    ? register.d3_positions[0]
    : register.d3_positions;

  const department = Array.isArray(position?.d3_departments)
    ? position.d3_departments[0]
    : position?.d3_departments;

  // Simpan data login ke b3_log_login
  // tanggal dan waktu_login otomatis diisi oleh database
  const { data, error } = await supabase
    .from("b3_log_login")
    .insert({
      register_id: register.id,
      nama: register.full_name,
      email: register.email,
      departement: department?.name ?? null,
      position: position?.title ?? null,
    })
    .select()
    .single();

  if (error) {
    throw new Error(`Gagal mencatat login: ${error.message}`);
  }

  return data;
}

export async function recordLogout() {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user?.email) {
    return;
  }

  // Isi waktu logout untuk login yang belum memiliki waktu logout
  const { error } = await supabase
    .from("b3_log_login")
    .update({
      waktu_logout: new Date().toLocaleTimeString("en-GB", {
        timeZone: "Asia/Jakarta",
        hour12: false,
      }),
    })
    .eq("email", user.email)
    .is("waktu_logout", null);

  if (error) {
    throw new Error(`Gagal mencatat logout: ${error.message}`);
  }
}