// Soal 1: Automata-based Construction (FSM)
//A. Sebuah game memiliki tiga state utama:

// 1. START (awal permainan)
// 2. PLAYING (sedang bermain)
// 3. GAME OVER (permainan berakhir)
//B. Aturan transisi antar state:

// 1. Dari START, jika pemain mengetik “PLAY”, permainan masuk ke state PLAYING.
// 2. Dari PLAYING, jika pemain mengetik “LOSE”, permainan masuk ke state GAME OVER.
// 3. Dari GAME OVER, jika pemain mengetik “RESTART”, permainan kembali ke state START.
// 4. Pemain bisa keluar kapan saja dengan mengetik “EXIT”.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const State = {
    START: "START",
    PLAYING: "PLAYING",
    GAME_OVER: "GAME_OVER",
    EXIT: "EXIT"
};

let state = State.START;

function runStateMachine() {
    console.log(`${state} SCREEN`);
    rl.question("Enter Command: ", (command) => {
        switch (state) {
            case State.START:
                if (command === "PLAY") state = State.PLAYING;
                else if (command === "EXIT") state = State.EXIT;
                break;
            case State.PLAYING:
                if (command === "LOSE") state = State.GAME_OVER;
                else if (command === "EXIT") state = State.EXIT;
                break;
            case State.GAME_OVER:
                if (command === "RESTART") state = State.START;
                else if (command === "EXIT") state = State.EXIT;
                break;
        }
        if (state !== State.EXIT) {
            runStateMachine();
        } else {
            console.log("EXIT SCREEN");
            rl.close();
        }
    });
}

runStateMachine();
