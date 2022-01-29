class Timer {
    constructor(durationInput,startButton,pauseButton) {
        this.durationInput=durationButton;
        this.startButton=startButton;
        this.pauseButton=pauseButton;

        this.startButton.addEventListener('click',click.start);
    }

    start() {
        console.log('Time To Start The timer');
    }
}