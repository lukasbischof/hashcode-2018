module.exports = class Simulation {

    /**
     * [constructor description]
     * @method constructor
     * @param  {[type]}    r [rows]
     * @param  {[type]}    c [columns]
     * @param  {[type]}    f [vehicleCount]
     * @param  {[type]}    n [ridesCount]
     * @param  {[type]}    b [onTimeBonus]
     * @param  {[type]}    t [maxSteps]
     */
    constructor(r, c, f, n, b, t) {
        this.rows = r;
        this.columns = c;
        this.vehicleCount = f;
        this.ridesCount = n;
        this.onTimeBonus = b;
        this.maxSteps = t;
        this.currentStep = 0;
    }

};
