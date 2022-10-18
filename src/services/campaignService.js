import axios  from "axios";

const baseUrl = "http://localhost:8010/campaign";

const getCampaign = async () => {
  const response = await axios.get(baseUrl);
  //console.log(response.data)
  return response.data;
};

export default { getCampaign };