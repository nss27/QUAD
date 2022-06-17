const getSingleSheetData = async (range: string) => {
  const spreadsheetId = "14C0yJguajMXj4uuacWl2L4az0o_LoeXKDWxtlWJI2-0";
  const key = "AIzaSyAmUJ3M2PjOwyX2piWYGz0UXrXhZn_dZPk";
  // const range = "게임리스트";

  return await (
    await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${key}`
    )
  ).json();
};

const getMultiSheetData = async (ranges: string[]) => {
  const spreadsheetId = "14C0yJguajMXj4uuacWl2L4az0o_LoeXKDWxtlWJI2-0";
  const key = "AIzaSyAmUJ3M2PjOwyX2piWYGz0UXrXhZn_dZPk";
  // const ranges = ["게임리스트", "예시!a3:l4"];

  return await (
    await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values:batchGet?ranges=${ranges.join(
        "&ranges="
      )}&key=${key}`
    )
  ).json();
};

export { getSingleSheetData, getMultiSheetData };
