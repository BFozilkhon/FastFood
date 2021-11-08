import styled from "styled-components";
import { ReactComponent as save } from "../../../assets/icons/save.svg";
import { ReactComponent as clock } from "../../../assets/icons/clock.svg";
import { ReactComponent as user } from "../../../assets/icons/user.svg";
import { ReactComponent as phone } from "../../../assets/icons/phone.svg";
import { ReactComponent as batarey } from "../../../assets/icons/batarey.svg";
import { ReactComponent as truck } from "../../../assets/icons/truck.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  margin-top: 50px;
  width: 80%;
  height: 190px;
  background-color: white;
  border-radius: 12px;
  display: flex;
`;

export const Box = styled.div`
  flex: 1;
  position: ${({ reletiving }) => reletiving && "relative"};
  padding: ${({ margin }) => (margin ? "20px 30px 0px 30px" : "20px 60px")};
  border-right: ${({ yoq }) => !yoq && "4px solid #edeff3"};
`;

export const Flexing = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ bottom }) => bottom && "50px"};
  margin-bottom: ${({ top }) => top && "20px"};
`;

export const Btn = styled.div`
  background: #20d472;
  border-radius: 30px;
  width: 115px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 23px;
  margin-right: 40px;
`;

export const Circle = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: #edeff3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SaveIcon = styled(save)`
  width: 23px;
  height: 23px;
`;

export const ClockIcon = styled(clock)`
  width: 30px;
  height: 30px;
  margin-right: 20px;
  margin-left: 10px;
`;

export const Title = styled.div`
  margin-top: ${({ top }) => top && "5px"};
  font-size: ${({ norm }) => (norm ? "20px" : "25px")};
`;

//Box2

export const UserIcon = styled(user)`
  width: 30px;
  height: 30px;
  margin-right: 20px;
`;

export const PhoneIcon = styled(phone)`
  width: 30px;
  height: 30px;
  margin-right: 20px;
`;

//Box3

export const BatareyIcon = styled(batarey)`
  width: 25px;
  height: 25px;
  margin-right: 0px;
`;

export const Item = styled.div`
  font-size: ${({ summa }) => (summa ? "14px" : "17px")};
  margin-left: ${({ summa }) => (summa ? "0px" : "17px")};
  margin-top: ${({ toping }) => toping && "27px"};
  color: ${({ summa }) => summa && "#8D9BA8"};
`;

export const TruckIcon = styled(truck)`
  width: 25px;
  height: 25px;
  margin-right: 0px;
`;

export const Payme = styled.div`
  background: #14e5e4;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 0px;
  margin-left: 35px;
`;

export const Text = styled.div`
  font-size: 20px;
  font-weight: 600px;
  margin-top: 1px;
`;

export const ImgBox = styled.div`
  position: absolute;
  right: -30px;
  top: ${({ tepa }) => (tepa ? "20px" : "110px")};
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: white;
  border: 6px solid #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 20px;
  height: 20px;
`;
