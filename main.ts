namespace poitch2 {

    let initFlag = 0;

    function initSwitch(): void {
        pins.digitalWritePin(DigitalPin.P2, 0);
        pins.setPull(DigitalPin.P8, PinPullMode.PullUp);
        pins.setPull(DigitalPin.P12, PinPullMode.PullUp);
        pins.setPull(DigitalPin.P13, PinPullMode.PullUp);
        initFlag=1;
    }
    /**
     * get switch data
     * @param sw test pin of switch
     */
    //% blockId=testSwitch block="test switch at|%sw"
    export function testSwitch(sw : DigitalPin): boolean {
		if (initFlag == 0){
			initSwitch();
		}
        if (pins.digitalReadPin(sw)==0){
            return true;
        } else {
            return false;
        }
    }
    /**
     * get switch data
     * @param sw read pin of switch
     */
    //% blockId=readSwitch block="read switch at|%sw"
    export function readSwitch(sw: DigitalPin): number {
        if (initFlag == 0) {
            initSwitch();
        }
        return pins.digitalReadPin(sw);
    }
}
