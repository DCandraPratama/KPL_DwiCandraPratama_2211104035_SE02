class HaloGeneric {
    SapaUser(user) {
      console.log(`Halo user ${user}`);
    }
  }
  
  // Fungsi utama
  function main() {
    const halo = new HaloGeneric();
    const nama = "Candra"; // Ganti dengan nama panggilan praktikan
    halo.SapaUser(nama);
  }
  
  main();