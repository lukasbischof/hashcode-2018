module.exports = class Ride {

    /**
     * [constructor description]
     * @method constructor
     * @param  {[integer]}    id [id]
     * @param  {[integer]}    a [start x]
     * @param  {[integer]}    b [start y]
     * @param  {[integer]}    x [end x]
     * @param  {[integer]}    y [end y]
     * @param  {[integer]}    s [earliest start]
     * @param  {[integer]}    f [latest finish]
     */
    constructor(id, a, b, x, y, s, f) {
        this.a = a;
        this.b = b;
        this.x = x;
        this.y = y;
        this.s = s;
        this.f = f;
    }



};
