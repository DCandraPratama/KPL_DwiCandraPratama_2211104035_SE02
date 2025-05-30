# Modul14_REFACTORING CODE DENGAN STANDAR NODE.JS

## Biodata

Dimas Dwi Candra Pratama
NIM: 2211104035

## Deskripsi Singkat

Refactoring kode permainan berbasis state-machine menggunakan standar Node.js, dengan pemisahan kode menjadi modular.

## Perubahan yang Dilakukan

- Mengganti `var` dengan `let`/`const`
- Menggunakan enum `GameState` yang diekspor dari file terpisah
- Menambahkan komentar JSDoc untuk dokumentasi fungsi dan enum
- Merapikan spasi dan indentasi sesuai standar
- Menghindari duplikasi kode
- Memodularisasi kode menjadi dua file: `stateMachine.js` dan `gameState.js`

## Cara Menjalankan

```bash
node stateMachine.js
```

## Contoh Output Program

```txt
START SCREEN
Enter Command: START
START SCREEN
Enter Command: PLAY
PLAYING SCREEN
Enter Command: EXIT
PLAYING SCREEN
Enter Command: QUIT
PLAYING SCREEN
Enter Command: RESTART
PLAYING SCREEN
Enter Command: EXIT
PLAYING SCREEN
Enter Command: LOSE
GAME_OVER SCREEN
Enter Command: RESTART
START SCREEN
Enter Command: EXIT
EXIT SCREEN
```

> Catatan: Input yang tidak sesuai (seperti `START`, `QUIT`, `RESTART` saat bukan pada state yang valid) akan diabaikan tanpa mengubah state saat ini.