export default {
    getWeekNumber : function() {
        const d = new Date();
        const dayNum = d.getUTCDay() || 7;
        d.setUTCDate(d.getUTCDate() + 4 - dayNum);
        const yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
        return Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1)/7)
    },
    getWeekNumberOfNextMonday : function() {
        const d = new Date();
        const dayNum = ((d.getUTCDay() + 6) % 7 ) || 7;
        d.setUTCDate(d.getUTCDate() + 4 - dayNum);
        const yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
        console.log((((d.getTime() - yearStart.getTime()) / 86400000))/7);
        return Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1)/7) + 1
    },
    getYearNumberOfNextMonday : function() {
        const d = new Date();
        const dayNum = ((d.getUTCDay() + 6) % 7 ) || 7;
        d.setUTCDate(d.getUTCDate() + 4 - dayNum);
        return d.getFullYear()
    },

    getDateOfISOWeek: function(w : number, y : number) {
        const simple = new Date(y, 0, 1 + (w - 1) * 7);
        const dow = simple.getDay();
        let ISOweekStart = simple;
        if (dow <= 4)
            ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
        else
            ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());

        return ISOweekStart;
    },
};