class DataGeneric {
    constructor(data) {
      this.data = data;
    }
  
    PrintData() {
      console.log(`${this.data}`);
    }
  }
  
  // Fungsi utama
  function main() {
    const nama = "Dwi Candra Pratama"; // Ganti dengan nama panggilan praktikan
    const nim = "2211104035"; // Ganti dengan NIM praktikan
    const data = new DataGeneric(`${nama} dengan nim : ${nim}`);
    
    data.PrintData();
  }
  
  main();