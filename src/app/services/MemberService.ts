import axios from "axios";
import { Member } from "../../lib/types/member";
import { serverApi } from "../../lib/types/config";
class MemberService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }
  public async getStore(): Promise<Member> {
    try {
      const url = this.path + "/member/store";
      const result = await axios.get(url);
      console.log("getStore", result);

      const restaurant: Member = result.data;

      return restaurant;
    } catch (err) {
      console.log("Error, getStore:", err);
      throw err;
    }
  }
}

export default MemberService;
