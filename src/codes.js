export const codeOne = `
exports.placeTimezone = async (req, res) => {
  const config = {
    method: "get",
    url:"https://api.drivado.com/api/v1/api/apiplaceTimezone?lat=lat[ENTER LATITUDE IN QUERY]&lng=lng[ENTER LONGITUDE IN QUERY]",
    headers: {},
  };
  try {
    const response = await axios(config);
    console.log(JSON.stringify(response.data));
    res.send(response.data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
`
