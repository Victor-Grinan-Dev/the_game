import { axios } from "axios";


export const getCampaign = async () => {
    const response = await axios.get("http://localhost:8010/campaign");
    return response.data;
  };