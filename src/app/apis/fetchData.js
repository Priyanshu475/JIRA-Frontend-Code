import Axios from "axios";

const fetchData = () => {
  return Axios.get("https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers");
};

export default fetchData;
