class TicTacToe {
    constructor() {
        this.table = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
        this.o = 'o';
        this.x = 'x';
        this.sign = this.x;
        this.twine = 0;
    }

    getCurrentPlayerSymbol() {
        return this.sign;
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.table[rowIndex][columnIndex]) {
            this.table[rowIndex][columnIndex] = this.sign;
            this.sign = this.sign == this.x ? this.o : this.x;
            this.twine++;
        }
    }

    isFinished() {
        return (this.isDraw() || this.getWinner()) ? true : false;
    }

    getWinner() {

        for (let i = 0; i < 3; i++) {
            if (this.table[i][0] === this.x &&
                this.table[i][1] === this.x &&
                this.table[i][2] === this.x) {
                return this.x;
            }
        }
        for (let i = 0; i < 3; i++) {
            if (this.table[0][i] === this.x &&
                this.table[1][i] === this.x &&
                this.table[2][i] === this.x) {
                return this.x;
            }
        }

        if (this.table[0][0] === this.x &&
            this.table[1][1] === this.x &&
            this.table[2][2] === this.x) {
            return this.x;
        }
        if (this.table[2][0] === this.x &&
            this.table[1][1] === this.x &&
            this.table[0][2] === this.x) {
            return this.x;

        }
        for (let i = 0; i < 3; i++) {
            if (this.table[i][0] === this.o &&
                this.table[i][1] === this.o &&
                this.table[i][2] === this.o) {
                return this.o;
            }
        }
        for (let i = 0; i < 3; i++) {
            if (this.table[0][i] === this.o &&
                this.table[1][i] === this.o &&
                this.table[2][i] === this.o) {
                return this.o;
            }
        }

        if (this.table[0][0] === this.o &&
            this.table[1][1] === this.o &&
            this.table[2][2] === this.o) {
            return this.o;
        }
        if (this.table[2][0] === this.o &&
            this.table[1][1] === this.o &&
            this.table[0][2] === this.o) {
            return this.o;
        }
        return null;

    }
    noMoreTurns() {
        return (this.twine == 9) ? true : false;
    }

    isDraw() {
        return (!this.getWinner() && this.noMoreTurns()) ? true : false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.table[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
