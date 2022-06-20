const getSingleSheetData = async (
  range: string,
  majorDimension?: "ROWS" | "COLUMNS"
) => {
  if (range) {
    majorDimension = majorDimension ? majorDimension : "ROWS";

    const spreadsheetId = "14C0yJguajMXj4uuacWl2L4az0o_LoeXKDWxtlWJI2-0";
    const key = "AIzaSyAmUJ3M2PjOwyX2piWYGz0UXrXhZn_dZPk";

    const res = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?majorDimension=${majorDimension}&key=${key}`
    );

    const json = await res.json();

    if (majorDimension == "ROWS") {
      const dataList = [];

      for (let i = 0; i < json.values.length; i++) {
        if (i > 0) {
          const data = {};

          json.values[i].forEach((val: string, idx: number) => {
            const key = json.values[0][idx].split("/")[1];
            Object.assign(data, { [key]: val });
          });

          dataList.push(data);
        }
      }

      return dataList;
    }

    return json;
  } else {
    return null;
  }
};

const getMultiSheetData = async (
  ranges: string[],
  majorDimension?: "ROWS" | "COLUMNS"
) => {
  if (ranges.length > 0) {
    majorDimension = majorDimension ? majorDimension : "ROWS";

    const spreadsheetId = "14C0yJguajMXj4uuacWl2L4az0o_LoeXKDWxtlWJI2-0";
    const key = "AIzaSyAmUJ3M2PjOwyX2piWYGz0UXrXhZn_dZPk";

    const res = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values:batchGet?ranges=${ranges.join(
        "&ranges="
      )}&majorDimension=${majorDimension}&key=${key}`
    );

    const json = await res.json();

    if (majorDimension == "ROWS") {
      const dataList = [];

      for (let i = 0; i < json.values.length; i++) {
        if (i > 0) {
          const data = {};

          json.values[i].forEach((val: string, idx: number) => {
            const key = json.values[0][idx].split("/")[1];
            Object.assign(data, { [key]: val });
          });

          dataList.push(data);
        }
      }

      return dataList;
    }

    return json;
  } else {
    return null;
  }
};

export { getSingleSheetData, getMultiSheetData };
