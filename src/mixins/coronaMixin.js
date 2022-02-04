import axios from "axios";
const coronaMixin = {
  methods: {
    async fetchData(method, url, params) {
      //params 데이터를 보낼때 추가적으로 보낼 수 있는 세번째 쿼리. 파람스라는 프로퍼티 안에 오브젝트 형태의 데이터를 보냄
      const res = await axios[method](url, { params }); //key=value면 생략{params: params} 가능
      return res.data;
    },
  },
};

export default coronaMixin;
