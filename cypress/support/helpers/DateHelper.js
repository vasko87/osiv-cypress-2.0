export default {

  getCurrentDate() {
    const date = new Date();
    return date.toLocaleDateString("de-CH", {year: "numeric", month: "2-digit", day: "2-digit"});
  },

  getTimestamp() {
    const date = new Date();
    return date.getTime();
  },

  daysInCurrentYear() {
    return this.getCountOfdaysInYear(new Date().getFullYear());
  },

  daysInYear(year) {
    return ((year % 4 === 0 && year % 100 > 0) || year % 400 === 0) ? 366 : 365;
  },

  // get date in one year from now
  getSameDayNextYear() {
    const date = new Date();
    const end = new Date(date.getTime());
    end.setFullYear(date.getFullYear() + 1);
    return end.toLocaleDateString("de-CH", {year: "numeric", month: "2-digit", day: "2-digit"});
  },

  getDaysDiffFromTodayTillSameDayNextYear() {
    const date = new Date();
    const end = new Date(date.getTime());
    end.setFullYear(date.getFullYear() + 1);
    const diff = end.getTime() - date.getTime();
    return Math.round(diff / (1000 * 60 * 60 * 24));
  },

  // get date for first day of current month
  getFirstDayOfSameMonthNextYear() {
    const date = new Date();
    const firstDay = new Date(date.getFullYear() + 1, date.getMonth(), 1);
    return firstDay.toLocaleDateString("de-CH", {year: "numeric", month: "2-digit", day: "2-digit"});
  },

  // get date prior to current date in one year
  getOneDayLessNextYear() {
    const date = new Date();
    const end = new Date(date.getTime());
    end.setDate(date.getDate() - 1);
    end.setFullYear(date.getFullYear() + 1);
    return end.toLocaleDateString("de-CH", {year: "numeric", month: "2-digit", day: "2-digit"});
  },

  getCurrentDayPlusDays(days) {
    const date = new Date();
    const end = new Date(date.getTime());
    end.setDate(date.getDate() + days);
    return end.toLocaleDateString("de-CH", {year: "numeric", month: "2-digit", day: "2-digit"});
  }
};
