class Messenger {
    constructor(el) {
        this.el = el
        this.codeletters = "abcdefghijklmnopqrstuvwxyz1234567890-=ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.message = 0;
        this.currentLength = 0;
        this.fadeBuffer = false;
        this.messages = [
            'Computer Science',
            'Machine Learning',
            'Web Development',
            'IOS Development',
            'Cryptography'
        ];

        setTimeout(() => this.animateIn(), 100);
    }

    generateRandomString(length) {
        var randomText = "";
        while (randomText.length < length) {
            randomText += this.codeletters.charAt(Math.floor(Math.random() * this.codeletters.length));
        }

        return randomText;
    }

    animateIn() {
        if (this.currentLength < this.messages[this.message].length) {
            this.currentLength += 2;
            if (this.currentLength > this.messages[this.message].length) {
                this.currentLength = this.messages[this.message].length;
            }

            var message = this.generateRandomString(this.currentLength);
            this.el.innerHTML = message;

            setTimeout(() => this.animateIn(), 20);
        } else {
            setTimeout(() => this.animateFadeBuffer(), 20);
        }
    }

    animateFadeBuffer() {
        if (!this.fadeBuffer) {
            this.fadeBuffer = [];
            for (let i = 0; i < this.messages[this.message].length; i++) {
                this.fadeBuffer.push({
                    c: Math.floor(Math.random() * 12) + 1,
                    l: this.messages[this.message].charAt(i)
                });
            }
        }

        let doCycles = false;
        let message = "";

        for (let i = 0; i < this.fadeBuffer.length; i++) {
            var fader = this.fadeBuffer[i];
            if (fader.c > 0) {
                doCycles = true;
                fader.c--;
                message += this.codeletters.charAt(Math.floor(Math.random() * this.codeletters.length));
            } else {
                message += fader.l;
            }
        }

        this.el.innerHTML = message;

        if (doCycles) {
            setTimeout(() => this.animateFadeBuffer(), 50);
        } else {
            setTimeout(() => this.cycleText(), 2000);
        }
    }

    cycleText() {
        this.message++;
        if (this.message >= this.messages.length) {
            this.message = 0;
        }

        this.currentLength = 0;
        this.fadeBuffer = false;
        this.el.innerHTML = "";

        setTimeout(() => this.animateIn(), 200);
    }

    init() {
        this.animateIn();
    }
}

