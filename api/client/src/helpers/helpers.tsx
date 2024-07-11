// @ts-nocheck
export class Helpers {
  static capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static blobToDataUrl(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = function () {
        resolve(reader.result);
      };
      reader.onerror = function (error) {
        reject(error);
      };
      reader.readAsDataURL(blob);
    });
  }

  static getDateInString = (date, local) => {
    const suffixes = ["th", "st", "nd", "rd"];
    const day = date.getDate();
    const month = date
      .toLocaleString(local, { month: "short" })
      .toUpperCase();
    const year = date.getFullYear();
    const hour = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    const daySuffix =
      day % 10 <= 3 && day < 11 && day > 13 ? suffixes[day % 10] : suffixes[0];

    return `${day} ${daySuffix} ${month}, ${year} ${hour}:${minutes}:${seconds}`;
  };

  static getYearString(date: Date): string {
    return `ANNÉE - ${date.getFullYear()}`;
  }
}
