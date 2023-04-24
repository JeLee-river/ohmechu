//users schema
import { Schema } from 'mongoose';

const usersSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      default: '기타',
    },
    address: {
      type: Array,
      required: true,
    },
    userPoint: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

export { usersSchema };

//아이디 -> 이메일
//성별 -> 남성 여성 기타
//우편번호 도로명주소 옛날주소 상세주소 참고사항(아파트이름) -> 5개 배열

//order_detail 을 객체 배열로 바꾸기
//_id를 id로 바꾸기
