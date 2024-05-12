import axios from "axios";
import { LoginInput, Member, MemberInput } from "../../lib/types/member";
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

  public async signup(input: MemberInput): Promise<Member> {
    try {
      const url = this.path + "/member/signup";
      const result = await axios.post(url, input, { withCredentials: true });
      console.log("signup", result);

      const member: Member = result.data.member;
      console.log("member", member);
      localStorage.setItem("memberData", JSON.stringify(member));
      return member;
    } catch (err) {
      console.log(" Error signup , getUser", err);
      throw err;
    }
  }

  public async login(input: LoginInput): Promise<Member> {
    try {
      const url = this.path + "/member/login";
      const result = await axios.post(url, input, { withCredentials: true });
      console.log("login", result);

      const member: Member = result.data.member;
      console.log("member", member);
      localStorage.setItem("memberData", JSON.stringify(member));
      return member;
    } catch (err) {
      console.log(" Error login , getUser", err);
      throw err;
    }
  }
}

export default MemberService;
